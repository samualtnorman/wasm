import { TokenTag } from "./TokenTag"
import { assert } from "@samual/lib/assert"

export type Token = { tag: TokenTag, index: number, size: number }

export function* tokenise(code: string): Generator<Token, void, void> {
	let index = 0

	const optional = (eatFunction: () => boolean) => () => {
		eatFunction()

		return true
	}

	const maybeEatCharacterBetween = (first: string, last: string) => () => {
		assert(first < last, HERE)

		if (code[index]! >= first && code[index]! <= last) {
			index++

			return true
		}

		return false
	}

	const maybeEatOneOf = (search: string) => () => {
		if (index < code.length && search.includes(code[ index ]!)) {
			index++

			return true
		}

		return false
	}

	const union = (...eatFunctions: (() => boolean)[]) => () => {
		for (const eatFunction of eatFunctions) {
			if (eatFunction())
				return true
		}

		return false
	}

	const eatCharacterIf = (checker: () => boolean) => () => {
		if (checker()) {
			index++

			return true
		}

		return false
	}

	const maybeEat = (search: string) => () => {
		if (code.startsWith(search, index)) {
			index += search.length

			return true
		}

		return false
	}

	const sequence = (...eatFunctions: (() => boolean)[]) => () => {
		const startIndex = index

		for (const eatFunction of eatFunctions) {
			if (!eatFunction()) {
				index = startIndex

				return false
			}
		}

		return true
	}

	const many = (eatFunction: () => boolean) => () => {
		if (!eatFunction())
			return false

		while (eatFunction());

		return true
	}

	const maybeEatNewline = union(maybeEatOneOf(`\n\r`), maybeEat(`\r\n`))
	const maybeEatFormat = union(maybeEatNewline, maybeEat(`\t`))

	const maybeEatIdentifierCharacter = union(
		maybeEatCharacterBetween(`0`, `9`),
		maybeEatCharacterBetween(`A`, `Z`),
		maybeEatCharacterBetween(`a`, `z`),
		maybeEatOneOf(`!#$%&'*+-./:<=>?@\\^_\`|~`)
	)

	const maybeEatKeyword = sequence(
		maybeEatCharacterBetween(`a`, `z`),
		optional(many(maybeEatIdentifierCharacter))
	)

	const maybeEatHexDigit = union(
		maybeEatCharacterBetween(`0`, `9`),
		maybeEatCharacterBetween(`A`, `F`),
		maybeEatCharacterBetween(`a`, `f`)
	)

	/** hexnum = hexdigit (`_`? hexdigit)* */
	const maybeEatHexNumber = sequence(
		// hexdigit
		maybeEatHexDigit,
		// (`_`? hexdigit)*
		optional(many(sequence(optional(maybeEat(`_`)), maybeEatHexDigit)))
	)

	const maybeEatStringCharacter = union(
		eatCharacterIf(() => code[index]! >= `\x20` && code[index]! != `\x7F` && code[index] != `"` && code[index] != `\\`),
		maybeEat(`\\t`),
		maybeEat(`\\n`),
		maybeEat(`\\r`),
		maybeEat(`\\"`),
		maybeEat(`\\'`),
		maybeEat(`\\\\`),
		sequence(maybeEat(`\\u{`), maybeEatHexNumber, maybeEat(`}`))
	)

	const maybeEatStringElement = union(
		maybeEatStringCharacter,
		sequence(maybeEat(`\\`), maybeEatHexDigit, maybeEatHexDigit)
	)

	const maybeEatString = sequence(
		maybeEat(`"`),
		optional(many(maybeEatStringElement)),
		maybeEat(`"`)
	)

	const maybeEatIdentifier = sequence(maybeEat(`$`), many(maybeEatIdentifierCharacter))

	/** num = digit (`_`? digit)* */
	const maybeEatNumber = sequence(
		maybeEatCharacterBetween(`0`, `9`),
		optional(many(sequence(
			optional(maybeEat(`_`)),
			maybeEatCharacterBetween(`0`, `9`)
		)))
	)

	const maybeEatLineCharacter = eatCharacterIf(() => code[index] != `\n` && code[index] != `\r`)

	const maybeEatLineComment = sequence(
		maybeEat(`;;`),
		optional(many(maybeEatLineCharacter)),
		union(maybeEatNewline, () => index == code.length)
	)

	const maybeEatBlockCharacter = union(
		eatCharacterIf(() => code[index] != `;` && code[index] != `(`),
		eatCharacterIf(() => code[index] == `;` && code[index + 1] != `)`),
		eatCharacterIf(() => code[index] == `(` && code[index + 1] != `;`),
		() => maybeEatBlockComment()
	)

	/** blockcomment = `(;` blockchar* `;)` */
	const maybeEatBlockComment = sequence(
		maybeEat(`(;`),
		optional(many(maybeEatBlockCharacter)),
		maybeEat(`;)`)
	)

	const maybeEatComment = union(maybeEatLineComment, maybeEatBlockComment)

	const maybeEatSpace = many(union(maybeEat(` `), maybeEatFormat, maybeEatComment))
	const maybeEatSign = optional(union(maybeEat(`+`), maybeEat(`-`)))

	/** frac = digit (`_`? digit)* */
	const maybeEatFraction = sequence(
		maybeEatCharacterBetween(`0`, `9`),
		optional(many(sequence(
			optional(maybeEat(`_`)),
			maybeEatCharacterBetween(`0`, `9`))
		))
	)

	/** hexfrac = hexdigit (`_`? hexdigit)* */
	const maybeEatHexFraction = sequence(
		// hexdigit
		maybeEatHexDigit,
		many(() => (maybeEat(`_`), maybeEatHexDigit()))
	)

	/** float = num (`.`? | `.` frac) ((`E` | `e`) sign num)? */
	const maybeEatDecimalFloat = sequence(
		// num
		maybeEatNumber ,
		// (`.`? | `.` frac)
		union(sequence(maybeEat(`.`), maybeEatFraction), optional(maybeEat(`.`))),
		// ((`E` | `e`) sign num)?
		optional(sequence(maybeEatOneOf(`Ee`), maybeEatSign, maybeEatNumber))
	)

	/** hexfloat = `0x` hexnum (`.` hexfrac | `.`?) ((`E` | `e`) sign hexnum)? */
	const maybeEatHexFloat = sequence(
		// `0x`
		maybeEat(`0x`),
		// hexnum
		maybeEatHexNumber,
		// (`.` hexfrac | `.`?)
		union(sequence(maybeEat(`.`), maybeEatHexFraction), optional(maybeEat(`.`))),
		// ((`E` | `e`) sign hexnum)?
		optional(sequence(maybeEatOneOf(`Ee`), maybeEatSign, maybeEatHexNumber))
	)

	/** fNmag = float | hexfloat | `inf` | `nan` | `nan:0x` hexnum */
	const maybeEatFloatMag = union(
		maybeEatHexFloat,
		maybeEatDecimalFloat,
		maybeEat(`inf`),
		sequence(maybeEat(`nan:0x`), maybeEatHexNumber),
		maybeEat(`nan`)
	)

	/** fN = sign fNmag */
	const maybeEatFloat = sequence(maybeEatSign, maybeEatFloatMag)

	while (index < code.length) {
		if (maybeEatSpace())
			continue

		const startIndex = index
		const Token = (tag: TokenTag) => ({ tag, index: startIndex, size: index - startIndex })

		if (maybeEatFloat())
			yield Token(TokenTag.Number)
		else if (maybeEatKeyword())
			yield Token(TokenTag.Keyword)
		else if (maybeEatString())
			yield Token(TokenTag.String)
		else if (maybeEatIdentifier())
			yield Token(TokenTag.Identifier)
		else if (maybeEat(`(`)())
			yield Token(TokenTag.OpenBracket)
		else if (maybeEat(`)`)())
			yield Token(TokenTag.CloseBracket)
		else
			throw Error(`${HERE} Unexpected character ${JSON.stringify(code[index])} at index ${index}`)
	}
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest

	test(`tokenise wasi hello world`, () => console.debug([ ...tokenise(`
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
	`) ]))

	const Number = { tag: TokenTag.Number }

	test(`nested comment`, () => console.debug([ ...tokenise(`(; a (; b ;) c ;)`) ]))
	test(`signed integer`, () => console.debug(...tokenise(`+123`)))
	test(`number`, () => console.debug(...tokenise(`3.`)))
	test(`number with fraction`, () => expect([ ...tokenise(`3.5`) ]).toMatchObject([ Number ]))
	test(`number with exponent`, () => expect([ ...tokenise(`1e2`) ]).toMatchObject([ Number ]))
	test(`hex`, () => expect([ ...tokenise(`0x1`) ]).toMatchObject([ Number ]))
}
