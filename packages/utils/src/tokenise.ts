import { assert } from "@samual/lib/assert"
import { TokenTag } from "./TokenTag"
import { tokenToDebugString } from "./tokenToDebugString"

export type Token = { tag: TokenTag, index: number, size: number }

const NamesToKeywords = {
	KeywordInteger32: `i32`,
	KeywordInteger64: `i64`,
	KeywordFloat32: `f32`,
	KeywordFloat64: `f64`,
	KeywordVector128: `v128`,
	KeywordFunctionReference: `funcref`,
	KeywordExternalReference: `externref`,
	KeywordFunction: `func`,
	KeywordExternal: `extern`,
	KeywordParameter: `param`,
	KeywordResult: `result`,
	KeywordMutable: `mut`,
	KeywordBlock: `block`,
	KeywordBranch: `br`,
	KeywordBranchIf: `br_if`,
	KeywordBranchTable: `br_table`,
	KeywordCall: `call`,
	KeywordCallIndirect: `call_indirect`,
	KeywordDataDrop: `data.drop`,
	KeywordDrop: `drop`,
	KeywordElementDrop: `elem.drop`,
	KeywordElse: `else`,
	KeywordEnd: `end`,
	KeywordFloat32Constant: `f32.const`,
	KeywordFloat32Load: `f32.load`,
	KeywordFloat32Store: `f32.store`,
	KeywordFloat64Constant: `f64.const`,
	KeywordFloat64Load: `f64.load`,
	KeywordFloat64Store: `f64.store`,
	KeywordGlobalGet: `global.get`,
	KeywordGlobalSet: `global.set`,
	KeywordIf: `if`,
	KeywordInteger32Constant: `i32.const`,
	KeywordInteger32Load: `i32.load`,
	KeywordInteger32Load16Signed: `i32.load16_s`,
	KeywordInteger32Load16Unsigned: `i32.load16_u`,
	KeywordInteger32Load8Signed: `i32.load8_s`,
	KeywordInteger32Load8Unsigned: `i32.load8_u`,
	KeywordInteger32Store: `i32.store`,
	KeywordInteger32Store16: `i32.store16`,
	KeywordInteger32Store8: `i32.store8`,
	KeywordInteger64Constant: `i64.const`,
	KeywordInteger64Load: `i64.load`,
	KeywordInteger64Load16Signed: `i64.load16_s`,
	KeywordInteger64Load16Unsigned: `i64.load_16_u`,
	KeywordInteger64Load32Signed: `i64.load32_s`,
	KeywordInteger64Load32Unsigned: `i64.load32_u`,
	KeywordInteger64Load8Signed: `i64.load8_s`,
	KeywordInteger64Load8Unsigned: `i64.load8_u`,
	KeywordInteger64Store: `i64.store`,
	KeywordInteger64Store16: `i64.store16`,
	KeywordInteger64Store32: `i64.store32`,
	KeywordInteger64Store8: `i64.store8`,
	KeywordLocalGet: `local.get`,
	KeywordLocalSet: `local.set`,
	KeywordLocalTee: `local.tee`,
	KeywordLoop: `loop`,
	KeywordMemoryCopy: `memory.copy`,
	KeywordMemoryFill: `memory.fill`,
	KeywordMemoryGrow: `memory.grow`,
	KeywordMemoryInitiate: `memory.init`,
	KeywordMemorySize: `memory.size`,
	KeywordNoOperation: `nop`,
	KeywordReferenceFunction: `ref.func`,
	KeywordReferenceIsNull: `ref.is_null`,
	KeywordReferenceNull: `ref.null`,
	KeywordReturn: `return`,
	KeywordSelect: `select`,
	KeywordTableCopy: `table.copy`,
	KeywordTableFill: `table.fill`,
	KeywordTableGet: `table.get`,
	KeywordTableGrow: `table.grow`,
	KeywordTableInitiate: `table.init`,
	KeywordTableSet: `table.set`,
	KeywordTableSize: `table.size`,
	KeywordUnreachable: `unreachable`,
	KeywordModule: `module`,
	KeywordData: `data`,
	KeywordDeclare: `declare`,
	KeywordElement: `elem`,
	KeywordExport: `export`,
	KeywordGlobal: `global`,
	KeywordImport: `import`,
	KeywordItem: `item`,
	KeywordLocal: `local`,
	KeywordMemory: `memory`,
	KeywordOffset: `offset`,
	KeywordStart: `start`,
	KeywordTable: `table`,
	KeywordType: `type`,
	KeywordFloat32Absolute: `f32.abs`,
	KeywordFloat32Add: `f32.add`,
	KeywordFloat32Ceiling: `f32.ceil`,
	KeywordFloat32ConvertInteger32Signed: `f32.convert_i32_s`,
	KeywordFloat32ConvertInteger32Unsigned: `f32.convert_i32_u`,
	KeywordFloat32ConvertInteger64Signed: `f32.convert_i64_s`,
	KeywordFloat32ConvertInteger64Unsigned: `f32.convert_i64_u`,
	KeywordFloat32CopySign: `f32.copy_s`,
	KeywordFloat32DemoteFloat64: `f32.demote_f64`,
	KeywordFloat32Divide: `f32.div`,
	KeywordFloat32Equals: `f32.eq`,
	KeywordFloat32Floor: `f32.floor`,
	KeywordFloat32GreaterThan: `f32.gt`,
	KeywordFloat32GreaterThanOrEquals: `f32.ge`,
	KeywordFloat32LessThan: `f32.lt`,
	KeywordFloat32LessThanOrEquals: `f32.le`,
	KeywordFloat32Maximum: `f32.max`,
	KeywordFloat32Minimum: `f32.min`,
	KeywordFloat32Multiply: `f32.mul`,
	KeywordFloat32Nearest: `f32.nearest`,
	KeywordFloat32Negate: `f32.neg`,
	KeywordFloat32NotEquals: `f32.ne`,
	KeywordFloat32ReinterpretInteger32: `f32.reinterpret_i32`,
	KeywordFloat32SquareRoot: `f32.sqrt`,
	KeywordFloat32Subtract: `f32.sub`,
	KeywordFloat32Truncate: `f32.trunc`,
	KeywordFloat64Absolute: `f64.abs`,
	KeywordFloat64Add: `f64.add`,
	KeywordFloat64Ceiling: `f64.ceil`,
	KeywordFloat64ConvertInteger32Signed: `f64.convert_i32_s`,
	KeywordFloat64ConvertInteger32Unsigned: `f64.convert_i32_u`,
	KeywordFloat64ConvertInteger64Signed: `f64.convert_i64_s`,
	KeywordFloat64ConvertInteger64Unsigned: `f64.convert_i64_u`,
	KeywordFloat64CopySign: `f64.copy_s`,
	KeywordFloat64Divide: `f64.div`,
	KeywordFloat64Equals: `f64.eq`,
	KeywordFloat64Floor: `f64.floor`,
	KeywordFloat64GreaterThan: `f64.gt`,
	KeywordFloat64GreaterThanOrEquals: `f64.ge`,
	KeywordFloat64LessThan: `f64.lt`,
	KeywordFloat64LessThanOrEquals: `f64.le`,
	KeywordFloat64Maximum: `f64.max`,
	KeywordFloat64Minimum: `f64.min`,
	KeywordFloat64Multiply: `f64.mul`,
	KeywordFloat64Nearest: `f64.nearest`,
	KeywordFloat64Negate: `f64.neg`,
	KeywordFloat64NotEquals: `f64.ne`,
	KeywordFloat64PromoteFloat32: `f64.promote_f32`,
	KeywordFloat64ReinterpretInteger64: `f64.reinterpret_i64`,
	KeywordFloat64SquareRoot: `f64.sqrt`,
	KeywordFloat64Subtract: `f64.sub`,
	KeywordFloat64Truncate: `f64.trunc`,
	KeywordInteger32Add: `i32.add`,
	KeywordInteger32And: `i32.and`,
	KeywordInteger32CountLeadingZeros: `i32.clz`,
	KeywordInteger32CountTrailingZeros: `i32.ctz`,
	KeywordInteger32DivideSigned: `i32.div_s`,
	KeywordInteger32DivideUnsigned: `i32.div_u`,
	KeywordInteger32Equals: `i32.eq`,
	KeywordInteger32EqualsZero: `i32.eqz`,
	KeywordInteger32Extend16Signed: `i32.extend_16_s`,
	KeywordInteger32Extend8Signed: `i32.extend_8_s`,
	KeywordInteger32GreaterThanOrEqualsSigned: `i32.ge_s`,
	KeywordInteger32GreaterThanOrEqualsUnsigned: `i32.ge_u`,
	KeywordInteger32GreaterThanSigned: `i32.gt_s`,
	KeywordInteger32GreaterThanUnsigned: `i32.gt_u`,
	KeywordInteger32LessThanOrEqualsSigned: `i32.le_s`,
	KeywordInteger32LessThanOrEqualsUnsigned: `i32.le_u`,
	KeywordInteger32LessThanSigned: `i32.lt_s`,
	KeywordInteger32LessThanUnsigned: `i32.lt_u`,
	KeywordInteger32Multiply: `i32.mul`,
	KeywordInteger32NotEqual: `i32.ne`,
	KeywordInteger32Or: `i32.or`,
	KeywordInteger32PopCountNonZeros: `i32.popcnt`,
	KeywordInteger32ReinterpretFloat32: `i32.reinterpret_f32`,
	KeywordInteger32RemainderSigned: `i32.rem_s`,
	KeywordInteger32RemainderUnsigned: `i32.rem_u`,
	KeywordInteger32RotateLeft: `i32.rotl`,
	KeywordInteger32RotateRight: `i32.rotr`,
	KeywordInteger32ShiftLeft: `i32.shl`,
	KeywordInteger32ShiftRightSigned: `i32.shr_s`,
	KeywordInteger32ShiftRightUnsigned: `i32.shr_u`,
	KeywordInteger32Subtract: `i32.sub`,
	KeywordInteger32TruncateFloat32Signed: `i32.trunc_f32_s`,
	KeywordInteger32TruncateFloat32Unsigned: `i32.trunc_f32_u`,
	KeywordInteger32TruncateFloat64Signed: `i32.trunc_f64_s`,
	KeywordInteger32TruncateFloat64Unsigned: `i32.trunc_f64_u`,
	KeywordInteger32TruncateSaturateFloat32Signed: `i32.trunc_sat_f32_s`,
	KeywordInteger32TruncateSaturateFloat32Unsigned: `i32.trunc_sat_f32_u`,
	KeywordInteger32TruncateSaturateFloat64Signed: `i32.trunc_sat_f64_s`,
	KeywordInteger32TruncateSaturateFloat64Unsigned: `i32.trunc_sat_f64_u`,
	KeywordInteger32WrapInteger64: `i32.wrap_i64`,
	KeywordInteger32Xor: `i32.xor`,
	KeywordInteger64Add: `i64.add`,
	KeywordInteger64And: `i64.and`,
	KeywordInteger64CountLeadingZeros: `i64.clz`,
	KeywordInteger64CountTrailingZeros: `i64.ctz`,
	KeywordInteger64DivideSigned: `i64.div_s`,
	KeywordInteger64DivideUnsigned: `i64.div_u`,
	KeywordInteger64Equals: `i64.eq`,
	KeywordInteger64EqualsZero: `i64.eqz`,
	KeywordInteger64Extend16Signed: `i64.extend_16_s`,
	KeywordInteger64Extend8Signed: `i64.extend_8_s`,
	KeywordInteger64GreaterThanOrEqualsSigned: `i64.ge_s`,
	KeywordInteger64GreaterThanOrEqualsUnsigned: `i64.ge_u`,
	KeywordInteger64GreaterThanSigned: `i64.gt_s`,
	KeywordInteger64GreaterThanUnsigned: `i64.gt_u`,
	KeywordInteger64LessThanOrEqualsSigned: `i64.le_s`,
	KeywordInteger64LessThanOrEqualsUnsigned: `i64.le_u`,
	KeywordInteger64LessThanSigned: `i64.lt_s`,
	KeywordInteger64LessThanUnsigned: `i64.lt_u`,
	KeywordInteger64Multiply: `i64.mul`,
	KeywordInteger64NotEqual: `i64.ne`,
	KeywordInteger64Or: `i64.or`,
	KeywordInteger64PopCountNonZeros: `i64.popcnt`,
	KeywordInteger64ReinterpretFloat64: `i64.reinterpret_f64`,
	KeywordInteger64RemainderSigned: `i64.rem_s`,
	KeywordInteger64RemainderUnsigned: `i64.rem_u`,
	KeywordInteger64RotateLeft: `i64.rotl`,
	KeywordInteger64RotateRight: `i64.rotr`,
	KeywordInteger64ShiftLeft: `i64.shl`,
	KeywordInteger64ShiftRightSigned: `i64.shr_s`,
	KeywordInteger64ShiftRightUnsigned: `i64.shr_u`,
	KeywordInteger64Subtract: `i64.sub`,
	KeywordInteger64TruncateFloat64Signed: `i64.trunc_f64_s`,
	KeywordInteger64TruncateFloat64Unsigned: `i64.trunc_f64_u`,
	KeywordInteger64TruncateSaturateFloat64Signed: `i64.trunc_sat_f64_s`,
	KeywordInteger64TruncateSaturateFloat64Unsigned: `i64.trunc_sat_f64_u`,
	KeywordInteger64Xor: `i64.xor`,
	KeywordInteger64Extend32Signed: `i64.extend_32_s`,
	KeywordInteger64ExtendInteger32Signed: `i64.extend_i32_s`,
	KeywordInteger64ExtendInteger32Unsigned: `i64.extend_i32_u`,
	KeywordInteger64TruncateFloat32Signed: `i64.trunc_f32_s`,
	KeywordInteger64TruncateFloat32Unsigned: `i64.trunc_f32_u`,
	KeywordInteger64TruncateSaturateFloat32Signed: `i64.trunc_sat_f32_s`,
	KeywordInteger64TruncateSaturateFloat32Unsigned: `i64.trunc_sat_f32_u`,
	KeywordFloat32x4: `f32x4`,
	KeywordFloat64x2: `f64x2`,
	KeywordInteger16x8: `i16x8`,
	KeywordInteger16x8Splat: `i16x8.splat`,
	KeywordInteger32x4: `i32x4`,
	KeywordInteger32x4Splat: `i32x4.splat`,
	KeywordInteger64x2: `i64x2`,
	KeywordInteger64x2Splat: `i64x2.splat`,
	KeywordInteger8x16: `i8x16`,
	KeywordInteger8x16Splat: `i8x16.splat`,
	KeywordVector128Const: `v128.const`,
	KeywordVector128Load: `v128.load`,
	KeywordVector128Load16Lane: `v128.load16_lane`,
	KeywordVector128Load16Splat: `v128.load16_splat`,
	KeywordVector128Load16x4Signed: `v128.load16x4_s`,
	KeywordVector128Load16x4Unsigned: `v128.load16x4_u`,
	KeywordVector128Load32Lane: `v128.load32_lane`,
	KeywordVector128Load32Splat: `v128.load32_splat`,
	KeywordVector128Load32x2Signed: `v128.load32x2_s`,
	KeywordVector128Load32x2Unsigned: `v128.load32x2_u`,
	KeywordVector128Load32Zero: `v128.load32_zero`,
	KeywordVector128Load64Lane: `v128.load64_lane`,
	KeywordVector128Load64Splat: `v128.load64_splat`,
	KeywordVector128Load64Zero: `v128.load64_zero`,
	KeywordVector128Load8Lane: `v128.load8_lane`,
	KeywordVector128Load8Splat: `v128.load8_splat`,
	KeywordVector128Load8x8Signed: `v128.load8x8_s`,
	KeywordVector128Load8x8Unsigned: `v128.load8x8_u`,
	KeywordVector128Store: `v128.store`,
	KeywordVector128Store16Lane: `v128.store16_lane`,
	KeywordVector128Store32Lane: `v128.store32_lane`,
	KeywordVector128Store64Lane: `v128.store64_lane`,
	KeywordVector128Store8Lane: `v128.store8_lane`,
	KeywordInteger8x16Shuffle: `i8x16.shuffle`,
	KeywordInteger8x16Swizzle: `i8x16.swizzle`
} satisfies {
	[K in Exclude<
		keyof typeof TokenTag,
		`UnknownKeyword` | `Number` | `String${string}` | `Identifier` | `Bracket${string}` | `Comment${string}` |
		`KeywordOffsetEquals` | `KeywordAlignEquals` | `Error${string}`
	>]: string
}

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
		if (index < code.length && search.includes(code[index]!)) {
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

	const UnknownKeyword = sequence(range(`a`, `z`), optional(many(IdentifierCharacter)))
	const HexDigit = union(range(`0`, `9`), range(`A`, `F`), range(`a`, `f`))
	const HexNumber = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

	const StringNonEscape =
		condition(() => code[index]! >= `\x20` && code[index]! != `\x7F` && code[index] != `"` && code[index] != `\\`)

	const StringNonEscapes = many(StringNonEscape)
	const Backslash = terminal(`\\`)
	const DoubleHexDigits = sequence(HexDigit, HexDigit)
	const CharacterT = terminal(`t`)
	const CharacterN = terminal(`n`)
	const CharacterR = terminal(`r`)
	const CharacterApostrophe = terminal(`'`)
	const CharacterBackslash = terminal(`\\`)
	const CharacterU = terminal(`u`)
	const CharacterOpenSquigglyBracket = terminal(`{`)
	const CharacterCloseSquigglyBracket = terminal(`}`)

	const CharacterCloseSquigglyBracketBeforeStringEnds = sequence(
		many(condition(() =>
			code[index]! >= `\x20` && code[index]! != `\x7F` && code[index] != `"` && code[index] != `\\` &&
			code[index] != `}`
		)),
		CharacterCloseSquigglyBracket
	)

	const Quote = terminal(`"`)
	const Identifier = sequence(terminal(`$`), many(IdentifierCharacter))
	const Number = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
	const LineCharacter = condition(() => code[index] != `\n` && code[index] != `\r`)

	const CommentLine =
		sequence(terminal(`;;`), optional(many(LineCharacter)), union(Newline, () => index == code.length))

	const BlockCharacter = union(
		condition(() => code[index] != `;` && code[index] != `(`),
		condition(() => code[index] == `;` && code[index + 1] != `)`),
		condition(() => code[index] == `(` && code[index + 1] != `;`),
		() => CommentBlock()
	)

	const CommentBlock = sequence(terminal(`(;`), optional(many(BlockCharacter)), terminal(`;)`))
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

	const KeywordOffsetEquals = terminal(`offset=`)
	const KeywordAlignEquals = terminal(`align=`)
	const Float = sequence(Sign, FloatMag)
	const BracketOpen = terminal(`(`)
	const BracketClose = terminal(`)`)

	const tokenFunctions: Record<Exclude<keyof typeof TokenTag, `Error${string}` | `String${string}`>, () => boolean> = {
		...Object.fromEntries(Object.entries(NamesToKeywords)
			.map(([ name, keyword ]) => [ name, sequence(terminal(keyword), negativeLookahead(IdentifierCharacter)) ])
		) as Record<keyof typeof NamesToKeywords, () => boolean>,
		KeywordAlignEquals, KeywordOffsetEquals, CommentLine, CommentBlock, Number: Float, UnknownKeyword, Identifier,
		BracketOpen, BracketClose
	}

	let errorIndex: number | undefined
	const Token = (tag: TokenTag, startIndex: number) => ({ tag, index: startIndex, size: index - startIndex })

	while_: while (index < code.length) {
		const startIndex = index

		if (Space()) {
			if (errorIndex != undefined) {
				yield { tag: TokenTag.ErrorInvalidCharacter, index: errorIndex, size: startIndex - errorIndex }
				errorIndex = undefined
			}

			continue
		}

		if (Quote()) {
			yield Token(TokenTag.StringStartQuote, startIndex)

			while (true) {
				if (index == code.length) {
					yield { tag: TokenTag.ErrorStringUnterminated, index, size: 0 }
					break
				}

				const stringElementStart = index
				const Token = (tag: TokenTag) => ({ tag, index: stringElementStart, size: index - stringElementStart })

				if (Backslash()) {
					if (DoubleHexDigits())
						yield Token(TokenTag.StringHexEscape)
					else if (CharacterT())
						yield Token(TokenTag.StringTabEscape)
					else if (CharacterN())
						yield Token(TokenTag.StringNewlineEscape)
					else if (CharacterR())
						yield Token(TokenTag.StringReturnEscape)
					else if (Quote())
						yield Token(TokenTag.StringQuoteEscape)
					else if (CharacterApostrophe())
						yield Token(TokenTag.StringApostropheEscape)
					else if (CharacterBackslash())
						yield Token(TokenTag.StringBackslashEscape)
					else if (CharacterU()) {
						if (!CharacterOpenSquigglyBracket())
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						else if (HexNumber() && CharacterCloseSquigglyBracket())
							yield Token(TokenTag.StringUnicodeEscape)
						else if (CharacterCloseSquigglyBracket())
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						else {
							CharacterCloseSquigglyBracketBeforeStringEnds()
							yield Token(TokenTag.ErrorStringInvalidUnicodeEscape)
						}
					} else {
						index++
						yield Token(TokenTag.ErrorStringInvalidEscape)
					}
				} else if (StringNonEscapes())
					yield Token(TokenTag.StringNonEscape)
				else if (Quote()) {
					yield Token(TokenTag.StringEndQuote)
					break
				} else {
					if (Newline()) {
						yield Token(TokenTag.ErrorStringUnterminated)
						break
					}

					index++
					yield Token(TokenTag.ErrorStringInvalidCharacter)
				}
			}

			continue
		}

		for (const name in tokenFunctions) {
			if (tokenFunctions[name as keyof typeof tokenFunctions]()) {
				if (errorIndex != undefined) {
					yield { tag: TokenTag.ErrorInvalidCharacter, index: errorIndex, size: startIndex - errorIndex }
					errorIndex = undefined
				}

				yield Token(TokenTag[name as keyof typeof tokenFunctions], startIndex)
				continue while_
			}
		}

		if (errorIndex == undefined)
			errorIndex = index

		index++
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
