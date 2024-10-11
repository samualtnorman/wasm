import { condition, many, negativeLookahead, optional, Rule, sequence, union } from "../lib/parsing"
import { oneOf, range, terminal } from "../lib/parsing/string"
import { TokenTag } from "../TokenTag"

export const Newline = union(oneOf(`\n\r`), terminal(`\r\n`))
export const Format = union(Newline, terminal(`\t`))

export const IdentifierCharacter =
	union(range(`0`, `9`), range(`A`, `Z`), range(`a`, `z`), oneOf(`!#$%&'*+-./:<=>?@\\^_\`|~`))

export const UnknownKeyword = sequence(range(`a`, `z`), optional(many(IdentifierCharacter)))
export const HexDigit = union(range(`0`, `9`), range(`A`, `F`), range(`a`, `f`))
export const HexNumber = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

export const StringNonEscape = condition<string>((code, index) =>
	code[index.$]! >= `\x20` && code[index.$]! != `\x7F` && code[index.$] != `"` && code[index.$] != `\\`
)

export const StringNonEscapes = many(StringNonEscape)
export const Backslash = terminal(`\\`)
export const DoubleHexDigits = sequence(HexDigit, HexDigit)
export const CharacterT = terminal(`t`)
export const CharacterN = terminal(`n`)
export const CharacterR = terminal(`r`)
export const CharacterApostrophe = terminal(`'`)
export const CharacterBackslash = terminal(`\\`)
export const CharacterU = terminal(`u`)
export const CharacterOpenSquigglyBracket = terminal(`{`)
export const CharacterCloseSquigglyBracket = terminal(`}`)

export const CharacterCloseSquigglyBracketBeforeStringEnds = sequence(
	many(condition((code, index) =>
		code[index.$]! >= `\x20` && code[index.$]! != `\x7F` && code[index.$] != `"` && code[index.$] != `\\` &&
		code[index.$] != `}`
	)),
	CharacterCloseSquigglyBracket
)

export const Quote = terminal(`"`)
export const Identifier = sequence(terminal(`$`), many(IdentifierCharacter))
export const Number = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
export const LineCharacter = condition((code, index) => code[index.$] != `\n` && code[index.$] != `\r`)

export const CommentLine =
	sequence(terminal(`;;`), optional(many(LineCharacter)), union(Newline, (code, index) => index.$ == code.length))

export const BlockCharacter: Rule<string> = union(
	condition((code, index) => code[index.$] != `;` && code[index.$] != `(`),
	condition((code, index) => code[index.$] == `;` && code[index.$ + 1] != `)`),
	condition((code, index) => code[index.$] == `(` && code[index.$ + 1] != `;`),
	(source, index) => CommentBlock(source, index)
)

export const CommentBlock = sequence(terminal(`(;`), optional(many(BlockCharacter)), terminal(`;)`))
export const Space = many(union(terminal(` `), Format))
export const Sign = optional(union(terminal(`+`), terminal(`-`)))
export const Fraction = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
export const HexFraction = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

export const DecimalFloat = sequence(
	Number,
	union(sequence(terminal(`.`), Fraction), optional(terminal(`.`))),
	optional(sequence(oneOf(`Ee`), Sign, Number))
)

export const HexFloat = sequence(
	terminal(`0x`),
	HexNumber,
	union(sequence(terminal(`.`), HexFraction), optional(terminal(`.`))),
	optional(sequence(oneOf(`Pp`), Sign, HexNumber))
)

export const FloatMag =
	union(HexFloat, DecimalFloat, terminal(`inf`), sequence(terminal(`nan:0x`), HexNumber), terminal(`nan`))

export const KeywordOffsetEquals = terminal(`offset=`)
export const KeywordAlignEquals = terminal(`align=`)
export const Float = sequence(Sign, FloatMag)
export const BracketOpen = terminal(`(`)
export const BracketClose = terminal(`)`)

export const NamesToKeywords = {
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

export const TokenFunctions: Record<Exclude<keyof typeof TokenTag, `Error${string}` | `String${string}`>, Rule<string>> = {
	...Object.fromEntries(Object.entries(NamesToKeywords)
		.map(([ name, keyword ]) => [ name, sequence(terminal(keyword), negativeLookahead(IdentifierCharacter)) ])
	) as Record<keyof typeof NamesToKeywords, () => boolean>,
	KeywordAlignEquals, KeywordOffsetEquals, CommentLine, CommentBlock, Number: Float, UnknownKeyword, Identifier,
	BracketOpen, BracketClose
}
