import { assert } from "@samual/lib/assert"
import { TokenTag } from "./TokenTag"

export type Token = { tag: TokenTag, index: number, size: number }

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

	const Newline = union(oneOf(`\n\r`), terminal(`\r\n`))
	const Format = union(Newline, terminal(`\t`))

	const IdentifierSymbolCharacters = `!#$%&'*+-./:<=>?@\\^_\`|~`

	const IdentifierCharacter =
		union(range(`0`, `9`), range(`A`, `Z`), range(`a`, `z`), oneOf(IdentifierSymbolCharacters))

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
	const Comment = union(LineComment, BlockComment)
	const Space = many(union(terminal(` `), Format, Comment))
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
	const IdentifierBoundry = () => index >= code.length || !IdentifierSymbolCharacters.includes(code[index]!)
	const Integer32Type = sequence(terminal(`i32`), IdentifierBoundry)
	const Integer64Type = sequence(terminal(`i64`), IdentifierBoundry)
	const Float32Type = sequence(terminal(`f32`), IdentifierBoundry)
	const Float64Type = sequence(terminal(`f64`), IdentifierBoundry)

	while (index < code.length) {
		if (Space())
			continue

		const startIndex = index
		const Token = (tag: TokenTag) => ({ tag, index: startIndex, size: index - startIndex })

		if (Integer32Type())
			yield Token(TokenTag.Integer32Type)
		else if (Integer64Type())
			yield Token(TokenTag.Integer64Type)
		else if (Float32Type())
			yield Token(TokenTag.Float32Type)
		else if (Float64Type())
			yield Token(TokenTag.Float64Type)
		else if (Float())
			yield Token(TokenTag.Number)
		else if (Keyword())
			yield Token(TokenTag.Keyword)
		else if (String())
			yield Token(TokenTag.String)
		else if (Identifier())
			yield Token(TokenTag.Identifier)
		else if (terminal(`(`)())
			yield Token(TokenTag.OpenBracket)
		else if (terminal(`)`)())
			yield Token(TokenTag.CloseBracket)
		else
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

	test(`nested comment`, () => [ ...tokenise(`(; a (; b ;) c ;)`) ])
	test(`signed integer`, () => [ ...tokenise(`+123`) ])
	test(`number`, () => [ ...tokenise(`3.`) ])
	test(`number with fraction`, () => expect([ ...tokenise(`3.5`) ]).toMatchObject([ Number ]))
	test(`number with exponent`, () => expect([ ...tokenise(`1e2`) ]).toMatchObject([ Number ]))
	test(`hex`, () => expect([ ...tokenise(`0x1`) ]).toMatchObject([ Number ]))
	test(`hex exponent`, () => expect([ ...tokenise(`0x1p1`) ]).toMatchObject([ Number ]))
	test(`i32`, () => expect([ ...tokenise(`i32`) ]).toMatchObject([ { tag: TokenTag.Integer32Type } ]))
	test(`i64`, () => expect([ ...tokenise(`i64`) ]).toMatchObject([ { tag: TokenTag.Integer64Type } ]))
	test(`f32`, () => expect([ ...tokenise(`f32`) ]).toMatchObject([ { tag: TokenTag.Float32Type } ]))
	test(`f64`, () => expect([ ...tokenise(`f64`) ]).toMatchObject([ { tag: TokenTag.Float64Type } ]))
}
