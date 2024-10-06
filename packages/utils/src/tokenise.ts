import { assert } from "@samual/lib/assert"
import { TokenTag } from "./TokenTag"
import { tokenToDebugString } from "./tokenToDebugString"

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
	Mutable: `mut`,
	Block: `block`,
	Branch: `br`,
	BranchIf: `br_if`,
	BranchTable: `br_table`,
	Call: `call`,
	CallIndirect: `call_indirect`,
	DataDrop: `data.drop`,
	Drop: `drop`,
	ElementDrop: `elem.drop`,
	Else: `else`,
	End: `end`,
	Float32Constant: `f32.const`,
	Float32Load: `f32.load`,
	Float32Store: `f32.store`,
	Float64Constant: `f64.const`,
	Float64Load: `f64.load`,
	Float64Store: `f64.store`,
	GlobalGet: `global.get`,
	GlobalSet: `global.set`,
	If: `if`,
	Integer32Constant: `i32.const`,
	Integer32Load: `i32.load`,
	Integer32Load16Signed: `i32.load16_s`,
	Integer32Load16Unsigned: `i32.load16_u`,
	Integer32Load8Signed: `i32.load8_s`,
	Integer32Load8Unsigned: `i32.load8_u`,
	Integer32Store: `i32.store`,
	Integer32Store16: `i32.store16`,
	Integer32Store8: `i32.store8`,
	Integer64Constant: `i64.const`,
	Integer64Load: `i64.load`,
	Integer64Load16Signed: `i64.load16_s`,
	Integer64Load16Unsigned: `i64.load_16_u`,
	Integer64Load32Signed: `i64.load32_s`,
	Integer64Load32Unsigned: `i64.load32_u`,
	Integer64Load8Signed: `i64.load8_s`,
	Integer64Load8Unsigned: `i64.load8_u`,
	Integer64Store: `i64.store`,
	Integer64Store16: `i64.store16`,
	Integer64Store32: `i64.store32`,
	Integer64Store8: `i64.store8`,
	LocalGet: `local.get`,
	LocalSet: `local.set`,
	LocalTee: `local.tee`,
	Loop: `loop`,
	MemoryCopy: `memory.copy`,
	MemoryFill: `memory.fill`,
	MemoryGrow: `memory.grow`,
	MemoryInitiate: `memory.init`,
	MemorySize: `memory.size`,
	NoOperation: `nop`,
	ReferenceFunction: `ref.func`,
	ReferenceIsNull: `ref.is_null`,
	ReferenceNull: `ref.null`,
	Return: `return`,
	Select: `select`,
	TableCopy: `table.copy`,
	TableFill: `table.fill`,
	TableGet: `table.get`,
	TableGrow: `table.grow`,
	TableInitiate: `table.init`,
	TableSet: `table.set`,
	TableSize: `table.size`,
	Unreachable: `unreachable`,
	Module: `module`,
	Data: `data`,
	Declare: `declare`,
	Element: `elem`,
	Export: `export`,
	Global: `global`,
	Import: `import`,
	Item: `item`,
	Local: `local`,
	Memory: `memory`,
	Offset: `offset`,
	Start: `start`,
	Table: `table`,
	Type: `type`,
	Float32Absolute: `f32.abs`,
	Float32Add: `f32.add`,
	Float32Ceiling: `f32.ceil`,
	Float32ConvertInteger32Signed: `f32.convert_i32_s`,
	Float32ConvertInteger32Unsigned: `f32.convert_i32_u`,
	Float32ConvertInteger64Signed: `f32.convert_i64_s`,
	Float32ConvertInteger64Unsigned: `f32.convert_i64_u`,
	Float32CopySign: `f32.copy_s`,
	Float32DemoteFloat64: `f32.demote_f64`,
	Float32Divide: `f32.div`,
	Float32Equals: `f32.eq`,
	Float32Floor: `f32.floor`,
	Float32GreaterThan: `f32.gt`,
	Float32GreaterThanOrEquals: `f32.ge`,
	Float32LessThan: `f32.lt`,
	Float32LessThanOrEquals: `f32.le`,
	Float32Maximum: `f32.max`,
	Float32Minimum: `f32.min`,
	Float32Multiply: `f32.mul`,
	Float32Nearest: `f32.nearest`,
	Float32Negate: `f32.neg`,
	Float32NotEquals: `f32.ne`,
	Float32ReinterpretInteger32: `f32.reinterpret_i32`,
	Float32SquareRoot: `f32.sqrt`,
	Float32Subtract: `f32.sub`,
	Float32Truncate: `f32.trunc`,
	Float64Absolute: `f64.abs`,
	Float64Add: `f64.add`,
	Float64Ceiling: `f64.ceil`,
	Float64ConvertInteger32Signed: `f64.convert_i32_s`,
	Float64ConvertInteger32Unsigned: `f64.convert_i32_u`,
	Float64ConvertInteger64Signed: `f64.convert_i64_s`,
	Float64ConvertInteger64Unsigned: `f64.convert_i64_u`,
	Float64CopySign: `f64.copy_s`,
	Float64Divide: `f64.div`,
	Float64Equals: `f64.eq`,
	Float64Floor: `f64.floor`,
	Float64GreaterThan: `f64.gt`,
	Float64GreaterThanOrEquals: `f64.ge`,
	Float64LessThan: `f64.lt`,
	Float64LessThanOrEquals: `f64.le`,
	Float64Maximum: `f64.max`,
	Float64Minimum: `f64.min`,
	Float64Multiply: `f64.mul`,
	Float64Nearest: `f64.nearest`,
	Float64Negate: `f64.neg`,
	Float64NotEquals: `f64.ne`,
	Float64PromoteFloat32: `f64.promote_f32`,
	Float64ReinterpretInteger64: `f64.reinterpret_i64`,
	Float64SquareRoot: `f64.sqrt`,
	Float64Subtract: `f64.sub`,
	Float64Truncate: `f64.trunc`,
	Integer32Add: `i32.add`,
	Integer32And: `i32.and`,
	Integer32CountLeadingZeros: `i32.clz`,
	Integer32CountTrailingZeros: `i32.ctz`,
	Integer32DivideSigned: `i32.div_s`,
	Integer32DivideUnsigned: `i32.div_u`,
	Integer32Equals: `i32.eq`,
	Integer32EqualsZero: `i32.eqz`,
	Integer32Extend16Signed: `i32.extend_16_s`,
	Integer32Extend8Signed: `i32.extend_8_s`,
	Integer32GreaterThanOrEqualsSigned: `i32.ge_s`,
	Integer32GreaterThanOrEqualsUnsigned: `i32.ge_u`,
	Integer32GreaterThanSigned: `i32.gt_s`,
	Integer32GreaterThanUnsigned: `i32.gt_u`,
	Integer32LessThanOrEqualsSigned: `i32.le_s`,
	Integer32LessThanOrEqualsUnsigned: `i32.le_u`,
	Integer32LessThanSigned: `i32.lt_s`,
	Integer32LessThanUnsigned: `i32.lt_u`,
	Integer32Multiply: `i32.mul`,
	Integer32NotEqual: `i32.ne`,
	Integer32Or: `i32.or`,
	Integer32PopCountNonZeros: `i32.popcnt`,
	Integer32ReinterpretFloat32: `i32.reinterpret_f32`,
	Integer32RemainderSigned: `i32.rem_s`,
	Integer32RemainderUnsigned: `i32.rem_u`,
	Integer32RotateLeft: `i32.rotl`,
	Integer32RotateRight: `i32.rotr`,
	Integer32ShiftLeft: `i32.shl`,
	Integer32ShiftRightSigned: `i32.shr_s`,
	Integer32ShiftRightUnsigned: `i32.shr_u`,
	Integer32Subtract: `i32.sub`,
	Integer32TruncateFloat32Signed: `i32.trunc_f32_s`,
	Integer32TruncateFloat32Unsigned: `i32.trunc_f32_u`,
	Integer32TruncateFloat64Signed: `i32.trunc_f64_s`,
	Integer32TruncateFloat64Unsigned: `i32.trunc_f64_u`,
	Integer32TruncateSaturateFloat32Signed: `i32.trunc_sat_f32_s`,
	Integer32TruncateSaturateFloat32Unsigned: `i32.trunc_sat_f32_u`,
	Integer32TruncateSaturateFloat64Signed: `i32.trunc_sat_f64_s`,
	Integer32TruncateSaturateFloat64Unsigned: `i32.trunc_sat_f64_u`,
	Integer32WrapInteger64: `i32.wrap_i64`,
	Integer32Xor: `i32.xor`,
	Integer64Add: `i64.add`,
	Integer64And: `i64.and`,
	Integer64CountLeadingZeros: `i64.clz`,
	Integer64CountTrailingZeros: `i64.ctz`,
	Integer64DivideSigned: `i64.div_s`,
	Integer64DivideUnsigned: `i64.div_u`,
	Integer64Equals: `i64.eq`,
	Integer64EqualsZero: `i64.eqz`,
	Integer64Extend16Signed: `i64.extend_16_s`,
	Integer64Extend8Signed: `i64.extend_8_s`,
	Integer64GreaterThanOrEqualsSigned: `i64.ge_s`,
	Integer64GreaterThanOrEqualsUnsigned: `i64.ge_u`,
	Integer64GreaterThanSigned: `i64.gt_s`,
	Integer64GreaterThanUnsigned: `i64.gt_u`,
	Integer64LessThanOrEqualsSigned: `i64.le_s`,
	Integer64LessThanOrEqualsUnsigned: `i64.le_u`,
	Integer64LessThanSigned: `i64.lt_s`,
	Integer64LessThanUnsigned: `i64.lt_u`,
	Integer64Multiply: `i64.mul`,
	Integer64NotEqual: `i64.ne`,
	Integer64Or: `i64.or`,
	Integer64PopCountNonZeros: `i64.popcnt`,
	Integer64ReinterpretFloat64: `i64.reinterpret_f64`,
	Integer64RemainderSigned: `i64.rem_s`,
	Integer64RemainderUnsigned: `i64.rem_u`,
	Integer64RotateLeft: `i64.rotl`,
	Integer64RotateRight: `i64.rotr`,
	Integer64ShiftLeft: `i64.shl`,
	Integer64ShiftRightSigned: `i64.shr_s`,
	Integer64ShiftRightUnsigned: `i64.shr_u`,
	Integer64Subtract: `i64.sub`,
	Integer64TruncateFloat64Signed: `i64.trunc_f64_s`,
	Integer64TruncateFloat64Unsigned: `i64.trunc_f64_u`,
	Integer64TruncateSaturateFloat64Signed: `i64.trunc_sat_f64_s`,
	Integer64TruncateSaturateFloat64Unsigned: `i64.trunc_sat_f64_u`,
	Integer64Xor: `i64.xor`,
	Integer64Extend32Signed: `i64.extend_32_s`,
	Integer64ExtendInteger32Signed: `i64.extend_i32_s`,
	Integer64ExtendInteger32Unsigned: `i64.extend_i32_u`,
	Integer64TruncateFloat32Signed: `i64.trunc_f32_s`,
	Integer64TruncateFloat32Unsigned: `i64.trunc_f32_u`,
	Integer64TruncateSaturateFloat32Signed: `i64.trunc_sat_f32_s`,
	Integer64TruncateSaturateFloat32Unsigned: `i64.trunc_sat_f32_u`
} satisfies {
	[K in Exclude<
		keyof typeof TokenTag,
		`Keyword` | `Number` | `String` | `Identifier` | `OpenBracket` | `CloseBracket` | `LineComment` |
		`BlockComment` | `OffsetEquals` | `AlignEquals` | `Error`
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

	const OffsetEquals = terminal(`offset=`)
	const AlignEquals = terminal(`align=`)
	const Float = sequence(Sign, FloatMag)
	const OpenBracket = terminal(`(`)
	const CloseBracket = terminal(`)`)

	const tokenFunctions: Record<Exclude<keyof typeof TokenTag, "Error">, () => boolean> = {
		...Object.fromEntries(Object.entries(NamesToKeywords)
			.map(([ name, keyword ]) => [ name, sequence(terminal(keyword), negativeLookahead(IdentifierCharacter)) ])
		) as Record<keyof typeof NamesToKeywords, () => boolean>,
		AlignEquals, OffsetEquals, LineComment, BlockComment, Number: Float, Keyword, String, Identifier, OpenBracket,
		CloseBracket
	}

	let errorIndex: number | undefined
	const Token = (tag: TokenTag, startIndex: number) => ({ tag, index: startIndex, size: index - startIndex })

	while_: while (index < code.length) {
		if (Space()) {
			if (errorIndex != undefined) {
				yield Token(TokenTag.Error, errorIndex)
				errorIndex = undefined
			}

			continue
		}

		const startIndex = index

		for (const name in tokenFunctions) {
			if (tokenFunctions[name as keyof typeof tokenFunctions]()) {
				if (errorIndex != undefined) {
					yield Token(TokenTag.Error, errorIndex)
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
		yield Token(TokenTag.Error, errorIndex)
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest

	expect.addSnapshotSerializer({
		serialize: (code: string) => [ ...tokenise(code) ].map(token => tokenToDebugString(token, code)).join("\n"),
		test: _ => true
	})

	test(`tokenise wasi hello world`, () => expect(`
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
	`).toMatchSnapshot())

	test(`line comment`, () => expect(`;;`).toMatchSnapshot())
	test(`nested comment`, () => expect(`(; a (; b ;) c ;)`).toMatchSnapshot())
	test(`signed integer`, () => expect(`+123`).toMatchSnapshot())
	test(`number`, () => expect(`3.`).toMatchSnapshot())
	test(`number with fraction`, () => expect(`3.5`).toMatchSnapshot())
	test(`number with exponent`, () => expect(`1e2`).toMatchSnapshot())
	test(`hex`, () => expect(`0x1`).toMatchSnapshot())
	test(`hex exponent`, () => expect(`0x1p1`).toMatchSnapshot())
	test(`funci32`, () => expect(`funci32`).toMatchSnapshot())
	test(`offset=0`, () => expect(`offset=0`).toMatchSnapshot())
	test(`align=0`, () => expect(`align=0`).toMatchSnapshot())
	test(`error token`, () => expect(`,`).toMatchSnapshot())
	test(`collapse error tokens`, () => expect(`,,`).toMatchSnapshot())
	test(`seperate error tokens around whitespace`, () => expect(`, ,`).toMatchSnapshot())
}
