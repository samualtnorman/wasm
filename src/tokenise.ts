import { TokenTag } from "./TokenTag"
import { assert, ensure } from "@samual/lib/assert"

export type Token = { tag: TokenTag, index: number, size: number }

export function* tokenise(code: string): Generator<Token, void, void> {
	let index = 0

	const maybeEatNewline = () => maybeEatOneOf(`\n\r`) || maybeEat(`\r\n`)
	const maybeEatFormat = () => maybeEatNewline() || maybeEat(`\t`)

	const maybeEatIdentifierCharacter = () => maybeEatCharacterBetween(`0`, `9`) ||
		maybeEatCharacterBetween(`A`, `Z`) || maybeEatCharacterBetween(`a`, `z`) ||
		maybeEatOneOf(`!#$%&'*+-./:<=>?@\\^_\`|~`)

	const maybeEatKeyword = () => maybeEatCharacterBetween(`a`, `z`) && (many(maybeEatIdentifierCharacter), true)

	const maybeEatHexNumber = (): boolean =>
		maybeEatHexDigit() && (maybeEat(`_`) ? ensure(maybeEatHexNumber(), HERE) : (maybeEatHexNumber(), true))

	const maybeEatStringCharacter = () =>
		eatCharacterIf(code[index]! >= `\x20` && code[index]! != `\x7F` && code[index] != `"` && code[index] != `\\`) ||
		maybeEat(`\\t`) || maybeEat(`\\n`) || maybeEat(`\\r`) || maybeEat(`\\"`) || maybeEat(`\\'`) ||
		maybeEat(`\\\\`) || (maybeEat(`\\u{`) && ensure(maybeEatHexNumber(), HERE) && ensure(maybeEat(`}`), HERE))

	const maybeEatHexDigit = () => maybeEatCharacterBetween(`0`, `9`) || maybeEatCharacterBetween(`A`, `F`) ||
		maybeEatCharacterBetween(`a`, `f`)

	const maybeEatStringElement = () => maybeEatStringCharacter() ||
		(maybeEat(`\\`) && ensure(maybeEatHexDigit(), HERE) && ensure(maybeEatHexDigit(), HERE))

	const maybeEatString = () => maybeEat(`"`) && (many(() => maybeEatStringElement()), ensure(maybeEat(`"`), HERE))
	const maybeEatIdentifier = () => maybeEat(`$`) && ensure(many(maybeEatIdentifierCharacter), HERE)

	/** num = digit (`_`? digit)* */
	const maybeEatNumber = () => group(() =>
		maybeEatCharacterBetween(`0`, `9`) &&
		(many(() => (maybeEat(`_`), maybeEatCharacterBetween(`0`, `9`))), true)
	)

	const maybeEatLineCharacter = () => eatCharacterIf(code[index] != `\n` && code[index] != `\r`)

	const maybeEatLineComment = () => maybeEat(`;;`) && (many(maybeEatLineCharacter), ensure(maybeEatNewline() || index == code.length, HERE))

	const maybeEatBlockCharacter = () => eatCharacterIf(code[index] != `;` && code[index] != `(`) ||
		eatCharacterIf(code[index] == `;` && code[index + 1] != `)`) ||
		eatCharacterIf(code[index] == `(` && code[index + 1] != `;`) ||
		maybeEatBlockComment()

	const maybeEatBlockComment = () => maybeEat(`(;`) && (many(maybeEatBlockCharacter), ensure(maybeEat(`;)`), HERE))

	const maybeEatComment = () => maybeEatLineComment() || maybeEatBlockComment()

	const maybeEatSpace = () => many(() => maybeEat(` `) || maybeEatFormat() || maybeEatComment())
	const maybeEatSign = () => (maybeEat(`+`) || maybeEat(`-`), true)

	const maybeEatFraction = (): boolean => maybeEatCharacterBetween(`0`, `9`) &&
		(maybeEat(`_`) ? ensure(maybeEatFraction(), HERE) : (maybeEatFraction(), true))

	const maybeEatHexFraction = (): boolean =>
		maybeEatHexDigit() && (maybeEat(`_`) ? ensure(maybeEatHexFraction(), HERE) : (maybeEatHexFraction(), true))

	/** float = num (`.`? | `.` frac) ((`E` | `e`) sign num)? */
	const maybeEatDecimalFloat = () => group(() =>
		maybeEatNumber() &&
		(
			group(() => maybeEat(`.`) && maybeEatFraction()) ||
			(maybeEat(`.`), true)
		) &&
		(group(() => maybeEatOneOf(`Ee`) && maybeEatSign() && maybeEatNumber()), true)
	)

	/** hexfloat = hexnum (`.`? | `.` hexfrac) ((`E` | `e`) sign hexnum)? */
	const maybeEatHexFloat = () => group(() =>
		maybeEat(`0x`) &&
		maybeEatHexNumber() &&
		(
			group(() => maybeEat(`.`) && maybeEatHexFraction()) ||
			(maybeEat(`.`), true)
		) &&
		(group(() => maybeEatOneOf(`Ee`) && maybeEatSign() && maybeEatHexNumber()), true)
	)

	/** fNmag = float | hexfloat | `inf` | `nan` | `nan:0x` hexnum */
	const maybeEatFloatMag = () => group(() =>
		maybeEatDecimalFloat() ||
		maybeEatHexFloat() ||
		maybeEat(`inf`) ||
		group(() => maybeEat(`nan:0x`) && maybeEatHexNumber()) ||
		maybeEat(`nan`)
	)

	/** fN = sign fNmag */
	const maybeEatFloat = () => group(() => maybeEatSign() && maybeEatFloatMag())

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
		else if (maybeEat(`(`))
			yield Token(TokenTag.OpenBracket)
		else if (maybeEat(`)`))
			yield Token(TokenTag.CloseBracket)
		else
			throw Error(`${HERE} Unexpected character ${JSON.stringify(code[index])} at index ${index}`)
	}

	function eatCharacterIf(condition: boolean) {
		if (condition) {
			index++

			return true
		}

		return false
	}

	function maybeEatCharacterBetween(first: string, last: string) {
		assert(first < last, HERE)

		if (code[index]! >= first && code[index]! <= last) {
			index++

			return true
		}

		return false
	}

	function maybeEat(search: string) {
		if (code.startsWith(search, index)) {
			index += search.length

			return true
		}

		return false
	}

	function many(eatFunction: () => boolean) {
		if (!eatFunction())
			return false

		while (eatFunction());

		return true
	}

	function maybeEatOneOf(search: string) {
		if (index < code.length && search.includes(code[ index ]!)) {
			index++

			return true
		}

		return false
	}

	function group(eatFunction: () => boolean) {
		const startIndex = index

		if (eatFunction())
			return true

		index = startIndex

		return false
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
}
