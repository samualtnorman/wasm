import { TokenTag } from "./TokenTag"
import { tokenToDebugString } from "./tokenToDebugString"
import { Backslash, CharacterApostrophe, CharacterBackslash, CharacterCloseSquigglyBracket, CharacterCloseSquigglyBracketBeforeStringEnds, CharacterN, CharacterOpenSquigglyBracket, CharacterR, CharacterT, CharacterU, DoubleHexDigits, HexNumber, Newline, Quote, Space, StringNonEscapes, TokenFunctions } from "./utils/tokenising"

export type Token = { tag: TokenTag, index: number, size: number }

export function* tokenise(code: string): Generator<Token, void, void> {
	const index = { $: 0 }

	let errorIndex: number | undefined
	const Token = (tag: TokenTag, startIndex: number) => ({ tag, index: startIndex, size: index.$ - startIndex })

	while_: while (index.$ < code.length) {
		const startIndex = index.$

		if (Space(code, index)) {
			if (errorIndex != undefined) {
				yield { tag: TokenTag.ErrorInvalidCharacter, index: errorIndex, size: startIndex - errorIndex }
				errorIndex = undefined
			}

			continue
		}

		if (Quote(code, index)) {
			yield Token(TokenTag.StringStartQuote, startIndex)

			while (true) {
				if (index.$ == code.length) {
					yield { tag: TokenTag.ErrorStringUnterminated, index: index.$, size: 0 }
					break
				}

				const stringElementStart = index.$
				const Token = (tag: TokenTag) => ({ tag, index: stringElementStart, size: index.$ - stringElementStart })

				if (Backslash(code, index)) {
					if (DoubleHexDigits(code, index))
						yield Token(TokenTag.StringEscapeHex)
					else if (CharacterT(code, index))
						yield Token(TokenTag.StringEscapeTab)
					else if (CharacterN(code, index))
						yield Token(TokenTag.StringEscapeNewline)
					else if (CharacterR(code, index))
						yield Token(TokenTag.StringEscapeReturn)
					else if (Quote(code, index))
						yield Token(TokenTag.StringEscapeQuote)
					else if (CharacterApostrophe(code, index))
						yield Token(TokenTag.StringEscapeApostrophe)
					else if (CharacterBackslash(code, index))
						yield Token(TokenTag.StringEscapeBackslash)
					else if (CharacterU(code, index)) {
						if (!CharacterOpenSquigglyBracket(code, index))
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						else if (HexNumber(code, index) && CharacterCloseSquigglyBracket(code, index))
							yield Token(TokenTag.StringEscapeUnicode)
						else if (CharacterCloseSquigglyBracket(code, index))
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						else {
							CharacterCloseSquigglyBracketBeforeStringEnds(code, index)
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						}
					} else {
						index.$++
						yield Token(TokenTag.ErrorStringInvalidEscape)
					}
				} else if (StringNonEscapes(code, index))
					yield Token(TokenTag.StringNonEscape)
				else if (Quote(code, index)) {
					yield Token(TokenTag.StringEndQuote)
					break
				} else {
					if (Newline(code, index)) {
						yield Token(TokenTag.ErrorStringUnterminated)
						break
					}

					index.$++
					yield Token(TokenTag.ErrorStringInvalidCharacter)
				}
			}

			continue
		}

		for (const name in TokenFunctions) {
			if (TokenFunctions[name as keyof typeof TokenFunctions](code, index)) {
				if (errorIndex != undefined) {
					yield { tag: TokenTag.ErrorInvalidCharacter, index: errorIndex, size: startIndex - errorIndex }
					errorIndex = undefined
				}

				yield Token(TokenTag[name as keyof typeof TokenFunctions], startIndex)
				continue while_
			}
		}

		if (errorIndex == undefined)
			errorIndex = index.$

		index.$++
	}

	if (errorIndex != undefined)
		yield Token(TokenTag.ErrorInvalidCharacter, errorIndex)
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest
	const expectTokens = (code: string) => expect([ ...tokenise(code) ])

	expect.addSnapshotSerializer({ serialize: v => v, test: _ => true })


	test(`tokenise wasi hello world`, () => check(`
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
	`))

	test(`line comment`, () => check(`;;`))
	test(`nested comment`, () => check(`(; a (; b ;) c ;)`))
	test(`signed integer`, () => check(`+123`))
	test(`number`, () => check(`3.`))
	test(`number with fraction`, () => check(`3.5`))
	test(`number with exponent`, () => check(`1e2`))
	test(`hex`, () => check(`0x1`))
	test(`hex exponent`, () => check(`0x1p1`))
	test(`funci32`, () => check(`funci32`))
	test(`offset=0`, () => check(`offset=0`))
	test(`align=0`, () => check(`align=0`))
	test(`error token`, () => check(`,`))
	test(`collapse error tokens`, () => check(`,,`))
	test(`seperate error tokens around whitespace`, () => check(`, ,`))
	test(`error then keyword`, () => check(`,i32`))
	test(`error before whitespace does not include whitespace`, () => check(`, 0`))
	test(`string`, () => check(String.raw`"a\00\t\n\r\"\'\\\u{0}"`))
	test(`untermianted string`, () => check(`"`))
	test(`string invalid character`, () => check(`"\0"`))
	test(`assume string ended on newline`, () => check(`\"a\ni32`))
	test(`invalid string escape`, () => check(`"a\\ "`))

	test(`invalid string unicode escape`, () => {
		check(`"\\u "`)
		check(`"\\u{ "`)
		check(`"\\u{0 }"`)
		check(`"\\u{}"`)
	})

	test(`collapse multiple non escape tokens into one token`, () => check(`"foo"`))

	function check(code: string) {
		const tokens = [ ...tokenise(code) ]
		const lastTokenIndex = tokens.length - 1

		for (let index = 0; index < lastTokenIndex; index++) {
			const token = tokens[index]!
			const nextToken = tokens[index + 1]!

			expect(token.index + token.size).toBeLessThanOrEqual(nextToken.index)
		}

		expect(lastTokenIndex).toBeLessThanOrEqual(code.length)
		expect(tokens.map(token => tokenToDebugString(token, code)).join("\n")).toMatchSnapshot()
	}
}
