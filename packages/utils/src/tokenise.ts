import { assert } from "@samual/lib/assert"
import { MAX_LOOP_COUNT } from "./common"
import { getNextToken } from "./getNextToken"
import { TokenTag } from "./TokenTag"
import { tokenToDebugString } from "./tokenToDebugString"

export type Token = { tag: TokenTag, index: number, size: number }

export function* tokenise(code: string): Generator<Token, void, void> {
	let token: Token | undefined
	let loopsLeft = MAX_LOOP_COUNT

	while ((token = getNextToken(code, token))) {
		assert(loopsLeft--, HERE)
		yield token
	}
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
	test(`invalid character then keyword is all 1 invalid character token`, () => check(`,i32`))
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

	test(`unterminated comment block`, () => expectTokens(`(;`).toMatchObject([
		{ tag: TokenTag.ErrorUnterminatedCommentBlock, index: 0, size: 2 }
	]))

	test(`if then`, () => check(`
		(if (i32.gt_u (local.get $blockLength) (i32.const 55)) (then
			(local.set $blockIndex (i32.add (local.get $blockIndex) (i32.const 1)))
		))
	`))

	test(`0i32`, () => expectTokens(`0i32`).toMatchObject([
		{ tag: TokenTag.ErrorInvalidCharacter, index: 0, size: 4 }
	]))

	function check(code: string) {
		const tokens = [ ...tokenise(code) ]
		const lastTokenIndex = tokens.length - 1

		for (let index = 0; index < lastTokenIndex; index++) {
			const token = tokens[index]!

			expect(token.tag).not.toBe(TokenTag.UnknownKeyword)

			const nextToken = tokens[index + 1]!

			expect(token.index + token.size).toBeLessThanOrEqual(nextToken.index)
		}

		expect(lastTokenIndex).toBeLessThanOrEqual(code.length)
		expect(tokens.map(token => tokenToDebugString(token, code)).join("\n")).toMatchSnapshot()
	}
}
