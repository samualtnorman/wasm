declare enum TokenTagEnum { AlignEquals, Block, BlockComment, Branch, BranchIf, BranchTable, Call, CallIndirect, CloseBracket, Data, DataDrop, Declare, Drop, Element, ElementDrop, Else, End, Error, Export, External, ExternalReference, Float32, Float32Absolute, Float32Add, Float32Ceiling, Float32Constant, Float32ConvertInteger32Signed, Float32ConvertInteger32Unsigned, Float32ConvertInteger64Signed, Float32ConvertInteger64Unsigned, Float32CopySign, Float32DemoteFloat64, Float32Divide, Float32Equals, Float32Floor, Float32GreaterThan, Float32GreaterThanOrEquals, Float32LessThan, Float32LessThanOrEquals, Float32Load, Float32Maximum, Float32Minimum, Float32Multiply, Float32Nearest, Float32Negate, Float32NotEquals, Float32ReinterpretInteger32, Float32SquareRoot, Float32Store, Float32Subtract, Float32Truncate, Float64, Float64Absolute, Float64Add, Float64Ceiling, Float64Constant, Float64ConvertInteger32Signed, Float64ConvertInteger32Unsigned, Float64ConvertInteger64Signed, Float64ConvertInteger64Unsigned, Float64CopySign, Float64Divide, Float64Equals, Float64Floor, Float64GreaterThan, Float64GreaterThanOrEquals, Float64LessThan, Float64LessThanOrEquals, Float64Load, Float64Maximum, Float64Minimum, Float64Multiply, Float64Nearest, Float64Negate, Float64NotEquals, Float64PromoteFloat32, Float64ReinterpretInteger64, Float64SquareRoot, Float64Store, Float64Subtract, Float64Truncate, Function, FunctionReference, Global, GlobalGet, GlobalSet, Identifier, If, Import, Integer32, Integer32Add, Integer32And, Integer32Constant, Integer32CountLeadingZeros, Integer32CountTrailingZeros, Integer32DivideSigned, Integer32DivideUnsigned, Integer32Equals, Integer32EqualsZero, Integer32Extend16Signed, Integer32Extend8Signed, Integer32GreaterThanOrEqualsSigned, Integer32GreaterThanOrEqualsUnsigned, Integer32GreaterThanSigned, Integer32GreaterThanUnsigned, Integer32LessThanOrEqualsSigned, Integer32LessThanOrEqualsUnsigned, Integer32LessThanSigned, Integer32LessThanUnsigned, Integer32Load, Integer32Load16Signed, Integer32Load16Unsigned, Integer32Load8Signed, Integer32Load8Unsigned, Integer32Multiply, Integer32NotEqual, Integer32Or, Integer32PopCountNonZeros, Integer32ReinterpretFloat32, Integer32RemainderSigned, Integer32RemainderUnsigned, Integer32RotateLeft, Integer32RotateRight, Integer32ShiftLeft, Integer32ShiftRightSigned, Integer32ShiftRightUnsigned, Integer32Store, Integer32Store16, Integer32Store8, Integer32Subtract, Integer32TruncateFloat32Signed, Integer32TruncateFloat32Unsigned, Integer32TruncateFloat64Signed, Integer32TruncateFloat64Unsigned, Integer32TruncateSaturateFloat32Signed, Integer32TruncateSaturateFloat32Unsigned, Integer32TruncateSaturateFloat64Signed, Integer32TruncateSaturateFloat64Unsigned, Integer32WrapInteger64, Integer32Xor, Integer64, Integer64Add, Integer64And, Integer64Constant, Integer64CountLeadingZeros, Integer64CountTrailingZeros, Integer64DivideSigned, Integer64DivideUnsigned, Integer64Equals, Integer64EqualsZero, Integer64Extend16Signed, Integer64Extend32Signed, Integer64Extend8Signed, Integer64ExtendInteger32Signed, Integer64ExtendInteger32Unsigned, Integer64GreaterThanOrEqualsSigned, Integer64GreaterThanOrEqualsUnsigned, Integer64GreaterThanSigned, Integer64GreaterThanUnsigned, Integer64LessThanOrEqualsSigned, Integer64LessThanOrEqualsUnsigned, Integer64LessThanSigned, Integer64LessThanUnsigned, Integer64Load, Integer64Load16Signed, Integer64Load16Unsigned, Integer64Load32Signed, Integer64Load32Unsigned, Integer64Load8Signed, Integer64Load8Unsigned, Integer64Multiply, Integer64NotEqual, Integer64Or, Integer64PopCountNonZeros, Integer64ReinterpretFloat64, Integer64RemainderSigned, Integer64RemainderUnsigned, Integer64RotateLeft, Integer64RotateRight, Integer64ShiftLeft, Integer64ShiftRightSigned, Integer64ShiftRightUnsigned, Integer64Store, Integer64Store16, Integer64Store32, Integer64Store8, Integer64Subtract, Integer64TruncateFloat32Signed, Integer64TruncateFloat32Unsigned, Integer64TruncateFloat64Signed, Integer64TruncateFloat64Unsigned, Integer64TruncateSaturateFloat32Signed, Integer64TruncateSaturateFloat32Unsigned, Integer64TruncateSaturateFloat64Signed, Integer64TruncateSaturateFloat64Unsigned, Integer64Xor, Item, Keyword, LineComment, Local, LocalGet, LocalSet, LocalTee, Loop, Memory, MemoryCopy, MemoryFill, MemoryGrow, MemoryInitiate, MemorySize, Module, Mutable, NoOperation, Number, Offset, OffsetEquals, OpenBracket, Parameter, ReferenceFunction, ReferenceIsNull, ReferenceNull, Result, Return, Select, Start, String, StringApostropheEscape, StringBackslashEscape, StringHexEscape, StringInvalidCharacter, StringNewlineEscape, StringNonEscape, StringQuoteEscape, StringReturnEscape, StringTabEscape, StringUnicodeEscape, Table, TableCopy, TableFill, TableGet, TableGrow, TableInitiate, TableSet, TableSize, Type, Unreachable, Vector128 }

export const TokenTag = {
	AlignEquals: 1 as TokenTagEnum.AlignEquals,
	Block: 2 as TokenTagEnum.Block,
	BlockComment: 3 as TokenTagEnum.BlockComment,
	Branch: 4 as TokenTagEnum.Branch,
	BranchIf: 5 as TokenTagEnum.BranchIf,
	BranchTable: 6 as TokenTagEnum.BranchTable,
	Call: 7 as TokenTagEnum.Call,
	CallIndirect: 8 as TokenTagEnum.CallIndirect,
	CloseBracket: 9 as TokenTagEnum.CloseBracket,
	Data: 10 as TokenTagEnum.Data,
	DataDrop: 11 as TokenTagEnum.DataDrop,
	Declare: 12 as TokenTagEnum.Declare,
	Drop: 13 as TokenTagEnum.Drop,
	Element: 14 as TokenTagEnum.Element,
	ElementDrop: 15 as TokenTagEnum.ElementDrop,
	Else: 16 as TokenTagEnum.Else,
	End: 17 as TokenTagEnum.End,
	Error: 18 as TokenTagEnum.Error,
	Export: 19 as TokenTagEnum.Export,
	External: 20 as TokenTagEnum.External,
	ExternalReference: 21 as TokenTagEnum.ExternalReference,
	Float32: 22 as TokenTagEnum.Float32,
	Float32Absolute: 23 as TokenTagEnum.Float32Absolute,
	Float32Add: 24 as TokenTagEnum.Float32Add,
	Float32Ceiling: 25 as TokenTagEnum.Float32Ceiling,
	Float32Constant: 26 as TokenTagEnum.Float32Constant,
	Float32ConvertInteger32Signed: 27 as TokenTagEnum.Float32ConvertInteger32Signed,
	Float32ConvertInteger32Unsigned: 28 as TokenTagEnum.Float32ConvertInteger32Unsigned,
	Float32ConvertInteger64Signed: 29 as TokenTagEnum.Float32ConvertInteger64Signed,
	Float32ConvertInteger64Unsigned: 30 as TokenTagEnum.Float32ConvertInteger64Unsigned,
	Float32CopySign: 31 as TokenTagEnum.Float32CopySign,
	Float32DemoteFloat64: 32 as TokenTagEnum.Float32DemoteFloat64,
	Float32Divide: 33 as TokenTagEnum.Float32Divide,
	Float32Equals: 34 as TokenTagEnum.Float32Equals,
	Float32Floor: 35 as TokenTagEnum.Float32Floor,
	Float32GreaterThan: 36 as TokenTagEnum.Float32GreaterThan,
	Float32GreaterThanOrEquals: 37 as TokenTagEnum.Float32GreaterThanOrEquals,
	Float32LessThan: 38 as TokenTagEnum.Float32LessThan,
	Float32LessThanOrEquals: 39 as TokenTagEnum.Float32LessThanOrEquals,
	Float32Load: 40 as TokenTagEnum.Float32Load,
	Float32Maximum: 41 as TokenTagEnum.Float32Maximum,
	Float32Minimum: 42 as TokenTagEnum.Float32Minimum,
	Float32Multiply: 43 as TokenTagEnum.Float32Multiply,
	Float32Nearest: 44 as TokenTagEnum.Float32Nearest,
	Float32Negate: 45 as TokenTagEnum.Float32Negate,
	Float32NotEquals: 46 as TokenTagEnum.Float32NotEquals,
	Float32ReinterpretInteger32: 47 as TokenTagEnum.Float32ReinterpretInteger32,
	Float32SquareRoot: 48 as TokenTagEnum.Float32SquareRoot,
	Float32Store: 49 as TokenTagEnum.Float32Store,
	Float32Subtract: 50 as TokenTagEnum.Float32Subtract,
	Float32Truncate: 51 as TokenTagEnum.Float32Truncate,
	Float64: 52 as TokenTagEnum.Float64,
	Float64Absolute: 53 as TokenTagEnum.Float64Absolute,
	Float64Add: 54 as TokenTagEnum.Float64Add,
	Float64Ceiling: 55 as TokenTagEnum.Float64Ceiling,
	Float64Constant: 56 as TokenTagEnum.Float64Constant,
	Float64ConvertInteger32Signed: 57 as TokenTagEnum.Float64ConvertInteger32Signed,
	Float64ConvertInteger32Unsigned: 58 as TokenTagEnum.Float64ConvertInteger32Unsigned,
	Float64ConvertInteger64Signed: 59 as TokenTagEnum.Float64ConvertInteger64Signed,
	Float64ConvertInteger64Unsigned: 60 as TokenTagEnum.Float64ConvertInteger64Unsigned,
	Float64CopySign: 61 as TokenTagEnum.Float64CopySign,
	Float64Divide: 62 as TokenTagEnum.Float64Divide,
	Float64Equals: 63 as TokenTagEnum.Float64Equals,
	Float64Floor: 64 as TokenTagEnum.Float64Floor,
	Float64GreaterThan: 65 as TokenTagEnum.Float64GreaterThan,
	Float64GreaterThanOrEquals: 66 as TokenTagEnum.Float64GreaterThanOrEquals,
	Float64LessThan: 67 as TokenTagEnum.Float64LessThan,
	Float64LessThanOrEquals: 68 as TokenTagEnum.Float64LessThanOrEquals,
	Float64Load: 69 as TokenTagEnum.Float64Load,
	Float64Maximum: 70 as TokenTagEnum.Float64Maximum,
	Float64Minimum: 71 as TokenTagEnum.Float64Minimum,
	Float64Multiply: 72 as TokenTagEnum.Float64Multiply,
	Float64Nearest: 73 as TokenTagEnum.Float64Nearest,
	Float64Negate: 74 as TokenTagEnum.Float64Negate,
	Float64NotEquals: 75 as TokenTagEnum.Float64NotEquals,
	Float64PromoteFloat32: 76 as TokenTagEnum.Float64PromoteFloat32,
	Float64ReinterpretInteger64: 77 as TokenTagEnum.Float64ReinterpretInteger64,
	Float64SquareRoot: 78 as TokenTagEnum.Float64SquareRoot,
	Float64Store: 79 as TokenTagEnum.Float64Store,
	Float64Subtract: 80 as TokenTagEnum.Float64Subtract,
	Float64Truncate: 81 as TokenTagEnum.Float64Truncate,
	Function: 82 as TokenTagEnum.Function,
	FunctionReference: 83 as TokenTagEnum.FunctionReference,
	Global: 84 as TokenTagEnum.Global,
	GlobalGet: 85 as TokenTagEnum.GlobalGet,
	GlobalSet: 86 as TokenTagEnum.GlobalSet,
	Identifier: 87 as TokenTagEnum.Identifier,
	If: 88 as TokenTagEnum.If,
	Import: 89 as TokenTagEnum.Import,
	Integer32: 90 as TokenTagEnum.Integer32,
	Integer32Add: 91 as TokenTagEnum.Integer32Add,
	Integer32And: 92 as TokenTagEnum.Integer32And,
	Integer32Constant: 93 as TokenTagEnum.Integer32Constant,
	Integer32CountLeadingZeros: 94 as TokenTagEnum.Integer32CountLeadingZeros,
	Integer32CountTrailingZeros: 95 as TokenTagEnum.Integer32CountTrailingZeros,
	Integer32DivideSigned: 96 as TokenTagEnum.Integer32DivideSigned,
	Integer32DivideUnsigned: 97 as TokenTagEnum.Integer32DivideUnsigned,
	Integer32Equals: 98 as TokenTagEnum.Integer32Equals,
	Integer32EqualsZero: 99 as TokenTagEnum.Integer32EqualsZero,
	Integer32Extend16Signed: 100 as TokenTagEnum.Integer32Extend16Signed,
	Integer32Extend8Signed: 101 as TokenTagEnum.Integer32Extend8Signed,
	Integer32GreaterThanOrEqualsSigned: 102 as TokenTagEnum.Integer32GreaterThanOrEqualsSigned,
	Integer32GreaterThanOrEqualsUnsigned: 103 as TokenTagEnum.Integer32GreaterThanOrEqualsUnsigned,
	Integer32GreaterThanSigned: 104 as TokenTagEnum.Integer32GreaterThanSigned,
	Integer32GreaterThanUnsigned: 105 as TokenTagEnum.Integer32GreaterThanUnsigned,
	Integer32LessThanOrEqualsSigned: 106 as TokenTagEnum.Integer32LessThanOrEqualsSigned,
	Integer32LessThanOrEqualsUnsigned: 107 as TokenTagEnum.Integer32LessThanOrEqualsUnsigned,
	Integer32LessThanSigned: 108 as TokenTagEnum.Integer32LessThanSigned,
	Integer32LessThanUnsigned: 109 as TokenTagEnum.Integer32LessThanUnsigned,
	Integer32Load: 110 as TokenTagEnum.Integer32Load,
	Integer32Load16Signed: 111 as TokenTagEnum.Integer32Load16Signed,
	Integer32Load16Unsigned: 112 as TokenTagEnum.Integer32Load16Unsigned,
	Integer32Load8Signed: 113 as TokenTagEnum.Integer32Load8Signed,
	Integer32Load8Unsigned: 114 as TokenTagEnum.Integer32Load8Unsigned,
	Integer32Multiply: 115 as TokenTagEnum.Integer32Multiply,
	Integer32NotEqual: 116 as TokenTagEnum.Integer32NotEqual,
	Integer32Or: 117 as TokenTagEnum.Integer32Or,
	Integer32PopCountNonZeros: 118 as TokenTagEnum.Integer32PopCountNonZeros,
	Integer32ReinterpretFloat32: 119 as TokenTagEnum.Integer32ReinterpretFloat32,
	Integer32RemainderSigned: 120 as TokenTagEnum.Integer32RemainderSigned,
	Integer32RemainderUnsigned: 121 as TokenTagEnum.Integer32RemainderUnsigned,
	Integer32RotateLeft: 122 as TokenTagEnum.Integer32RotateLeft,
	Integer32RotateRight: 123 as TokenTagEnum.Integer32RotateRight,
	Integer32ShiftLeft: 124 as TokenTagEnum.Integer32ShiftLeft,
	Integer32ShiftRightSigned: 125 as TokenTagEnum.Integer32ShiftRightSigned,
	Integer32ShiftRightUnsigned: 126 as TokenTagEnum.Integer32ShiftRightUnsigned,
	Integer32Store: 127 as TokenTagEnum.Integer32Store,
	Integer32Store16: 128 as TokenTagEnum.Integer32Store16,
	Integer32Store8: 129 as TokenTagEnum.Integer32Store8,
	Integer32Subtract: 130 as TokenTagEnum.Integer32Subtract,
	Integer32TruncateFloat32Signed: 131 as TokenTagEnum.Integer32TruncateFloat32Signed,
	Integer32TruncateFloat32Unsigned: 132 as TokenTagEnum.Integer32TruncateFloat32Unsigned,
	Integer32TruncateFloat64Signed: 133 as TokenTagEnum.Integer32TruncateFloat64Signed,
	Integer32TruncateFloat64Unsigned: 134 as TokenTagEnum.Integer32TruncateFloat64Unsigned,
	Integer32TruncateSaturateFloat32Signed: 135 as TokenTagEnum.Integer32TruncateSaturateFloat32Signed,
	Integer32TruncateSaturateFloat32Unsigned: 136 as TokenTagEnum.Integer32TruncateSaturateFloat32Unsigned,
	Integer32TruncateSaturateFloat64Signed: 137 as TokenTagEnum.Integer32TruncateSaturateFloat64Signed,
	Integer32TruncateSaturateFloat64Unsigned: 138 as TokenTagEnum.Integer32TruncateSaturateFloat64Unsigned,
	Integer32WrapInteger64: 139 as TokenTagEnum.Integer32WrapInteger64,
	Integer32Xor: 140 as TokenTagEnum.Integer32Xor,
	Integer64: 141 as TokenTagEnum.Integer64,
	Integer64Add: 142 as TokenTagEnum.Integer64Add,
	Integer64And: 143 as TokenTagEnum.Integer64And,
	Integer64Constant: 144 as TokenTagEnum.Integer64Constant,
	Integer64CountLeadingZeros: 145 as TokenTagEnum.Integer64CountLeadingZeros,
	Integer64CountTrailingZeros: 146 as TokenTagEnum.Integer64CountTrailingZeros,
	Integer64DivideSigned: 147 as TokenTagEnum.Integer64DivideSigned,
	Integer64DivideUnsigned: 148 as TokenTagEnum.Integer64DivideUnsigned,
	Integer64Equals: 149 as TokenTagEnum.Integer64Equals,
	Integer64EqualsZero: 150 as TokenTagEnum.Integer64EqualsZero,
	Integer64Extend16Signed: 151 as TokenTagEnum.Integer64Extend16Signed,
	Integer64Extend32Signed: 152 as TokenTagEnum.Integer64Extend32Signed,
	Integer64Extend8Signed: 153 as TokenTagEnum.Integer64Extend8Signed,
	Integer64ExtendInteger32Signed: 154 as TokenTagEnum.Integer64ExtendInteger32Signed,
	Integer64ExtendInteger32Unsigned: 155 as TokenTagEnum.Integer64ExtendInteger32Unsigned,
	Integer64GreaterThanOrEqualsSigned: 156 as TokenTagEnum.Integer64GreaterThanOrEqualsSigned,
	Integer64GreaterThanOrEqualsUnsigned: 157 as TokenTagEnum.Integer64GreaterThanOrEqualsUnsigned,
	Integer64GreaterThanSigned: 158 as TokenTagEnum.Integer64GreaterThanSigned,
	Integer64GreaterThanUnsigned: 159 as TokenTagEnum.Integer64GreaterThanUnsigned,
	Integer64LessThanOrEqualsSigned: 160 as TokenTagEnum.Integer64LessThanOrEqualsSigned,
	Integer64LessThanOrEqualsUnsigned: 161 as TokenTagEnum.Integer64LessThanOrEqualsUnsigned,
	Integer64LessThanSigned: 162 as TokenTagEnum.Integer64LessThanSigned,
	Integer64LessThanUnsigned: 163 as TokenTagEnum.Integer64LessThanUnsigned,
	Integer64Load: 164 as TokenTagEnum.Integer64Load,
	Integer64Load16Signed: 165 as TokenTagEnum.Integer64Load16Signed,
	Integer64Load16Unsigned: 166 as TokenTagEnum.Integer64Load16Unsigned,
	Integer64Load32Signed: 167 as TokenTagEnum.Integer64Load32Signed,
	Integer64Load32Unsigned: 168 as TokenTagEnum.Integer64Load32Unsigned,
	Integer64Load8Signed: 169 as TokenTagEnum.Integer64Load8Signed,
	Integer64Load8Unsigned: 170 as TokenTagEnum.Integer64Load8Unsigned,
	Integer64Multiply: 171 as TokenTagEnum.Integer64Multiply,
	Integer64NotEqual: 172 as TokenTagEnum.Integer64NotEqual,
	Integer64Or: 173 as TokenTagEnum.Integer64Or,
	Integer64PopCountNonZeros: 174 as TokenTagEnum.Integer64PopCountNonZeros,
	Integer64ReinterpretFloat64: 175 as TokenTagEnum.Integer64ReinterpretFloat64,
	Integer64RemainderSigned: 176 as TokenTagEnum.Integer64RemainderSigned,
	Integer64RemainderUnsigned: 177 as TokenTagEnum.Integer64RemainderUnsigned,
	Integer64RotateLeft: 178 as TokenTagEnum.Integer64RotateLeft,
	Integer64RotateRight: 179 as TokenTagEnum.Integer64RotateRight,
	Integer64ShiftLeft: 180 as TokenTagEnum.Integer64ShiftLeft,
	Integer64ShiftRightSigned: 181 as TokenTagEnum.Integer64ShiftRightSigned,
	Integer64ShiftRightUnsigned: 182 as TokenTagEnum.Integer64ShiftRightUnsigned,
	Integer64Store: 183 as TokenTagEnum.Integer64Store,
	Integer64Store16: 184 as TokenTagEnum.Integer64Store16,
	Integer64Store32: 185 as TokenTagEnum.Integer64Store32,
	Integer64Store8: 186 as TokenTagEnum.Integer64Store8,
	Integer64Subtract: 187 as TokenTagEnum.Integer64Subtract,
	Integer64TruncateFloat32Signed: 188 as TokenTagEnum.Integer64TruncateFloat32Signed,
	Integer64TruncateFloat32Unsigned: 189 as TokenTagEnum.Integer64TruncateFloat32Unsigned,
	Integer64TruncateFloat64Signed: 190 as TokenTagEnum.Integer64TruncateFloat64Signed,
	Integer64TruncateFloat64Unsigned: 191 as TokenTagEnum.Integer64TruncateFloat64Unsigned,
	Integer64TruncateSaturateFloat32Signed: 192 as TokenTagEnum.Integer64TruncateSaturateFloat32Signed,
	Integer64TruncateSaturateFloat32Unsigned: 193 as TokenTagEnum.Integer64TruncateSaturateFloat32Unsigned,
	Integer64TruncateSaturateFloat64Signed: 194 as TokenTagEnum.Integer64TruncateSaturateFloat64Signed,
	Integer64TruncateSaturateFloat64Unsigned: 195 as TokenTagEnum.Integer64TruncateSaturateFloat64Unsigned,
	Integer64Xor: 196 as TokenTagEnum.Integer64Xor,
	Item: 197 as TokenTagEnum.Item,
	Keyword: 198 as TokenTagEnum.Keyword,
	LineComment: 199 as TokenTagEnum.LineComment,
	Local: 200 as TokenTagEnum.Local,
	LocalGet: 201 as TokenTagEnum.LocalGet,
	LocalSet: 202 as TokenTagEnum.LocalSet,
	LocalTee: 203 as TokenTagEnum.LocalTee,
	Loop: 204 as TokenTagEnum.Loop,
	Memory: 205 as TokenTagEnum.Memory,
	MemoryCopy: 206 as TokenTagEnum.MemoryCopy,
	MemoryFill: 207 as TokenTagEnum.MemoryFill,
	MemoryGrow: 208 as TokenTagEnum.MemoryGrow,
	MemoryInitiate: 209 as TokenTagEnum.MemoryInitiate,
	MemorySize: 210 as TokenTagEnum.MemorySize,
	Module: 211 as TokenTagEnum.Module,
	Mutable: 212 as TokenTagEnum.Mutable,
	NoOperation: 213 as TokenTagEnum.NoOperation,
	Number: 214 as TokenTagEnum.Number,
	Offset: 215 as TokenTagEnum.Offset,
	OffsetEquals: 216 as TokenTagEnum.OffsetEquals,
	OpenBracket: 217 as TokenTagEnum.OpenBracket,
	Parameter: 218 as TokenTagEnum.Parameter,
	ReferenceFunction: 219 as TokenTagEnum.ReferenceFunction,
	ReferenceIsNull: 220 as TokenTagEnum.ReferenceIsNull,
	ReferenceNull: 221 as TokenTagEnum.ReferenceNull,
	Result: 222 as TokenTagEnum.Result,
	Return: 223 as TokenTagEnum.Return,
	Select: 224 as TokenTagEnum.Select,
	Start: 225 as TokenTagEnum.Start,
	String: 226 as TokenTagEnum.String,
	StringApostropheEscape: 227 as TokenTagEnum.StringApostropheEscape,
	StringBackslashEscape: 228 as TokenTagEnum.StringBackslashEscape,
	StringHexEscape: 229 as TokenTagEnum.StringHexEscape,
	StringInvalidCharacter: 230 as TokenTagEnum.StringInvalidCharacter,
	StringNewlineEscape: 231 as TokenTagEnum.StringNewlineEscape,
	StringNonEscape: 232 as TokenTagEnum.StringNonEscape,
	StringQuoteEscape: 233 as TokenTagEnum.StringQuoteEscape,
	StringReturnEscape: 234 as TokenTagEnum.StringReturnEscape,
	StringTabEscape: 235 as TokenTagEnum.StringTabEscape,
	StringUnicodeEscape: 236 as TokenTagEnum.StringUnicodeEscape,
	Table: 237 as TokenTagEnum.Table,
	TableCopy: 238 as TokenTagEnum.TableCopy,
	TableFill: 239 as TokenTagEnum.TableFill,
	TableGet: 240 as TokenTagEnum.TableGet,
	TableGrow: 241 as TokenTagEnum.TableGrow,
	TableInitiate: 242 as TokenTagEnum.TableInitiate,
	TableSet: 243 as TokenTagEnum.TableSet,
	TableSize: 244 as TokenTagEnum.TableSize,
	Type: 245 as TokenTagEnum.Type,
	Unreachable: 246 as TokenTagEnum.Unreachable,
	Vector128: 247 as TokenTagEnum.Vector128,
}

export type TokenTag = TokenTagEnum

export namespace TokenTag {
	export type AlignEquals = typeof TokenTag.AlignEquals
	export type Block = typeof TokenTag.Block
	export type BlockComment = typeof TokenTag.BlockComment
	export type Branch = typeof TokenTag.Branch
	export type BranchIf = typeof TokenTag.BranchIf
	export type BranchTable = typeof TokenTag.BranchTable
	export type Call = typeof TokenTag.Call
	export type CallIndirect = typeof TokenTag.CallIndirect
	export type CloseBracket = typeof TokenTag.CloseBracket
	export type Data = typeof TokenTag.Data
	export type DataDrop = typeof TokenTag.DataDrop
	export type Declare = typeof TokenTag.Declare
	export type Drop = typeof TokenTag.Drop
	export type Element = typeof TokenTag.Element
	export type ElementDrop = typeof TokenTag.ElementDrop
	export type Else = typeof TokenTag.Else
	export type End = typeof TokenTag.End
	export type Error = typeof TokenTag.Error
	export type Export = typeof TokenTag.Export
	export type External = typeof TokenTag.External
	export type ExternalReference = typeof TokenTag.ExternalReference
	export type Float32 = typeof TokenTag.Float32
	export type Float32Absolute = typeof TokenTag.Float32Absolute
	export type Float32Add = typeof TokenTag.Float32Add
	export type Float32Ceiling = typeof TokenTag.Float32Ceiling
	export type Float32Constant = typeof TokenTag.Float32Constant
	export type Float32ConvertInteger32Signed = typeof TokenTag.Float32ConvertInteger32Signed
	export type Float32ConvertInteger32Unsigned = typeof TokenTag.Float32ConvertInteger32Unsigned
	export type Float32ConvertInteger64Signed = typeof TokenTag.Float32ConvertInteger64Signed
	export type Float32ConvertInteger64Unsigned = typeof TokenTag.Float32ConvertInteger64Unsigned
	export type Float32CopySign = typeof TokenTag.Float32CopySign
	export type Float32DemoteFloat64 = typeof TokenTag.Float32DemoteFloat64
	export type Float32Divide = typeof TokenTag.Float32Divide
	export type Float32Equals = typeof TokenTag.Float32Equals
	export type Float32Floor = typeof TokenTag.Float32Floor
	export type Float32GreaterThan = typeof TokenTag.Float32GreaterThan
	export type Float32GreaterThanOrEquals = typeof TokenTag.Float32GreaterThanOrEquals
	export type Float32LessThan = typeof TokenTag.Float32LessThan
	export type Float32LessThanOrEquals = typeof TokenTag.Float32LessThanOrEquals
	export type Float32Load = typeof TokenTag.Float32Load
	export type Float32Maximum = typeof TokenTag.Float32Maximum
	export type Float32Minimum = typeof TokenTag.Float32Minimum
	export type Float32Multiply = typeof TokenTag.Float32Multiply
	export type Float32Nearest = typeof TokenTag.Float32Nearest
	export type Float32Negate = typeof TokenTag.Float32Negate
	export type Float32NotEquals = typeof TokenTag.Float32NotEquals
	export type Float32ReinterpretInteger32 = typeof TokenTag.Float32ReinterpretInteger32
	export type Float32SquareRoot = typeof TokenTag.Float32SquareRoot
	export type Float32Store = typeof TokenTag.Float32Store
	export type Float32Subtract = typeof TokenTag.Float32Subtract
	export type Float32Truncate = typeof TokenTag.Float32Truncate
	export type Float64 = typeof TokenTag.Float64
	export type Float64Absolute = typeof TokenTag.Float64Absolute
	export type Float64Add = typeof TokenTag.Float64Add
	export type Float64Ceiling = typeof TokenTag.Float64Ceiling
	export type Float64Constant = typeof TokenTag.Float64Constant
	export type Float64ConvertInteger32Signed = typeof TokenTag.Float64ConvertInteger32Signed
	export type Float64ConvertInteger32Unsigned = typeof TokenTag.Float64ConvertInteger32Unsigned
	export type Float64ConvertInteger64Signed = typeof TokenTag.Float64ConvertInteger64Signed
	export type Float64ConvertInteger64Unsigned = typeof TokenTag.Float64ConvertInteger64Unsigned
	export type Float64CopySign = typeof TokenTag.Float64CopySign
	export type Float64Divide = typeof TokenTag.Float64Divide
	export type Float64Equals = typeof TokenTag.Float64Equals
	export type Float64Floor = typeof TokenTag.Float64Floor
	export type Float64GreaterThan = typeof TokenTag.Float64GreaterThan
	export type Float64GreaterThanOrEquals = typeof TokenTag.Float64GreaterThanOrEquals
	export type Float64LessThan = typeof TokenTag.Float64LessThan
	export type Float64LessThanOrEquals = typeof TokenTag.Float64LessThanOrEquals
	export type Float64Load = typeof TokenTag.Float64Load
	export type Float64Maximum = typeof TokenTag.Float64Maximum
	export type Float64Minimum = typeof TokenTag.Float64Minimum
	export type Float64Multiply = typeof TokenTag.Float64Multiply
	export type Float64Nearest = typeof TokenTag.Float64Nearest
	export type Float64Negate = typeof TokenTag.Float64Negate
	export type Float64NotEquals = typeof TokenTag.Float64NotEquals
	export type Float64PromoteFloat32 = typeof TokenTag.Float64PromoteFloat32
	export type Float64ReinterpretInteger64 = typeof TokenTag.Float64ReinterpretInteger64
	export type Float64SquareRoot = typeof TokenTag.Float64SquareRoot
	export type Float64Store = typeof TokenTag.Float64Store
	export type Float64Subtract = typeof TokenTag.Float64Subtract
	export type Float64Truncate = typeof TokenTag.Float64Truncate
	export type Function = typeof TokenTag.Function
	export type FunctionReference = typeof TokenTag.FunctionReference
	export type Global = typeof TokenTag.Global
	export type GlobalGet = typeof TokenTag.GlobalGet
	export type GlobalSet = typeof TokenTag.GlobalSet
	export type Identifier = typeof TokenTag.Identifier
	export type If = typeof TokenTag.If
	export type Import = typeof TokenTag.Import
	export type Integer32 = typeof TokenTag.Integer32
	export type Integer32Add = typeof TokenTag.Integer32Add
	export type Integer32And = typeof TokenTag.Integer32And
	export type Integer32Constant = typeof TokenTag.Integer32Constant
	export type Integer32CountLeadingZeros = typeof TokenTag.Integer32CountLeadingZeros
	export type Integer32CountTrailingZeros = typeof TokenTag.Integer32CountTrailingZeros
	export type Integer32DivideSigned = typeof TokenTag.Integer32DivideSigned
	export type Integer32DivideUnsigned = typeof TokenTag.Integer32DivideUnsigned
	export type Integer32Equals = typeof TokenTag.Integer32Equals
	export type Integer32EqualsZero = typeof TokenTag.Integer32EqualsZero
	export type Integer32Extend16Signed = typeof TokenTag.Integer32Extend16Signed
	export type Integer32Extend8Signed = typeof TokenTag.Integer32Extend8Signed
	export type Integer32GreaterThanOrEqualsSigned = typeof TokenTag.Integer32GreaterThanOrEqualsSigned
	export type Integer32GreaterThanOrEqualsUnsigned = typeof TokenTag.Integer32GreaterThanOrEqualsUnsigned
	export type Integer32GreaterThanSigned = typeof TokenTag.Integer32GreaterThanSigned
	export type Integer32GreaterThanUnsigned = typeof TokenTag.Integer32GreaterThanUnsigned
	export type Integer32LessThanOrEqualsSigned = typeof TokenTag.Integer32LessThanOrEqualsSigned
	export type Integer32LessThanOrEqualsUnsigned = typeof TokenTag.Integer32LessThanOrEqualsUnsigned
	export type Integer32LessThanSigned = typeof TokenTag.Integer32LessThanSigned
	export type Integer32LessThanUnsigned = typeof TokenTag.Integer32LessThanUnsigned
	export type Integer32Load = typeof TokenTag.Integer32Load
	export type Integer32Load16Signed = typeof TokenTag.Integer32Load16Signed
	export type Integer32Load16Unsigned = typeof TokenTag.Integer32Load16Unsigned
	export type Integer32Load8Signed = typeof TokenTag.Integer32Load8Signed
	export type Integer32Load8Unsigned = typeof TokenTag.Integer32Load8Unsigned
	export type Integer32Multiply = typeof TokenTag.Integer32Multiply
	export type Integer32NotEqual = typeof TokenTag.Integer32NotEqual
	export type Integer32Or = typeof TokenTag.Integer32Or
	export type Integer32PopCountNonZeros = typeof TokenTag.Integer32PopCountNonZeros
	export type Integer32ReinterpretFloat32 = typeof TokenTag.Integer32ReinterpretFloat32
	export type Integer32RemainderSigned = typeof TokenTag.Integer32RemainderSigned
	export type Integer32RemainderUnsigned = typeof TokenTag.Integer32RemainderUnsigned
	export type Integer32RotateLeft = typeof TokenTag.Integer32RotateLeft
	export type Integer32RotateRight = typeof TokenTag.Integer32RotateRight
	export type Integer32ShiftLeft = typeof TokenTag.Integer32ShiftLeft
	export type Integer32ShiftRightSigned = typeof TokenTag.Integer32ShiftRightSigned
	export type Integer32ShiftRightUnsigned = typeof TokenTag.Integer32ShiftRightUnsigned
	export type Integer32Store = typeof TokenTag.Integer32Store
	export type Integer32Store16 = typeof TokenTag.Integer32Store16
	export type Integer32Store8 = typeof TokenTag.Integer32Store8
	export type Integer32Subtract = typeof TokenTag.Integer32Subtract
	export type Integer32TruncateFloat32Signed = typeof TokenTag.Integer32TruncateFloat32Signed
	export type Integer32TruncateFloat32Unsigned = typeof TokenTag.Integer32TruncateFloat32Unsigned
	export type Integer32TruncateFloat64Signed = typeof TokenTag.Integer32TruncateFloat64Signed
	export type Integer32TruncateFloat64Unsigned = typeof TokenTag.Integer32TruncateFloat64Unsigned
	export type Integer32TruncateSaturateFloat32Signed = typeof TokenTag.Integer32TruncateSaturateFloat32Signed
	export type Integer32TruncateSaturateFloat32Unsigned = typeof TokenTag.Integer32TruncateSaturateFloat32Unsigned
	export type Integer32TruncateSaturateFloat64Signed = typeof TokenTag.Integer32TruncateSaturateFloat64Signed
	export type Integer32TruncateSaturateFloat64Unsigned = typeof TokenTag.Integer32TruncateSaturateFloat64Unsigned
	export type Integer32WrapInteger64 = typeof TokenTag.Integer32WrapInteger64
	export type Integer32Xor = typeof TokenTag.Integer32Xor
	export type Integer64 = typeof TokenTag.Integer64
	export type Integer64Add = typeof TokenTag.Integer64Add
	export type Integer64And = typeof TokenTag.Integer64And
	export type Integer64Constant = typeof TokenTag.Integer64Constant
	export type Integer64CountLeadingZeros = typeof TokenTag.Integer64CountLeadingZeros
	export type Integer64CountTrailingZeros = typeof TokenTag.Integer64CountTrailingZeros
	export type Integer64DivideSigned = typeof TokenTag.Integer64DivideSigned
	export type Integer64DivideUnsigned = typeof TokenTag.Integer64DivideUnsigned
	export type Integer64Equals = typeof TokenTag.Integer64Equals
	export type Integer64EqualsZero = typeof TokenTag.Integer64EqualsZero
	export type Integer64Extend16Signed = typeof TokenTag.Integer64Extend16Signed
	export type Integer64Extend32Signed = typeof TokenTag.Integer64Extend32Signed
	export type Integer64Extend8Signed = typeof TokenTag.Integer64Extend8Signed
	export type Integer64ExtendInteger32Signed = typeof TokenTag.Integer64ExtendInteger32Signed
	export type Integer64ExtendInteger32Unsigned = typeof TokenTag.Integer64ExtendInteger32Unsigned
	export type Integer64GreaterThanOrEqualsSigned = typeof TokenTag.Integer64GreaterThanOrEqualsSigned
	export type Integer64GreaterThanOrEqualsUnsigned = typeof TokenTag.Integer64GreaterThanOrEqualsUnsigned
	export type Integer64GreaterThanSigned = typeof TokenTag.Integer64GreaterThanSigned
	export type Integer64GreaterThanUnsigned = typeof TokenTag.Integer64GreaterThanUnsigned
	export type Integer64LessThanOrEqualsSigned = typeof TokenTag.Integer64LessThanOrEqualsSigned
	export type Integer64LessThanOrEqualsUnsigned = typeof TokenTag.Integer64LessThanOrEqualsUnsigned
	export type Integer64LessThanSigned = typeof TokenTag.Integer64LessThanSigned
	export type Integer64LessThanUnsigned = typeof TokenTag.Integer64LessThanUnsigned
	export type Integer64Load = typeof TokenTag.Integer64Load
	export type Integer64Load16Signed = typeof TokenTag.Integer64Load16Signed
	export type Integer64Load16Unsigned = typeof TokenTag.Integer64Load16Unsigned
	export type Integer64Load32Signed = typeof TokenTag.Integer64Load32Signed
	export type Integer64Load32Unsigned = typeof TokenTag.Integer64Load32Unsigned
	export type Integer64Load8Signed = typeof TokenTag.Integer64Load8Signed
	export type Integer64Load8Unsigned = typeof TokenTag.Integer64Load8Unsigned
	export type Integer64Multiply = typeof TokenTag.Integer64Multiply
	export type Integer64NotEqual = typeof TokenTag.Integer64NotEqual
	export type Integer64Or = typeof TokenTag.Integer64Or
	export type Integer64PopCountNonZeros = typeof TokenTag.Integer64PopCountNonZeros
	export type Integer64ReinterpretFloat64 = typeof TokenTag.Integer64ReinterpretFloat64
	export type Integer64RemainderSigned = typeof TokenTag.Integer64RemainderSigned
	export type Integer64RemainderUnsigned = typeof TokenTag.Integer64RemainderUnsigned
	export type Integer64RotateLeft = typeof TokenTag.Integer64RotateLeft
	export type Integer64RotateRight = typeof TokenTag.Integer64RotateRight
	export type Integer64ShiftLeft = typeof TokenTag.Integer64ShiftLeft
	export type Integer64ShiftRightSigned = typeof TokenTag.Integer64ShiftRightSigned
	export type Integer64ShiftRightUnsigned = typeof TokenTag.Integer64ShiftRightUnsigned
	export type Integer64Store = typeof TokenTag.Integer64Store
	export type Integer64Store16 = typeof TokenTag.Integer64Store16
	export type Integer64Store32 = typeof TokenTag.Integer64Store32
	export type Integer64Store8 = typeof TokenTag.Integer64Store8
	export type Integer64Subtract = typeof TokenTag.Integer64Subtract
	export type Integer64TruncateFloat32Signed = typeof TokenTag.Integer64TruncateFloat32Signed
	export type Integer64TruncateFloat32Unsigned = typeof TokenTag.Integer64TruncateFloat32Unsigned
	export type Integer64TruncateFloat64Signed = typeof TokenTag.Integer64TruncateFloat64Signed
	export type Integer64TruncateFloat64Unsigned = typeof TokenTag.Integer64TruncateFloat64Unsigned
	export type Integer64TruncateSaturateFloat32Signed = typeof TokenTag.Integer64TruncateSaturateFloat32Signed
	export type Integer64TruncateSaturateFloat32Unsigned = typeof TokenTag.Integer64TruncateSaturateFloat32Unsigned
	export type Integer64TruncateSaturateFloat64Signed = typeof TokenTag.Integer64TruncateSaturateFloat64Signed
	export type Integer64TruncateSaturateFloat64Unsigned = typeof TokenTag.Integer64TruncateSaturateFloat64Unsigned
	export type Integer64Xor = typeof TokenTag.Integer64Xor
	export type Item = typeof TokenTag.Item
	export type Keyword = typeof TokenTag.Keyword
	export type LineComment = typeof TokenTag.LineComment
	export type Local = typeof TokenTag.Local
	export type LocalGet = typeof TokenTag.LocalGet
	export type LocalSet = typeof TokenTag.LocalSet
	export type LocalTee = typeof TokenTag.LocalTee
	export type Loop = typeof TokenTag.Loop
	export type Memory = typeof TokenTag.Memory
	export type MemoryCopy = typeof TokenTag.MemoryCopy
	export type MemoryFill = typeof TokenTag.MemoryFill
	export type MemoryGrow = typeof TokenTag.MemoryGrow
	export type MemoryInitiate = typeof TokenTag.MemoryInitiate
	export type MemorySize = typeof TokenTag.MemorySize
	export type Module = typeof TokenTag.Module
	export type Mutable = typeof TokenTag.Mutable
	export type NoOperation = typeof TokenTag.NoOperation
	export type Number = typeof TokenTag.Number
	export type Offset = typeof TokenTag.Offset
	export type OffsetEquals = typeof TokenTag.OffsetEquals
	export type OpenBracket = typeof TokenTag.OpenBracket
	export type Parameter = typeof TokenTag.Parameter
	export type ReferenceFunction = typeof TokenTag.ReferenceFunction
	export type ReferenceIsNull = typeof TokenTag.ReferenceIsNull
	export type ReferenceNull = typeof TokenTag.ReferenceNull
	export type Result = typeof TokenTag.Result
	export type Return = typeof TokenTag.Return
	export type Select = typeof TokenTag.Select
	export type Start = typeof TokenTag.Start
	export type String = typeof TokenTag.String
	export type StringApostropheEscape = typeof TokenTag.StringApostropheEscape
	export type StringBackslashEscape = typeof TokenTag.StringBackslashEscape
	export type StringHexEscape = typeof TokenTag.StringHexEscape
	export type StringInvalidCharacter = typeof TokenTag.StringInvalidCharacter
	export type StringNewlineEscape = typeof TokenTag.StringNewlineEscape
	export type StringNonEscape = typeof TokenTag.StringNonEscape
	export type StringQuoteEscape = typeof TokenTag.StringQuoteEscape
	export type StringReturnEscape = typeof TokenTag.StringReturnEscape
	export type StringTabEscape = typeof TokenTag.StringTabEscape
	export type StringUnicodeEscape = typeof TokenTag.StringUnicodeEscape
	export type Table = typeof TokenTag.Table
	export type TableCopy = typeof TokenTag.TableCopy
	export type TableFill = typeof TokenTag.TableFill
	export type TableGet = typeof TokenTag.TableGet
	export type TableGrow = typeof TokenTag.TableGrow
	export type TableInitiate = typeof TokenTag.TableInitiate
	export type TableSet = typeof TokenTag.TableSet
	export type TableSize = typeof TokenTag.TableSize
	export type Type = typeof TokenTag.Type
	export type Unreachable = typeof TokenTag.Unreachable
	export type Vector128 = typeof TokenTag.Vector128
}
