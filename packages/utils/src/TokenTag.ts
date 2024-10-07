declare enum TokenTagEnum { AlignEquals, Block, BlockComment, Branch, BranchIf, BranchTable, Call, CallIndirect, CloseBracket, Data, DataDrop, Declare, Drop, Element, ElementDrop, Else, End, Error, Export, External, ExternalReference, Float32, Float32Absolute, Float32Add, Float32Ceiling, Float32Constant, Float32ConvertInteger32Signed, Float32ConvertInteger32Unsigned, Float32ConvertInteger64Signed, Float32ConvertInteger64Unsigned, Float32CopySign, Float32DemoteFloat64, Float32Divide, Float32Equals, Float32Floor, Float32GreaterThan, Float32GreaterThanOrEquals, Float32LessThan, Float32LessThanOrEquals, Float32Load, Float32Maximum, Float32Minimum, Float32Multiply, Float32Nearest, Float32Negate, Float32NotEquals, Float32ReinterpretInteger32, Float32SquareRoot, Float32Store, Float32Subtract, Float32Truncate, Float32x4, Float64, Float64Absolute, Float64Add, Float64Ceiling, Float64Constant, Float64ConvertInteger32Signed, Float64ConvertInteger32Unsigned, Float64ConvertInteger64Signed, Float64ConvertInteger64Unsigned, Float64CopySign, Float64Divide, Float64Equals, Float64Floor, Float64GreaterThan, Float64GreaterThanOrEquals, Float64LessThan, Float64LessThanOrEquals, Float64Load, Float64Maximum, Float64Minimum, Float64Multiply, Float64Nearest, Float64Negate, Float64NotEquals, Float64PromoteFloat32, Float64ReinterpretInteger64, Float64SquareRoot, Float64Store, Float64Subtract, Float64Truncate, Float64x2, Function, FunctionReference, Global, GlobalGet, GlobalSet, Identifier, If, Import, Integer16x8, Integer16x8Splat, Integer32, Integer32Add, Integer32And, Integer32Constant, Integer32CountLeadingZeros, Integer32CountTrailingZeros, Integer32DivideSigned, Integer32DivideUnsigned, Integer32Equals, Integer32EqualsZero, Integer32Extend16Signed, Integer32Extend8Signed, Integer32GreaterThanOrEqualsSigned, Integer32GreaterThanOrEqualsUnsigned, Integer32GreaterThanSigned, Integer32GreaterThanUnsigned, Integer32LessThanOrEqualsSigned, Integer32LessThanOrEqualsUnsigned, Integer32LessThanSigned, Integer32LessThanUnsigned, Integer32Load, Integer32Load16Signed, Integer32Load16Unsigned, Integer32Load8Signed, Integer32Load8Unsigned, Integer32Multiply, Integer32NotEqual, Integer32Or, Integer32PopCountNonZeros, Integer32ReinterpretFloat32, Integer32RemainderSigned, Integer32RemainderUnsigned, Integer32RotateLeft, Integer32RotateRight, Integer32ShiftLeft, Integer32ShiftRightSigned, Integer32ShiftRightUnsigned, Integer32Store, Integer32Store16, Integer32Store8, Integer32Subtract, Integer32TruncateFloat32Signed, Integer32TruncateFloat32Unsigned, Integer32TruncateFloat64Signed, Integer32TruncateFloat64Unsigned, Integer32TruncateSaturateFloat32Signed, Integer32TruncateSaturateFloat32Unsigned, Integer32TruncateSaturateFloat64Signed, Integer32TruncateSaturateFloat64Unsigned, Integer32WrapInteger64, Integer32Xor, Integer32x4, Integer32x4Splat, Integer64, Integer64Add, Integer64And, Integer64Constant, Integer64CountLeadingZeros, Integer64CountTrailingZeros, Integer64DivideSigned, Integer64DivideUnsigned, Integer64Equals, Integer64EqualsZero, Integer64Extend16Signed, Integer64Extend32Signed, Integer64Extend8Signed, Integer64ExtendInteger32Signed, Integer64ExtendInteger32Unsigned, Integer64GreaterThanOrEqualsSigned, Integer64GreaterThanOrEqualsUnsigned, Integer64GreaterThanSigned, Integer64GreaterThanUnsigned, Integer64LessThanOrEqualsSigned, Integer64LessThanOrEqualsUnsigned, Integer64LessThanSigned, Integer64LessThanUnsigned, Integer64Load, Integer64Load16Signed, Integer64Load16Unsigned, Integer64Load32Signed, Integer64Load32Unsigned, Integer64Load8Signed, Integer64Load8Unsigned, Integer64Multiply, Integer64NotEqual, Integer64Or, Integer64PopCountNonZeros, Integer64ReinterpretFloat64, Integer64RemainderSigned, Integer64RemainderUnsigned, Integer64RotateLeft, Integer64RotateRight, Integer64ShiftLeft, Integer64ShiftRightSigned, Integer64ShiftRightUnsigned, Integer64Store, Integer64Store16, Integer64Store32, Integer64Store8, Integer64Subtract, Integer64TruncateFloat32Signed, Integer64TruncateFloat32Unsigned, Integer64TruncateFloat64Signed, Integer64TruncateFloat64Unsigned, Integer64TruncateSaturateFloat32Signed, Integer64TruncateSaturateFloat32Unsigned, Integer64TruncateSaturateFloat64Signed, Integer64TruncateSaturateFloat64Unsigned, Integer64Xor, Integer64x2, Integer64x2Splat, Integer8x16, Integer8x16Shuffle, Integer8x16Splat, Integer8x16Swizzle, Item, Keyword, LineComment, Local, LocalGet, LocalSet, LocalTee, Loop, Memory, MemoryCopy, MemoryFill, MemoryGrow, MemoryInitiate, MemorySize, Module, Mutable, NoOperation, Number, Offset, OffsetEquals, OpenBracket, Parameter, ReferenceFunction, ReferenceIsNull, ReferenceNull, Result, Return, Select, Start, StringApostropheEscape, StringBackslashEscape, StringEndQuote, StringHexEscape, StringInvalidCharacterError, StringNewlineEscape, StringNonEscape, StringQuoteEscape, StringReturnEscape, StringStartQuote, StringTabEscape, StringUnicodeEscape, Table, TableCopy, TableFill, TableGet, TableGrow, TableInitiate, TableSet, TableSize, Type, Unreachable, UnterminatedStringError, Vector128, Vector128Const, Vector128Load, Vector128Load16Lane, Vector128Load16Splat, Vector128Load16x4Signed, Vector128Load16x4Unsigned, Vector128Load32Lane, Vector128Load32Splat, Vector128Load32Zero, Vector128Load32x2Signed, Vector128Load32x2Unsigned, Vector128Load64Lane, Vector128Load64Splat, Vector128Load64Zero, Vector128Load8Lane, Vector128Load8Splat, Vector128Load8x8Signed, Vector128Load8x8Unsigned, Vector128Store, Vector128Store16Lane, Vector128Store32Lane, Vector128Store64Lane, Vector128Store8Lane }

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
	Float32x4: 52 as TokenTagEnum.Float32x4,
	Float64: 53 as TokenTagEnum.Float64,
	Float64Absolute: 54 as TokenTagEnum.Float64Absolute,
	Float64Add: 55 as TokenTagEnum.Float64Add,
	Float64Ceiling: 56 as TokenTagEnum.Float64Ceiling,
	Float64Constant: 57 as TokenTagEnum.Float64Constant,
	Float64ConvertInteger32Signed: 58 as TokenTagEnum.Float64ConvertInteger32Signed,
	Float64ConvertInteger32Unsigned: 59 as TokenTagEnum.Float64ConvertInteger32Unsigned,
	Float64ConvertInteger64Signed: 60 as TokenTagEnum.Float64ConvertInteger64Signed,
	Float64ConvertInteger64Unsigned: 61 as TokenTagEnum.Float64ConvertInteger64Unsigned,
	Float64CopySign: 62 as TokenTagEnum.Float64CopySign,
	Float64Divide: 63 as TokenTagEnum.Float64Divide,
	Float64Equals: 64 as TokenTagEnum.Float64Equals,
	Float64Floor: 65 as TokenTagEnum.Float64Floor,
	Float64GreaterThan: 66 as TokenTagEnum.Float64GreaterThan,
	Float64GreaterThanOrEquals: 67 as TokenTagEnum.Float64GreaterThanOrEquals,
	Float64LessThan: 68 as TokenTagEnum.Float64LessThan,
	Float64LessThanOrEquals: 69 as TokenTagEnum.Float64LessThanOrEquals,
	Float64Load: 70 as TokenTagEnum.Float64Load,
	Float64Maximum: 71 as TokenTagEnum.Float64Maximum,
	Float64Minimum: 72 as TokenTagEnum.Float64Minimum,
	Float64Multiply: 73 as TokenTagEnum.Float64Multiply,
	Float64Nearest: 74 as TokenTagEnum.Float64Nearest,
	Float64Negate: 75 as TokenTagEnum.Float64Negate,
	Float64NotEquals: 76 as TokenTagEnum.Float64NotEquals,
	Float64PromoteFloat32: 77 as TokenTagEnum.Float64PromoteFloat32,
	Float64ReinterpretInteger64: 78 as TokenTagEnum.Float64ReinterpretInteger64,
	Float64SquareRoot: 79 as TokenTagEnum.Float64SquareRoot,
	Float64Store: 80 as TokenTagEnum.Float64Store,
	Float64Subtract: 81 as TokenTagEnum.Float64Subtract,
	Float64Truncate: 82 as TokenTagEnum.Float64Truncate,
	Float64x2: 83 as TokenTagEnum.Float64x2,
	Function: 84 as TokenTagEnum.Function,
	FunctionReference: 85 as TokenTagEnum.FunctionReference,
	Global: 86 as TokenTagEnum.Global,
	GlobalGet: 87 as TokenTagEnum.GlobalGet,
	GlobalSet: 88 as TokenTagEnum.GlobalSet,
	Identifier: 89 as TokenTagEnum.Identifier,
	If: 90 as TokenTagEnum.If,
	Import: 91 as TokenTagEnum.Import,
	Integer16x8: 92 as TokenTagEnum.Integer16x8,
	Integer16x8Splat: 93 as TokenTagEnum.Integer16x8Splat,
	Integer32: 94 as TokenTagEnum.Integer32,
	Integer32Add: 95 as TokenTagEnum.Integer32Add,
	Integer32And: 96 as TokenTagEnum.Integer32And,
	Integer32Constant: 97 as TokenTagEnum.Integer32Constant,
	Integer32CountLeadingZeros: 98 as TokenTagEnum.Integer32CountLeadingZeros,
	Integer32CountTrailingZeros: 99 as TokenTagEnum.Integer32CountTrailingZeros,
	Integer32DivideSigned: 100 as TokenTagEnum.Integer32DivideSigned,
	Integer32DivideUnsigned: 101 as TokenTagEnum.Integer32DivideUnsigned,
	Integer32Equals: 102 as TokenTagEnum.Integer32Equals,
	Integer32EqualsZero: 103 as TokenTagEnum.Integer32EqualsZero,
	Integer32Extend16Signed: 104 as TokenTagEnum.Integer32Extend16Signed,
	Integer32Extend8Signed: 105 as TokenTagEnum.Integer32Extend8Signed,
	Integer32GreaterThanOrEqualsSigned: 106 as TokenTagEnum.Integer32GreaterThanOrEqualsSigned,
	Integer32GreaterThanOrEqualsUnsigned: 107 as TokenTagEnum.Integer32GreaterThanOrEqualsUnsigned,
	Integer32GreaterThanSigned: 108 as TokenTagEnum.Integer32GreaterThanSigned,
	Integer32GreaterThanUnsigned: 109 as TokenTagEnum.Integer32GreaterThanUnsigned,
	Integer32LessThanOrEqualsSigned: 110 as TokenTagEnum.Integer32LessThanOrEqualsSigned,
	Integer32LessThanOrEqualsUnsigned: 111 as TokenTagEnum.Integer32LessThanOrEqualsUnsigned,
	Integer32LessThanSigned: 112 as TokenTagEnum.Integer32LessThanSigned,
	Integer32LessThanUnsigned: 113 as TokenTagEnum.Integer32LessThanUnsigned,
	Integer32Load: 114 as TokenTagEnum.Integer32Load,
	Integer32Load16Signed: 115 as TokenTagEnum.Integer32Load16Signed,
	Integer32Load16Unsigned: 116 as TokenTagEnum.Integer32Load16Unsigned,
	Integer32Load8Signed: 117 as TokenTagEnum.Integer32Load8Signed,
	Integer32Load8Unsigned: 118 as TokenTagEnum.Integer32Load8Unsigned,
	Integer32Multiply: 119 as TokenTagEnum.Integer32Multiply,
	Integer32NotEqual: 120 as TokenTagEnum.Integer32NotEqual,
	Integer32Or: 121 as TokenTagEnum.Integer32Or,
	Integer32PopCountNonZeros: 122 as TokenTagEnum.Integer32PopCountNonZeros,
	Integer32ReinterpretFloat32: 123 as TokenTagEnum.Integer32ReinterpretFloat32,
	Integer32RemainderSigned: 124 as TokenTagEnum.Integer32RemainderSigned,
	Integer32RemainderUnsigned: 125 as TokenTagEnum.Integer32RemainderUnsigned,
	Integer32RotateLeft: 126 as TokenTagEnum.Integer32RotateLeft,
	Integer32RotateRight: 127 as TokenTagEnum.Integer32RotateRight,
	Integer32ShiftLeft: 128 as TokenTagEnum.Integer32ShiftLeft,
	Integer32ShiftRightSigned: 129 as TokenTagEnum.Integer32ShiftRightSigned,
	Integer32ShiftRightUnsigned: 130 as TokenTagEnum.Integer32ShiftRightUnsigned,
	Integer32Store: 131 as TokenTagEnum.Integer32Store,
	Integer32Store16: 132 as TokenTagEnum.Integer32Store16,
	Integer32Store8: 133 as TokenTagEnum.Integer32Store8,
	Integer32Subtract: 134 as TokenTagEnum.Integer32Subtract,
	Integer32TruncateFloat32Signed: 135 as TokenTagEnum.Integer32TruncateFloat32Signed,
	Integer32TruncateFloat32Unsigned: 136 as TokenTagEnum.Integer32TruncateFloat32Unsigned,
	Integer32TruncateFloat64Signed: 137 as TokenTagEnum.Integer32TruncateFloat64Signed,
	Integer32TruncateFloat64Unsigned: 138 as TokenTagEnum.Integer32TruncateFloat64Unsigned,
	Integer32TruncateSaturateFloat32Signed: 139 as TokenTagEnum.Integer32TruncateSaturateFloat32Signed,
	Integer32TruncateSaturateFloat32Unsigned: 140 as TokenTagEnum.Integer32TruncateSaturateFloat32Unsigned,
	Integer32TruncateSaturateFloat64Signed: 141 as TokenTagEnum.Integer32TruncateSaturateFloat64Signed,
	Integer32TruncateSaturateFloat64Unsigned: 142 as TokenTagEnum.Integer32TruncateSaturateFloat64Unsigned,
	Integer32WrapInteger64: 143 as TokenTagEnum.Integer32WrapInteger64,
	Integer32Xor: 144 as TokenTagEnum.Integer32Xor,
	Integer32x4: 145 as TokenTagEnum.Integer32x4,
	Integer32x4Splat: 146 as TokenTagEnum.Integer32x4Splat,
	Integer64: 147 as TokenTagEnum.Integer64,
	Integer64Add: 148 as TokenTagEnum.Integer64Add,
	Integer64And: 149 as TokenTagEnum.Integer64And,
	Integer64Constant: 150 as TokenTagEnum.Integer64Constant,
	Integer64CountLeadingZeros: 151 as TokenTagEnum.Integer64CountLeadingZeros,
	Integer64CountTrailingZeros: 152 as TokenTagEnum.Integer64CountTrailingZeros,
	Integer64DivideSigned: 153 as TokenTagEnum.Integer64DivideSigned,
	Integer64DivideUnsigned: 154 as TokenTagEnum.Integer64DivideUnsigned,
	Integer64Equals: 155 as TokenTagEnum.Integer64Equals,
	Integer64EqualsZero: 156 as TokenTagEnum.Integer64EqualsZero,
	Integer64Extend16Signed: 157 as TokenTagEnum.Integer64Extend16Signed,
	Integer64Extend32Signed: 158 as TokenTagEnum.Integer64Extend32Signed,
	Integer64Extend8Signed: 159 as TokenTagEnum.Integer64Extend8Signed,
	Integer64ExtendInteger32Signed: 160 as TokenTagEnum.Integer64ExtendInteger32Signed,
	Integer64ExtendInteger32Unsigned: 161 as TokenTagEnum.Integer64ExtendInteger32Unsigned,
	Integer64GreaterThanOrEqualsSigned: 162 as TokenTagEnum.Integer64GreaterThanOrEqualsSigned,
	Integer64GreaterThanOrEqualsUnsigned: 163 as TokenTagEnum.Integer64GreaterThanOrEqualsUnsigned,
	Integer64GreaterThanSigned: 164 as TokenTagEnum.Integer64GreaterThanSigned,
	Integer64GreaterThanUnsigned: 165 as TokenTagEnum.Integer64GreaterThanUnsigned,
	Integer64LessThanOrEqualsSigned: 166 as TokenTagEnum.Integer64LessThanOrEqualsSigned,
	Integer64LessThanOrEqualsUnsigned: 167 as TokenTagEnum.Integer64LessThanOrEqualsUnsigned,
	Integer64LessThanSigned: 168 as TokenTagEnum.Integer64LessThanSigned,
	Integer64LessThanUnsigned: 169 as TokenTagEnum.Integer64LessThanUnsigned,
	Integer64Load: 170 as TokenTagEnum.Integer64Load,
	Integer64Load16Signed: 171 as TokenTagEnum.Integer64Load16Signed,
	Integer64Load16Unsigned: 172 as TokenTagEnum.Integer64Load16Unsigned,
	Integer64Load32Signed: 173 as TokenTagEnum.Integer64Load32Signed,
	Integer64Load32Unsigned: 174 as TokenTagEnum.Integer64Load32Unsigned,
	Integer64Load8Signed: 175 as TokenTagEnum.Integer64Load8Signed,
	Integer64Load8Unsigned: 176 as TokenTagEnum.Integer64Load8Unsigned,
	Integer64Multiply: 177 as TokenTagEnum.Integer64Multiply,
	Integer64NotEqual: 178 as TokenTagEnum.Integer64NotEqual,
	Integer64Or: 179 as TokenTagEnum.Integer64Or,
	Integer64PopCountNonZeros: 180 as TokenTagEnum.Integer64PopCountNonZeros,
	Integer64ReinterpretFloat64: 181 as TokenTagEnum.Integer64ReinterpretFloat64,
	Integer64RemainderSigned: 182 as TokenTagEnum.Integer64RemainderSigned,
	Integer64RemainderUnsigned: 183 as TokenTagEnum.Integer64RemainderUnsigned,
	Integer64RotateLeft: 184 as TokenTagEnum.Integer64RotateLeft,
	Integer64RotateRight: 185 as TokenTagEnum.Integer64RotateRight,
	Integer64ShiftLeft: 186 as TokenTagEnum.Integer64ShiftLeft,
	Integer64ShiftRightSigned: 187 as TokenTagEnum.Integer64ShiftRightSigned,
	Integer64ShiftRightUnsigned: 188 as TokenTagEnum.Integer64ShiftRightUnsigned,
	Integer64Store: 189 as TokenTagEnum.Integer64Store,
	Integer64Store16: 190 as TokenTagEnum.Integer64Store16,
	Integer64Store32: 191 as TokenTagEnum.Integer64Store32,
	Integer64Store8: 192 as TokenTagEnum.Integer64Store8,
	Integer64Subtract: 193 as TokenTagEnum.Integer64Subtract,
	Integer64TruncateFloat32Signed: 194 as TokenTagEnum.Integer64TruncateFloat32Signed,
	Integer64TruncateFloat32Unsigned: 195 as TokenTagEnum.Integer64TruncateFloat32Unsigned,
	Integer64TruncateFloat64Signed: 196 as TokenTagEnum.Integer64TruncateFloat64Signed,
	Integer64TruncateFloat64Unsigned: 197 as TokenTagEnum.Integer64TruncateFloat64Unsigned,
	Integer64TruncateSaturateFloat32Signed: 198 as TokenTagEnum.Integer64TruncateSaturateFloat32Signed,
	Integer64TruncateSaturateFloat32Unsigned: 199 as TokenTagEnum.Integer64TruncateSaturateFloat32Unsigned,
	Integer64TruncateSaturateFloat64Signed: 200 as TokenTagEnum.Integer64TruncateSaturateFloat64Signed,
	Integer64TruncateSaturateFloat64Unsigned: 201 as TokenTagEnum.Integer64TruncateSaturateFloat64Unsigned,
	Integer64Xor: 202 as TokenTagEnum.Integer64Xor,
	Integer64x2: 203 as TokenTagEnum.Integer64x2,
	Integer64x2Splat: 204 as TokenTagEnum.Integer64x2Splat,
	Integer8x16: 205 as TokenTagEnum.Integer8x16,
	Integer8x16Shuffle: 206 as TokenTagEnum.Integer8x16Shuffle,
	Integer8x16Splat: 207 as TokenTagEnum.Integer8x16Splat,
	Integer8x16Swizzle: 208 as TokenTagEnum.Integer8x16Swizzle,
	Item: 209 as TokenTagEnum.Item,
	Keyword: 210 as TokenTagEnum.Keyword,
	LineComment: 211 as TokenTagEnum.LineComment,
	Local: 212 as TokenTagEnum.Local,
	LocalGet: 213 as TokenTagEnum.LocalGet,
	LocalSet: 214 as TokenTagEnum.LocalSet,
	LocalTee: 215 as TokenTagEnum.LocalTee,
	Loop: 216 as TokenTagEnum.Loop,
	Memory: 217 as TokenTagEnum.Memory,
	MemoryCopy: 218 as TokenTagEnum.MemoryCopy,
	MemoryFill: 219 as TokenTagEnum.MemoryFill,
	MemoryGrow: 220 as TokenTagEnum.MemoryGrow,
	MemoryInitiate: 221 as TokenTagEnum.MemoryInitiate,
	MemorySize: 222 as TokenTagEnum.MemorySize,
	Module: 223 as TokenTagEnum.Module,
	Mutable: 224 as TokenTagEnum.Mutable,
	NoOperation: 225 as TokenTagEnum.NoOperation,
	Number: 226 as TokenTagEnum.Number,
	Offset: 227 as TokenTagEnum.Offset,
	OffsetEquals: 228 as TokenTagEnum.OffsetEquals,
	OpenBracket: 229 as TokenTagEnum.OpenBracket,
	Parameter: 230 as TokenTagEnum.Parameter,
	ReferenceFunction: 231 as TokenTagEnum.ReferenceFunction,
	ReferenceIsNull: 232 as TokenTagEnum.ReferenceIsNull,
	ReferenceNull: 233 as TokenTagEnum.ReferenceNull,
	Result: 234 as TokenTagEnum.Result,
	Return: 235 as TokenTagEnum.Return,
	Select: 236 as TokenTagEnum.Select,
	Start: 237 as TokenTagEnum.Start,
	StringApostropheEscape: 238 as TokenTagEnum.StringApostropheEscape,
	StringBackslashEscape: 239 as TokenTagEnum.StringBackslashEscape,
	StringEndQuote: 240 as TokenTagEnum.StringEndQuote,
	StringHexEscape: 241 as TokenTagEnum.StringHexEscape,
	StringInvalidCharacterError: 242 as TokenTagEnum.StringInvalidCharacterError,
	StringNewlineEscape: 243 as TokenTagEnum.StringNewlineEscape,
	StringNonEscape: 244 as TokenTagEnum.StringNonEscape,
	StringQuoteEscape: 245 as TokenTagEnum.StringQuoteEscape,
	StringReturnEscape: 246 as TokenTagEnum.StringReturnEscape,
	StringStartQuote: 247 as TokenTagEnum.StringStartQuote,
	StringTabEscape: 248 as TokenTagEnum.StringTabEscape,
	StringUnicodeEscape: 249 as TokenTagEnum.StringUnicodeEscape,
	Table: 250 as TokenTagEnum.Table,
	TableCopy: 251 as TokenTagEnum.TableCopy,
	TableFill: 252 as TokenTagEnum.TableFill,
	TableGet: 253 as TokenTagEnum.TableGet,
	TableGrow: 254 as TokenTagEnum.TableGrow,
	TableInitiate: 255 as TokenTagEnum.TableInitiate,
	TableSet: 256 as TokenTagEnum.TableSet,
	TableSize: 257 as TokenTagEnum.TableSize,
	Type: 258 as TokenTagEnum.Type,
	Unreachable: 259 as TokenTagEnum.Unreachable,
	UnterminatedStringError: 260 as TokenTagEnum.UnterminatedStringError,
	Vector128: 261 as TokenTagEnum.Vector128,
	Vector128Const: 262 as TokenTagEnum.Vector128Const,
	Vector128Load: 263 as TokenTagEnum.Vector128Load,
	Vector128Load16Lane: 264 as TokenTagEnum.Vector128Load16Lane,
	Vector128Load16Splat: 265 as TokenTagEnum.Vector128Load16Splat,
	Vector128Load16x4Signed: 266 as TokenTagEnum.Vector128Load16x4Signed,
	Vector128Load16x4Unsigned: 267 as TokenTagEnum.Vector128Load16x4Unsigned,
	Vector128Load32Lane: 268 as TokenTagEnum.Vector128Load32Lane,
	Vector128Load32Splat: 269 as TokenTagEnum.Vector128Load32Splat,
	Vector128Load32Zero: 270 as TokenTagEnum.Vector128Load32Zero,
	Vector128Load32x2Signed: 271 as TokenTagEnum.Vector128Load32x2Signed,
	Vector128Load32x2Unsigned: 272 as TokenTagEnum.Vector128Load32x2Unsigned,
	Vector128Load64Lane: 273 as TokenTagEnum.Vector128Load64Lane,
	Vector128Load64Splat: 274 as TokenTagEnum.Vector128Load64Splat,
	Vector128Load64Zero: 275 as TokenTagEnum.Vector128Load64Zero,
	Vector128Load8Lane: 276 as TokenTagEnum.Vector128Load8Lane,
	Vector128Load8Splat: 277 as TokenTagEnum.Vector128Load8Splat,
	Vector128Load8x8Signed: 278 as TokenTagEnum.Vector128Load8x8Signed,
	Vector128Load8x8Unsigned: 279 as TokenTagEnum.Vector128Load8x8Unsigned,
	Vector128Store: 280 as TokenTagEnum.Vector128Store,
	Vector128Store16Lane: 281 as TokenTagEnum.Vector128Store16Lane,
	Vector128Store32Lane: 282 as TokenTagEnum.Vector128Store32Lane,
	Vector128Store64Lane: 283 as TokenTagEnum.Vector128Store64Lane,
	Vector128Store8Lane: 284 as TokenTagEnum.Vector128Store8Lane,
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
	export type Float32x4 = typeof TokenTag.Float32x4
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
	export type Float64x2 = typeof TokenTag.Float64x2
	export type Function = typeof TokenTag.Function
	export type FunctionReference = typeof TokenTag.FunctionReference
	export type Global = typeof TokenTag.Global
	export type GlobalGet = typeof TokenTag.GlobalGet
	export type GlobalSet = typeof TokenTag.GlobalSet
	export type Identifier = typeof TokenTag.Identifier
	export type If = typeof TokenTag.If
	export type Import = typeof TokenTag.Import
	export type Integer16x8 = typeof TokenTag.Integer16x8
	export type Integer16x8Splat = typeof TokenTag.Integer16x8Splat
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
	export type Integer32x4 = typeof TokenTag.Integer32x4
	export type Integer32x4Splat = typeof TokenTag.Integer32x4Splat
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
	export type Integer64x2 = typeof TokenTag.Integer64x2
	export type Integer64x2Splat = typeof TokenTag.Integer64x2Splat
	export type Integer8x16 = typeof TokenTag.Integer8x16
	export type Integer8x16Shuffle = typeof TokenTag.Integer8x16Shuffle
	export type Integer8x16Splat = typeof TokenTag.Integer8x16Splat
	export type Integer8x16Swizzle = typeof TokenTag.Integer8x16Swizzle
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
	export type StringApostropheEscape = typeof TokenTag.StringApostropheEscape
	export type StringBackslashEscape = typeof TokenTag.StringBackslashEscape
	export type StringEndQuote = typeof TokenTag.StringEndQuote
	export type StringHexEscape = typeof TokenTag.StringHexEscape
	export type StringInvalidCharacterError = typeof TokenTag.StringInvalidCharacterError
	export type StringNewlineEscape = typeof TokenTag.StringNewlineEscape
	export type StringNonEscape = typeof TokenTag.StringNonEscape
	export type StringQuoteEscape = typeof TokenTag.StringQuoteEscape
	export type StringReturnEscape = typeof TokenTag.StringReturnEscape
	export type StringStartQuote = typeof TokenTag.StringStartQuote
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
	export type UnterminatedStringError = typeof TokenTag.UnterminatedStringError
	export type Vector128 = typeof TokenTag.Vector128
	export type Vector128Const = typeof TokenTag.Vector128Const
	export type Vector128Load = typeof TokenTag.Vector128Load
	export type Vector128Load16Lane = typeof TokenTag.Vector128Load16Lane
	export type Vector128Load16Splat = typeof TokenTag.Vector128Load16Splat
	export type Vector128Load16x4Signed = typeof TokenTag.Vector128Load16x4Signed
	export type Vector128Load16x4Unsigned = typeof TokenTag.Vector128Load16x4Unsigned
	export type Vector128Load32Lane = typeof TokenTag.Vector128Load32Lane
	export type Vector128Load32Splat = typeof TokenTag.Vector128Load32Splat
	export type Vector128Load32Zero = typeof TokenTag.Vector128Load32Zero
	export type Vector128Load32x2Signed = typeof TokenTag.Vector128Load32x2Signed
	export type Vector128Load32x2Unsigned = typeof TokenTag.Vector128Load32x2Unsigned
	export type Vector128Load64Lane = typeof TokenTag.Vector128Load64Lane
	export type Vector128Load64Splat = typeof TokenTag.Vector128Load64Splat
	export type Vector128Load64Zero = typeof TokenTag.Vector128Load64Zero
	export type Vector128Load8Lane = typeof TokenTag.Vector128Load8Lane
	export type Vector128Load8Splat = typeof TokenTag.Vector128Load8Splat
	export type Vector128Load8x8Signed = typeof TokenTag.Vector128Load8x8Signed
	export type Vector128Load8x8Unsigned = typeof TokenTag.Vector128Load8x8Unsigned
	export type Vector128Store = typeof TokenTag.Vector128Store
	export type Vector128Store16Lane = typeof TokenTag.Vector128Store16Lane
	export type Vector128Store32Lane = typeof TokenTag.Vector128Store32Lane
	export type Vector128Store64Lane = typeof TokenTag.Vector128Store64Lane
	export type Vector128Store8Lane = typeof TokenTag.Vector128Store8Lane
}
