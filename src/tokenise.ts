import { assert } from "@samual/lib/assert"
import { TokenTag } from "./TokenTag"

export type Token = { tag: TokenTag, index: number, size: number }

const NamesToKeywords = {
	Integer32: `i32`,
	Integer64: `i64`,
	Float32: `f32`,
	Float64: `f64`,
	Vector128: `v128`,
	FunctionReference: `funcref`,
	ExternalReference: `externref`,
	Function: `func`,
	External: `extern`,
	Parameter: `param`,
	Result: `result`,
	Mutable: `mut`
} satisfies { [K in keyof typeof TokenTag]?: string }

export function* tokenise(code: string): Generator<Token, void, void> {
	let index = 0

	const optional = (rule: () => boolean) => () => {
		rule()

		return true
	}

	const range = (first: string, last: string) => () => {
		assert(first < last, HERE)

		if (code[index]! >= first && code[index]! <= last) {
			index++

			return true
		}

		return false
	}

	const oneOf = (search: string) => () => {
		if (index < code.length && search.includes(code[ index ]!)) {
			index++

			return true
		}

		return false
	}

	const union = (...rules: (() => boolean)[]) => () => {
		for (const rule of rules) {
			if (rule())
				return true
		}

		return false
	}

	const condition = (checker: () => boolean) => () => {
		if (index < code.length && checker()) {
			index++

			return true
		}

		return false
	}

	const terminal = (search: string) => () => {
		if (code.startsWith(search, index)) {
			index += search.length

			return true
		}

		return false
	}

	const sequence = (...rules: (() => boolean)[]) => () => {
		const startIndex = index

		for (const rule of rules) {
			if (!rule()) {
				index = startIndex

				return false
			}
		}

		return true
	}

	const many = (rule: () => boolean) => () => {
		if (!rule())
			return false

		while (rule());

		return true
	}

	const negativeLookahead = (rule: () => boolean) => () => {
		const start = index

		if (rule()) {
			index = start

			return false
		}

		return true
	}

	const Newline = union(oneOf(`\n\r`), terminal(`\r\n`))
	const Format = union(Newline, terminal(`\t`))

	const IdentifierCharacter =
		union(range(`0`, `9`), range(`A`, `Z`), range(`a`, `z`), oneOf(`!#$%&'*+-./:<=>?@\\^_\`|~`))

	const Keyword = sequence(range(`a`, `z`), optional(many(IdentifierCharacter)))
	const HexDigit = union(range(`0`, `9`), range(`A`, `F`), range(`a`, `f`))
	const HexNumber = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

	const StringCharacter = union(
		condition(() => code[index]! >= `\x20` && code[index]! != `\x7F` && code[index] != `"` && code[index] != `\\`),
		terminal(`\\t`),
		terminal(`\\n`),
		terminal(`\\r`),
		terminal(`\\"`),
		terminal(`\\'`),
		terminal(`\\\\`),
		sequence(terminal(`\\u{`), HexNumber, terminal(`}`))
	)

	const StringElement = union(StringCharacter, sequence(terminal(`\\`), HexDigit, HexDigit))
	const String = sequence(terminal(`"`), optional(many(StringElement)), terminal(`"`))
	const Identifier = sequence(terminal(`$`), many(IdentifierCharacter))
	const Number = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
	const LineCharacter = condition(() => code[index] != `\n` && code[index] != `\r`)

	const LineComment =
		sequence(terminal(`;;`), optional(many(LineCharacter)), union(Newline, () => index == code.length))

	const BlockCharacter = union(
		condition(() => code[index] != `;` && code[index] != `(`),
		condition(() => code[index] == `;` && code[index + 1] != `)`),
		condition(() => code[index] == `(` && code[index + 1] != `;`),
		() => BlockComment()
	)

	const BlockComment = sequence(terminal(`(;`), optional(many(BlockCharacter)), terminal(`;)`))
	const Space = many(union(terminal(` `), Format))
	const Sign = optional(union(terminal(`+`), terminal(`-`)))
	const Fraction = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
	const HexFraction = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

	const DecimalFloat = sequence(
		Number,
		union(sequence(terminal(`.`), Fraction), optional(terminal(`.`))),
		optional(sequence(oneOf(`Ee`), Sign, Number))
	)

	const HexFloat = sequence(
		terminal(`0x`),
		HexNumber,
		union(sequence(terminal(`.`), HexFraction), optional(terminal(`.`))),
		optional(sequence(oneOf(`Pp`), Sign, HexNumber))
	)

	const FloatMag =
		union(HexFloat, DecimalFloat, terminal(`inf`), sequence(terminal(`nan:0x`), HexNumber), terminal(`nan`))

	const Float = sequence(Sign, FloatMag)
	const OpenBracket = terminal(`(`)
	const CloseBracket = terminal(`)`)

	const tokenFunctions: Record<keyof typeof TokenTag, () => boolean> = {
		...Object.fromEntries(Object.entries(NamesToKeywords)
			.map(([ name, keyword ]) => [ name, sequence(terminal(keyword), negativeLookahead(IdentifierCharacter)) ])
		) as Record<keyof typeof NamesToKeywords, () => boolean>,
		LineComment, BlockComment, Number: Float, Keyword, String, Identifier, OpenBracket, CloseBracket
	}

	while_: while (index < code.length) {
		if (Space())
			continue

		const startIndex = index
		const Token = (tag: TokenTag) => ({ tag, index: startIndex, size: index - startIndex })

		for (const name in tokenFunctions) {
			if (tokenFunctions[name as keyof typeof tokenFunctions]()) {
				yield Token(TokenTag[name as keyof typeof tokenFunctions])

				continue while_
			}
		}

		throw Error(`${HERE} Unexpected character ${JSON.stringify(code[index])} at index ${index}`)
	}
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest

	test(`tokenise wasi hello world`, () => [ ...tokenise(`
		(import "wasi_unstable" "fd_write" (func $fd_write (param i32 i32 i32 i32) (result i32)))

		(memory 1)
		(export "memory" (memory 0))

		;; io vector
		(data (i32.const 0) "\\08") ;; pointer to string
		(data (i32.const 4) "\\0e") ;; length of string
		(data (i32.const 8) "Hello, World!\\n")

		(global $stdout i32 (i32.const 1))

		(func (export "_start")
			(drop
				(call $fd_write
					(global.get $stdout)
					(i32.const 0) ;; pointer to io vector
					(i32.const 1) ;; length of io vector
					(i32.const 20) ;; where to store number of bytes written
				)
			)
		)
	`) ])

	const Number = { tag: TokenTag.Number }

	test(`line comment`, () => expect([ ...tokenise(`;;`) ]).toMatchObject([ { tag: TokenTag.LineComment } ]))
	test(`nested comment`, () => expect([ ...tokenise(`(; a (; b ;) c ;)`) ]).toMatchObject([ { tag: TokenTag.BlockComment } ]))
	test(`signed integer`, () => [ ...tokenise(`+123`) ])
	test(`number`, () => [ ...tokenise(`3.`) ])
	test(`number with fraction`, () => expect([ ...tokenise(`3.5`) ]).toMatchObject([ Number ]))
	test(`number with exponent`, () => expect([ ...tokenise(`1e2`) ]).toMatchObject([ Number ]))
	test(`hex`, () => expect([ ...tokenise(`0x1`) ]).toMatchObject([ Number ]))
	test(`hex exponent`, () => expect([ ...tokenise(`0x1p1`) ]).toMatchObject([ Number ]))
	test(`funci32`, () => expect([ ...tokenise(`funci32`) ]).toMatchObject([ { tag: TokenTag.Keyword } ]))

	for (const [ name, keyword ] of Object.entries(NamesToKeywords)) {
		test(keyword, () =>
			expect([ ...tokenise(keyword) ]).toMatchObject([ { tag: TokenTag[name as keyof typeof NamesToKeywords] } ])
		)
	}
}
