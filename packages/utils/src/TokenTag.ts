declare enum TokenTagEnum { AlignEquals, Block, BlockComment, Branch, BranchIf, BranchTable, Call, CallIndirect, CloseBracket, Data, DataDrop, Declare, Drop, Element, ElementDrop, Else, End, Export, External, ExternalReference, Float32, Float32Absolute, Float32Add, Float32Ceiling, Float32Constant, Float32ConvertInteger32Signed, Float32ConvertInteger32Unsigned, Float32ConvertInteger64Signed, Float32ConvertInteger64Unsigned, Float32CopySign, Float32DemoteFloat64, Float32Divide, Float32Equals, Float32Floor, Float32GreaterThan, Float32GreaterThanOrEquals, Float32LessThan, Float32LessThanOrEquals, Float32Load, Float32Maximum, Float32Minimum, Float32Multiply, Float32Nearest, Float32Negate, Float32NotEquals, Float32ReinterpretInteger32, Float32SquareRoot, Float32Store, Float32Subtract, Float32Truncate, Float64, Float64Absolute, Float64Add, Float64Ceiling, Float64Constant, Float64ConvertInteger32Signed, Float64ConvertInteger32Unsigned, Float64ConvertInteger64Signed, Float64ConvertInteger64Unsigned, Float64CopySign, Float64Divide, Float64Equals, Float64Floor, Float64GreaterThan, Float64GreaterThanOrEquals, Float64LessThan, Float64LessThanOrEquals, Float64Load, Float64Maximum, Float64Minimum, Float64Multiply, Float64Nearest, Float64Negate, Float64NotEquals, Float64PromoteFloat32, Float64ReinterpretInteger64, Float64SquareRoot, Float64Store, Float64Subtract, Float64Truncate, Function, FunctionReference, Global, GlobalGet, GlobalSet, Identifier, If, Import, Integer32, Integer32Add, Integer32And, Integer32Constant, Integer32CountLeadingZeros, Integer32CountTrailingZeros, Integer32DivideSigned, Integer32DivideUnsigned, Integer32Equals, Integer32EqualsZero, Integer32Extend16Signed, Integer32Extend8Signed, Integer32GreaterThanOrEqualsSigned, Integer32GreaterThanOrEqualsUnsigned, Integer32GreaterThanSigned, Integer32GreaterThanUnsigned, Integer32LessThanOrEqualsSigned, Integer32LessThanOrEqualsUnsigned, Integer32LessThanSigned, Integer32LessThanUnsigned, Integer32Load, Integer32Load16Signed, Integer32Load16Unsigned, Integer32Load8Signed, Integer32Load8Unsigned, Integer32Multiply, Integer32NotEqual, Integer32Or, Integer32PopCountNonZeros, Integer32ReinterpretFloat32, Integer32RemainderSigned, Integer32RemainderUnsigned, Integer32RotateLeft, Integer32RotateRight, Integer32ShiftLeft, Integer32ShiftRightSigned, Integer32ShiftRightUnsigned, Integer32Store, Integer32Store16, Integer32Store8, Integer32Subtract, Integer32TruncateFloat32Signed, Integer32TruncateFloat32Unsigned, Integer32TruncateFloat64Signed, Integer32TruncateFloat64Unsigned, Integer32TruncateSaturateFloat32Signed, Integer32TruncateSaturateFloat32Unsigned, Integer32TruncateSaturateFloat64Signed, Integer32TruncateSaturateFloat64Unsigned, Integer32WrapInteger64, Integer32Xor, Integer64, Integer64Add, Integer64And, Integer64Constant, Integer64CountLeadingZeros, Integer64CountTrailingZeros, Integer64DivideSigned, Integer64DivideUnsigned, Integer64Equals, Integer64EqualsZero, Integer64Extend16Signed, Integer64Extend32Signed, Integer64Extend8Signed, Integer64ExtendInteger32Signed, Integer64ExtendInteger32Unsigned, Integer64GreaterThanOrEqualsSigned, Integer64GreaterThanOrEqualsUnsigned, Integer64GreaterThanSigned, Integer64GreaterThanUnsigned, Integer64LessThanOrEqualsSigned, Integer64LessThanOrEqualsUnsigned, Integer64LessThanSigned, Integer64LessThanUnsigned, Integer64Load, Integer64Load16Signed, Integer64Load16Unsigned, Integer64Load32Signed, Integer64Load32Unsigned, Integer64Load8Signed, Integer64Load8Unsigned, Integer64Multiply, Integer64NotEqual, Integer64Or, Integer64PopCountNonZeros, Integer64ReinterpretFloat64, Integer64RemainderSigned, Integer64RemainderUnsigned, Integer64RotateLeft, Integer64RotateRight, Integer64ShiftLeft, Integer64ShiftRightSigned, Integer64ShiftRightUnsigned, Integer64Store, Integer64Store16, Integer64Store32, Integer64Store8, Integer64Subtract, Integer64TruncateFloat32Signed, Integer64TruncateFloat32Unsigned, Integer64TruncateFloat64Signed, Integer64TruncateFloat64Unsigned, Integer64TruncateSaturateFloat32Signed, Integer64TruncateSaturateFloat32Unsigned, Integer64TruncateSaturateFloat64Signed, Integer64TruncateSaturateFloat64Unsigned, Integer64Xor, Item, Keyword, LineComment, Local, LocalGet, LocalSet, LocalTee, Loop, Memory, MemoryCopy, MemoryFill, MemoryGrow, MemoryInitiate, MemorySize, Module, Mutable, NoOperation, Number, Offset, OffsetEquals, OpenBracket, Parameter, ReferenceFunction, ReferenceIsNull, ReferenceNull, Result, Return, Select, Start, String, Table, TableCopy, TableFill, TableGet, TableGrow, TableInitiate, TableSet, TableSize, Type, Unreachable, Vector128 }

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
	Export: 18 as TokenTagEnum.Export,
	External: 19 as TokenTagEnum.External,
	ExternalReference: 20 as TokenTagEnum.ExternalReference,
	Float32: 21 as TokenTagEnum.Float32,
	Float32Absolute: 22 as TokenTagEnum.Float32Absolute,
	Float32Add: 23 as TokenTagEnum.Float32Add,
	Float32Ceiling: 24 as TokenTagEnum.Float32Ceiling,
	Float32Constant: 25 as TokenTagEnum.Float32Constant,
	Float32ConvertInteger32Signed: 26 as TokenTagEnum.Float32ConvertInteger32Signed,
	Float32ConvertInteger32Unsigned: 27 as TokenTagEnum.Float32ConvertInteger32Unsigned,
	Float32ConvertInteger64Signed: 28 as TokenTagEnum.Float32ConvertInteger64Signed,
	Float32ConvertInteger64Unsigned: 29 as TokenTagEnum.Float32ConvertInteger64Unsigned,
	Float32CopySign: 30 as TokenTagEnum.Float32CopySign,
	Float32DemoteFloat64: 31 as TokenTagEnum.Float32DemoteFloat64,
	Float32Divide: 32 as TokenTagEnum.Float32Divide,
	Float32Equals: 33 as TokenTagEnum.Float32Equals,
	Float32Floor: 34 as TokenTagEnum.Float32Floor,
	Float32GreaterThan: 35 as TokenTagEnum.Float32GreaterThan,
	Float32GreaterThanOrEquals: 36 as TokenTagEnum.Float32GreaterThanOrEquals,
	Float32LessThan: 37 as TokenTagEnum.Float32LessThan,
	Float32LessThanOrEquals: 38 as TokenTagEnum.Float32LessThanOrEquals,
	Float32Load: 39 as TokenTagEnum.Float32Load,
	Float32Maximum: 40 as TokenTagEnum.Float32Maximum,
	Float32Minimum: 41 as TokenTagEnum.Float32Minimum,
	Float32Multiply: 42 as TokenTagEnum.Float32Multiply,
	Float32Nearest: 43 as TokenTagEnum.Float32Nearest,
	Float32Negate: 44 as TokenTagEnum.Float32Negate,
	Float32NotEquals: 45 as TokenTagEnum.Float32NotEquals,
	Float32ReinterpretInteger32: 46 as TokenTagEnum.Float32ReinterpretInteger32,
	Float32SquareRoot: 47 as TokenTagEnum.Float32SquareRoot,
	Float32Store: 48 as TokenTagEnum.Float32Store,
	Float32Subtract: 49 as TokenTagEnum.Float32Subtract,
	Float32Truncate: 50 as TokenTagEnum.Float32Truncate,
	Float64: 51 as TokenTagEnum.Float64,
	Float64Absolute: 52 as TokenTagEnum.Float64Absolute,
	Float64Add: 53 as TokenTagEnum.Float64Add,
	Float64Ceiling: 54 as TokenTagEnum.Float64Ceiling,
	Float64Constant: 55 as TokenTagEnum.Float64Constant,
	Float64ConvertInteger32Signed: 56 as TokenTagEnum.Float64ConvertInteger32Signed,
	Float64ConvertInteger32Unsigned: 57 as TokenTagEnum.Float64ConvertInteger32Unsigned,
	Float64ConvertInteger64Signed: 58 as TokenTagEnum.Float64ConvertInteger64Signed,
	Float64ConvertInteger64Unsigned: 59 as TokenTagEnum.Float64ConvertInteger64Unsigned,
	Float64CopySign: 60 as TokenTagEnum.Float64CopySign,
	Float64Divide: 61 as TokenTagEnum.Float64Divide,
	Float64Equals: 62 as TokenTagEnum.Float64Equals,
	Float64Floor: 63 as TokenTagEnum.Float64Floor,
	Float64GreaterThan: 64 as TokenTagEnum.Float64GreaterThan,
	Float64GreaterThanOrEquals: 65 as TokenTagEnum.Float64GreaterThanOrEquals,
	Float64LessThan: 66 as TokenTagEnum.Float64LessThan,
	Float64LessThanOrEquals: 67 as TokenTagEnum.Float64LessThanOrEquals,
	Float64Load: 68 as TokenTagEnum.Float64Load,
	Float64Maximum: 69 as TokenTagEnum.Float64Maximum,
	Float64Minimum: 70 as TokenTagEnum.Float64Minimum,
	Float64Multiply: 71 as TokenTagEnum.Float64Multiply,
	Float64Nearest: 72 as TokenTagEnum.Float64Nearest,
	Float64Negate: 73 as TokenTagEnum.Float64Negate,
	Float64NotEquals: 74 as TokenTagEnum.Float64NotEquals,
	Float64PromoteFloat32: 75 as TokenTagEnum.Float64PromoteFloat32,
	Float64ReinterpretInteger64: 76 as TokenTagEnum.Float64ReinterpretInteger64,
	Float64SquareRoot: 77 as TokenTagEnum.Float64SquareRoot,
	Float64Store: 78 as TokenTagEnum.Float64Store,
	Float64Subtract: 79 as TokenTagEnum.Float64Subtract,
	Float64Truncate: 80 as TokenTagEnum.Float64Truncate,
	Function: 81 as TokenTagEnum.Function,
	FunctionReference: 82 as TokenTagEnum.FunctionReference,
	Global: 83 as TokenTagEnum.Global,
	GlobalGet: 84 as TokenTagEnum.GlobalGet,
	GlobalSet: 85 as TokenTagEnum.GlobalSet,
	Identifier: 86 as TokenTagEnum.Identifier,
	If: 87 as TokenTagEnum.If,
	Import: 88 as TokenTagEnum.Import,
	Integer32: 89 as TokenTagEnum.Integer32,
	Integer32Add: 90 as TokenTagEnum.Integer32Add,
	Integer32And: 91 as TokenTagEnum.Integer32And,
	Integer32Constant: 92 as TokenTagEnum.Integer32Constant,
	Integer32CountLeadingZeros: 93 as TokenTagEnum.Integer32CountLeadingZeros,
	Integer32CountTrailingZeros: 94 as TokenTagEnum.Integer32CountTrailingZeros,
	Integer32DivideSigned: 95 as TokenTagEnum.Integer32DivideSigned,
	Integer32DivideUnsigned: 96 as TokenTagEnum.Integer32DivideUnsigned,
	Integer32Equals: 97 as TokenTagEnum.Integer32Equals,
	Integer32EqualsZero: 98 as TokenTagEnum.Integer32EqualsZero,
	Integer32Extend16Signed: 99 as TokenTagEnum.Integer32Extend16Signed,
	Integer32Extend8Signed: 100 as TokenTagEnum.Integer32Extend8Signed,
	Integer32GreaterThanOrEqualsSigned: 101 as TokenTagEnum.Integer32GreaterThanOrEqualsSigned,
	Integer32GreaterThanOrEqualsUnsigned: 102 as TokenTagEnum.Integer32GreaterThanOrEqualsUnsigned,
	Integer32GreaterThanSigned: 103 as TokenTagEnum.Integer32GreaterThanSigned,
	Integer32GreaterThanUnsigned: 104 as TokenTagEnum.Integer32GreaterThanUnsigned,
	Integer32LessThanOrEqualsSigned: 105 as TokenTagEnum.Integer32LessThanOrEqualsSigned,
	Integer32LessThanOrEqualsUnsigned: 106 as TokenTagEnum.Integer32LessThanOrEqualsUnsigned,
	Integer32LessThanSigned: 107 as TokenTagEnum.Integer32LessThanSigned,
	Integer32LessThanUnsigned: 108 as TokenTagEnum.Integer32LessThanUnsigned,
	Integer32Load: 109 as TokenTagEnum.Integer32Load,
	Integer32Load16Signed: 110 as TokenTagEnum.Integer32Load16Signed,
	Integer32Load16Unsigned: 111 as TokenTagEnum.Integer32Load16Unsigned,
	Integer32Load8Signed: 112 as TokenTagEnum.Integer32Load8Signed,
	Integer32Load8Unsigned: 113 as TokenTagEnum.Integer32Load8Unsigned,
	Integer32Multiply: 114 as TokenTagEnum.Integer32Multiply,
	Integer32NotEqual: 115 as TokenTagEnum.Integer32NotEqual,
	Integer32Or: 116 as TokenTagEnum.Integer32Or,
	Integer32PopCountNonZeros: 117 as TokenTagEnum.Integer32PopCountNonZeros,
	Integer32ReinterpretFloat32: 118 as TokenTagEnum.Integer32ReinterpretFloat32,
	Integer32RemainderSigned: 119 as TokenTagEnum.Integer32RemainderSigned,
	Integer32RemainderUnsigned: 120 as TokenTagEnum.Integer32RemainderUnsigned,
	Integer32RotateLeft: 121 as TokenTagEnum.Integer32RotateLeft,
	Integer32RotateRight: 122 as TokenTagEnum.Integer32RotateRight,
	Integer32ShiftLeft: 123 as TokenTagEnum.Integer32ShiftLeft,
	Integer32ShiftRightSigned: 124 as TokenTagEnum.Integer32ShiftRightSigned,
	Integer32ShiftRightUnsigned: 125 as TokenTagEnum.Integer32ShiftRightUnsigned,
	Integer32Store: 126 as TokenTagEnum.Integer32Store,
	Integer32Store16: 127 as TokenTagEnum.Integer32Store16,
	Integer32Store8: 128 as TokenTagEnum.Integer32Store8,
	Integer32Subtract: 129 as TokenTagEnum.Integer32Subtract,
	Integer32TruncateFloat32Signed: 130 as TokenTagEnum.Integer32TruncateFloat32Signed,
	Integer32TruncateFloat32Unsigned: 131 as TokenTagEnum.Integer32TruncateFloat32Unsigned,
	Integer32TruncateFloat64Signed: 132 as TokenTagEnum.Integer32TruncateFloat64Signed,
	Integer32TruncateFloat64Unsigned: 133 as TokenTagEnum.Integer32TruncateFloat64Unsigned,
	Integer32TruncateSaturateFloat32Signed: 134 as TokenTagEnum.Integer32TruncateSaturateFloat32Signed,
	Integer32TruncateSaturateFloat32Unsigned: 135 as TokenTagEnum.Integer32TruncateSaturateFloat32Unsigned,
	Integer32TruncateSaturateFloat64Signed: 136 as TokenTagEnum.Integer32TruncateSaturateFloat64Signed,
	Integer32TruncateSaturateFloat64Unsigned: 137 as TokenTagEnum.Integer32TruncateSaturateFloat64Unsigned,
	Integer32WrapInteger64: 138 as TokenTagEnum.Integer32WrapInteger64,
	Integer32Xor: 139 as TokenTagEnum.Integer32Xor,
	Integer64: 140 as TokenTagEnum.Integer64,
	Integer64Add: 141 as TokenTagEnum.Integer64Add,
	Integer64And: 142 as TokenTagEnum.Integer64And,
	Integer64Constant: 143 as TokenTagEnum.Integer64Constant,
	Integer64CountLeadingZeros: 144 as TokenTagEnum.Integer64CountLeadingZeros,
	Integer64CountTrailingZeros: 145 as TokenTagEnum.Integer64CountTrailingZeros,
	Integer64DivideSigned: 146 as TokenTagEnum.Integer64DivideSigned,
	Integer64DivideUnsigned: 147 as TokenTagEnum.Integer64DivideUnsigned,
	Integer64Equals: 148 as TokenTagEnum.Integer64Equals,
	Integer64EqualsZero: 149 as TokenTagEnum.Integer64EqualsZero,
	Integer64Extend16Signed: 150 as TokenTagEnum.Integer64Extend16Signed,
	Integer64Extend32Signed: 151 as TokenTagEnum.Integer64Extend32Signed,
	Integer64Extend8Signed: 152 as TokenTagEnum.Integer64Extend8Signed,
	Integer64ExtendInteger32Signed: 153 as TokenTagEnum.Integer64ExtendInteger32Signed,
	Integer64ExtendInteger32Unsigned: 154 as TokenTagEnum.Integer64ExtendInteger32Unsigned,
	Integer64GreaterThanOrEqualsSigned: 155 as TokenTagEnum.Integer64GreaterThanOrEqualsSigned,
	Integer64GreaterThanOrEqualsUnsigned: 156 as TokenTagEnum.Integer64GreaterThanOrEqualsUnsigned,
	Integer64GreaterThanSigned: 157 as TokenTagEnum.Integer64GreaterThanSigned,
	Integer64GreaterThanUnsigned: 158 as TokenTagEnum.Integer64GreaterThanUnsigned,
	Integer64LessThanOrEqualsSigned: 159 as TokenTagEnum.Integer64LessThanOrEqualsSigned,
	Integer64LessThanOrEqualsUnsigned: 160 as TokenTagEnum.Integer64LessThanOrEqualsUnsigned,
	Integer64LessThanSigned: 161 as TokenTagEnum.Integer64LessThanSigned,
	Integer64LessThanUnsigned: 162 as TokenTagEnum.Integer64LessThanUnsigned,
	Integer64Load: 163 as TokenTagEnum.Integer64Load,
	Integer64Load16Signed: 164 as TokenTagEnum.Integer64Load16Signed,
	Integer64Load16Unsigned: 165 as TokenTagEnum.Integer64Load16Unsigned,
	Integer64Load32Signed: 166 as TokenTagEnum.Integer64Load32Signed,
	Integer64Load32Unsigned: 167 as TokenTagEnum.Integer64Load32Unsigned,
	Integer64Load8Signed: 168 as TokenTagEnum.Integer64Load8Signed,
	Integer64Load8Unsigned: 169 as TokenTagEnum.Integer64Load8Unsigned,
	Integer64Multiply: 170 as TokenTagEnum.Integer64Multiply,
	Integer64NotEqual: 171 as TokenTagEnum.Integer64NotEqual,
	Integer64Or: 172 as TokenTagEnum.Integer64Or,
	Integer64PopCountNonZeros: 173 as TokenTagEnum.Integer64PopCountNonZeros,
	Integer64ReinterpretFloat64: 174 as TokenTagEnum.Integer64ReinterpretFloat64,
	Integer64RemainderSigned: 175 as TokenTagEnum.Integer64RemainderSigned,
	Integer64RemainderUnsigned: 176 as TokenTagEnum.Integer64RemainderUnsigned,
	Integer64RotateLeft: 177 as TokenTagEnum.Integer64RotateLeft,
	Integer64RotateRight: 178 as TokenTagEnum.Integer64RotateRight,
	Integer64ShiftLeft: 179 as TokenTagEnum.Integer64ShiftLeft,
	Integer64ShiftRightSigned: 180 as TokenTagEnum.Integer64ShiftRightSigned,
	Integer64ShiftRightUnsigned: 181 as TokenTagEnum.Integer64ShiftRightUnsigned,
	Integer64Store: 182 as TokenTagEnum.Integer64Store,
	Integer64Store16: 183 as TokenTagEnum.Integer64Store16,
	Integer64Store32: 184 as TokenTagEnum.Integer64Store32,
	Integer64Store8: 185 as TokenTagEnum.Integer64Store8,
	Integer64Subtract: 186 as TokenTagEnum.Integer64Subtract,
	Integer64TruncateFloat32Signed: 187 as TokenTagEnum.Integer64TruncateFloat32Signed,
	Integer64TruncateFloat32Unsigned: 188 as TokenTagEnum.Integer64TruncateFloat32Unsigned,
	Integer64TruncateFloat64Signed: 189 as TokenTagEnum.Integer64TruncateFloat64Signed,
	Integer64TruncateFloat64Unsigned: 190 as TokenTagEnum.Integer64TruncateFloat64Unsigned,
	Integer64TruncateSaturateFloat32Signed: 191 as TokenTagEnum.Integer64TruncateSaturateFloat32Signed,
	Integer64TruncateSaturateFloat32Unsigned: 192 as TokenTagEnum.Integer64TruncateSaturateFloat32Unsigned,
	Integer64TruncateSaturateFloat64Signed: 193 as TokenTagEnum.Integer64TruncateSaturateFloat64Signed,
	Integer64TruncateSaturateFloat64Unsigned: 194 as TokenTagEnum.Integer64TruncateSaturateFloat64Unsigned,
	Integer64Xor: 195 as TokenTagEnum.Integer64Xor,
	Item: 196 as TokenTagEnum.Item,
	Keyword: 197 as TokenTagEnum.Keyword,
	LineComment: 198 as TokenTagEnum.LineComment,
	Local: 199 as TokenTagEnum.Local,
	LocalGet: 200 as TokenTagEnum.LocalGet,
	LocalSet: 201 as TokenTagEnum.LocalSet,
	LocalTee: 202 as TokenTagEnum.LocalTee,
	Loop: 203 as TokenTagEnum.Loop,
	Memory: 204 as TokenTagEnum.Memory,
	MemoryCopy: 205 as TokenTagEnum.MemoryCopy,
	MemoryFill: 206 as TokenTagEnum.MemoryFill,
	MemoryGrow: 207 as TokenTagEnum.MemoryGrow,
	MemoryInitiate: 208 as TokenTagEnum.MemoryInitiate,
	MemorySize: 209 as TokenTagEnum.MemorySize,
	Module: 210 as TokenTagEnum.Module,
	Mutable: 211 as TokenTagEnum.Mutable,
	NoOperation: 212 as TokenTagEnum.NoOperation,
	Number: 213 as TokenTagEnum.Number,
	Offset: 214 as TokenTagEnum.Offset,
	OffsetEquals: 215 as TokenTagEnum.OffsetEquals,
	OpenBracket: 216 as TokenTagEnum.OpenBracket,
	Parameter: 217 as TokenTagEnum.Parameter,
	ReferenceFunction: 218 as TokenTagEnum.ReferenceFunction,
	ReferenceIsNull: 219 as TokenTagEnum.ReferenceIsNull,
	ReferenceNull: 220 as TokenTagEnum.ReferenceNull,
	Result: 221 as TokenTagEnum.Result,
	Return: 222 as TokenTagEnum.Return,
	Select: 223 as TokenTagEnum.Select,
	Start: 224 as TokenTagEnum.Start,
	String: 225 as TokenTagEnum.String,
	Table: 226 as TokenTagEnum.Table,
	TableCopy: 227 as TokenTagEnum.TableCopy,
	TableFill: 228 as TokenTagEnum.TableFill,
	TableGet: 229 as TokenTagEnum.TableGet,
	TableGrow: 230 as TokenTagEnum.TableGrow,
	TableInitiate: 231 as TokenTagEnum.TableInitiate,
	TableSet: 232 as TokenTagEnum.TableSet,
	TableSize: 233 as TokenTagEnum.TableSize,
	Type: 234 as TokenTagEnum.Type,
	Unreachable: 235 as TokenTagEnum.Unreachable,
	Vector128: 236 as TokenTagEnum.Vector128,
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
