declare enum TokenTagEnum {
	AlignEquals,
	Block,
	BlockComment,
	Branch,
	BranchIf,
	BranchTable,
	Call,
	CallIndirect,
	CloseBracket,
	Data,
	DataDrop,
	Declare,
	Drop,
	Element,
	ElementDrop,
	Else,
	End,
	Error,
	Export,
	External,
	ExternalReference,
	Float32,
	Float32Absolute,
	Float32Add,
	Float32Ceiling,
	Float32Constant,
	Float32ConvertInteger32Signed,
	Float32ConvertInteger32Unsigned,
	Float32ConvertInteger64Signed,
	Float32ConvertInteger64Unsigned,
	Float32CopySign,
	Float32DemoteFloat64,
	Float32Divide,
	Float32Equals,
	Float32Floor,
	Float32GreaterThan,
	Float32GreaterThanOrEquals,
	Float32LessThan,
	Float32LessThanOrEquals,
	Float32Load,
	Float32Maximum,
	Float32Minimum,
	Float32Multiply,
	Float32Nearest,
	Float32Negate,
	Float32NotEquals,
	Float32ReinterpretInteger32,
	Float32SquareRoot,
	Float32Store,
	Float32Subtract,
	Float32Truncate,
	Float32x4,
	Float64,
	Float64Absolute,
	Float64Add,
	Float64Ceiling,
	Float64Constant,
	Float64ConvertInteger32Signed,
	Float64ConvertInteger32Unsigned,
	Float64ConvertInteger64Signed,
	Float64ConvertInteger64Unsigned,
	Float64CopySign,
	Float64Divide,
	Float64Equals,
	Float64Floor,
	Float64GreaterThan,
	Float64GreaterThanOrEquals,
	Float64LessThan,
	Float64LessThanOrEquals,
	Float64Load,
	Float64Maximum,
	Float64Minimum,
	Float64Multiply,
	Float64Nearest,
	Float64Negate,
	Float64NotEquals,
	Float64PromoteFloat32,
	Float64ReinterpretInteger64,
	Float64SquareRoot,
	Float64Store,
	Float64Subtract,
	Float64Truncate,
	Float64x2,
	Function,
	FunctionReference,
	Global,
	GlobalGet,
	GlobalSet,
	Identifier,
	If,
	Import,
	Integer16x8,
	Integer16x8Splat,
	Integer32,
	Integer32Add,
	Integer32And,
	Integer32Constant,
	Integer32CountLeadingZeros,
	Integer32CountTrailingZeros,
	Integer32DivideSigned,
	Integer32DivideUnsigned,
	Integer32Equals,
	Integer32EqualsZero,
	Integer32Extend16Signed,
	Integer32Extend8Signed,
	Integer32GreaterThanOrEqualsSigned,
	Integer32GreaterThanOrEqualsUnsigned,
	Integer32GreaterThanSigned,
	Integer32GreaterThanUnsigned,
	Integer32LessThanOrEqualsSigned,
	Integer32LessThanOrEqualsUnsigned,
	Integer32LessThanSigned,
	Integer32LessThanUnsigned,
	Integer32Load,
	Integer32Load16Signed,
	Integer32Load16Unsigned,
	Integer32Load8Signed,
	Integer32Load8Unsigned,
	Integer32Multiply,
	Integer32NotEqual,
	Integer32Or,
	Integer32PopCountNonZeros,
	Integer32ReinterpretFloat32,
	Integer32RemainderSigned,
	Integer32RemainderUnsigned,
	Integer32RotateLeft,
	Integer32RotateRight,
	Integer32ShiftLeft,
	Integer32ShiftRightSigned,
	Integer32ShiftRightUnsigned,
	Integer32Store,
	Integer32Store16,
	Integer32Store8,
	Integer32Subtract,
	Integer32TruncateFloat32Signed,
	Integer32TruncateFloat32Unsigned,
	Integer32TruncateFloat64Signed,
	Integer32TruncateFloat64Unsigned,
	Integer32TruncateSaturateFloat32Signed,
	Integer32TruncateSaturateFloat32Unsigned,
	Integer32TruncateSaturateFloat64Signed,
	Integer32TruncateSaturateFloat64Unsigned,
	Integer32WrapInteger64,
	Integer32Xor,
	Integer32x4,
	Integer32x4Splat,
	Integer64,
	Integer64Add,
	Integer64And,
	Integer64Constant,
	Integer64CountLeadingZeros,
	Integer64CountTrailingZeros,
	Integer64DivideSigned,
	Integer64DivideUnsigned,
	Integer64Equals,
	Integer64EqualsZero,
	Integer64Extend16Signed,
	Integer64Extend32Signed,
	Integer64Extend8Signed,
	Integer64ExtendInteger32Signed,
	Integer64ExtendInteger32Unsigned,
	Integer64GreaterThanOrEqualsSigned,
	Integer64GreaterThanOrEqualsUnsigned,
	Integer64GreaterThanSigned,
	Integer64GreaterThanUnsigned,
	Integer64LessThanOrEqualsSigned,
	Integer64LessThanOrEqualsUnsigned,
	Integer64LessThanSigned,
	Integer64LessThanUnsigned,
	Integer64Load,
	Integer64Load16Signed,
	Integer64Load16Unsigned,
	Integer64Load32Signed,
	Integer64Load32Unsigned,
	Integer64Load8Signed,
	Integer64Load8Unsigned,
	Integer64Multiply,
	Integer64NotEqual,
	Integer64Or,
	Integer64PopCountNonZeros,
	Integer64ReinterpretFloat64,
	Integer64RemainderSigned,
	Integer64RemainderUnsigned,
	Integer64RotateLeft,
	Integer64RotateRight,
	Integer64ShiftLeft,
	Integer64ShiftRightSigned,
	Integer64ShiftRightUnsigned,
	Integer64Store,
	Integer64Store16,
	Integer64Store32,
	Integer64Store8,
	Integer64Subtract,
	Integer64TruncateFloat32Signed,
	Integer64TruncateFloat32Unsigned,
	Integer64TruncateFloat64Signed,
	Integer64TruncateFloat64Unsigned,
	Integer64TruncateSaturateFloat32Signed,
	Integer64TruncateSaturateFloat32Unsigned,
	Integer64TruncateSaturateFloat64Signed,
	Integer64TruncateSaturateFloat64Unsigned,
	Integer64Xor,
	Integer64x2,
	Integer64x2Splat,
	Integer8x16,
	Integer8x16Shuffle,
	Integer8x16Splat,
	Integer8x16Swizzle,
	Item,
	Keyword,
	LineComment,
	Local,
	LocalGet,
	LocalSet,
	LocalTee,
	Loop,
	Memory,
	MemoryCopy,
	MemoryFill,
	MemoryGrow,
	MemoryInitiate,
	MemorySize,
	Module,
	Mutable,
	NoOperation,
	Number,
	Offset,
	OffsetEquals,
	OpenBracket,
	Parameter,
	ReferenceFunction,
	ReferenceIsNull,
	ReferenceNull,
	Result,
	Return,
	Select,
	Start,
	StringApostropheEscape,
	StringBackslashEscape,
	StringEndQuote,
	StringHexEscape,
	StringInvalidCharacterError,
	StringInvalidEscapeError,
	StringNewlineEscape,
	StringNonEscape,
	StringQuoteEscape,
	StringReturnEscape,
	StringStartQuote,
	StringTabEscape,
	StringUnicodeEscape,
	Table,
	TableCopy,
	TableFill,
	TableGet,
	TableGrow,
	TableInitiate,
	TableSet,
	TableSize,
	Type,
	Unreachable,
	UnterminatedStringError,
	Vector128,
	Vector128Const,
	Vector128Load,
	Vector128Load16Lane,
	Vector128Load16Splat,
	Vector128Load16x4Signed,
	Vector128Load16x4Unsigned,
	Vector128Load32Lane,
	Vector128Load32Splat,
	Vector128Load32Zero,
	Vector128Load32x2Signed,
	Vector128Load32x2Unsigned,
	Vector128Load64Lane,
	Vector128Load64Splat,
	Vector128Load64Zero,
	Vector128Load8Lane,
	Vector128Load8Splat,
	Vector128Load8x8Signed,
	Vector128Load8x8Unsigned,
	Vector128Store,
	Vector128Store16Lane,
	Vector128Store32Lane,
	Vector128Store64Lane,
	Vector128Store8Lane
}

export type TokenTag = TokenTagEnum
export type TokenTagName = keyof typeof TokenTagEnum

export namespace TokenTag {
	export type AlignEquals = TokenTagEnum.AlignEquals
	export type Block = TokenTagEnum.Block
	export type BlockComment = TokenTagEnum.BlockComment
	export type Branch = TokenTagEnum.Branch
	export type BranchIf = TokenTagEnum.BranchIf
	export type BranchTable = TokenTagEnum.BranchTable
	export type Call = TokenTagEnum.Call
	export type CallIndirect = TokenTagEnum.CallIndirect
	export type CloseBracket = TokenTagEnum.CloseBracket
	export type Data = TokenTagEnum.Data
	export type DataDrop = TokenTagEnum.DataDrop
	export type Declare = TokenTagEnum.Declare
	export type Drop = TokenTagEnum.Drop
	export type Element = TokenTagEnum.Element
	export type ElementDrop = TokenTagEnum.ElementDrop
	export type Else = TokenTagEnum.Else
	export type End = TokenTagEnum.End
	export type Error = TokenTagEnum.Error
	export type Export = TokenTagEnum.Export
	export type External = TokenTagEnum.External
	export type ExternalReference = TokenTagEnum.ExternalReference
	export type Float32 = TokenTagEnum.Float32
	export type Float32Absolute = TokenTagEnum.Float32Absolute
	export type Float32Add = TokenTagEnum.Float32Add
	export type Float32Ceiling = TokenTagEnum.Float32Ceiling
	export type Float32Constant = TokenTagEnum.Float32Constant
	export type Float32ConvertInteger32Signed = TokenTagEnum.Float32ConvertInteger32Signed
	export type Float32ConvertInteger32Unsigned = TokenTagEnum.Float32ConvertInteger32Unsigned
	export type Float32ConvertInteger64Signed = TokenTagEnum.Float32ConvertInteger64Signed
	export type Float32ConvertInteger64Unsigned = TokenTagEnum.Float32ConvertInteger64Unsigned
	export type Float32CopySign = TokenTagEnum.Float32CopySign
	export type Float32DemoteFloat64 = TokenTagEnum.Float32DemoteFloat64
	export type Float32Divide = TokenTagEnum.Float32Divide
	export type Float32Equals = TokenTagEnum.Float32Equals
	export type Float32Floor = TokenTagEnum.Float32Floor
	export type Float32GreaterThan = TokenTagEnum.Float32GreaterThan
	export type Float32GreaterThanOrEquals = TokenTagEnum.Float32GreaterThanOrEquals
	export type Float32LessThan = TokenTagEnum.Float32LessThan
	export type Float32LessThanOrEquals = TokenTagEnum.Float32LessThanOrEquals
	export type Float32Load = TokenTagEnum.Float32Load
	export type Float32Maximum = TokenTagEnum.Float32Maximum
	export type Float32Minimum = TokenTagEnum.Float32Minimum
	export type Float32Multiply = TokenTagEnum.Float32Multiply
	export type Float32Nearest = TokenTagEnum.Float32Nearest
	export type Float32Negate = TokenTagEnum.Float32Negate
	export type Float32NotEquals = TokenTagEnum.Float32NotEquals
	export type Float32ReinterpretInteger32 = TokenTagEnum.Float32ReinterpretInteger32
	export type Float32SquareRoot = TokenTagEnum.Float32SquareRoot
	export type Float32Store = TokenTagEnum.Float32Store
	export type Float32Subtract = TokenTagEnum.Float32Subtract
	export type Float32Truncate = TokenTagEnum.Float32Truncate
	export type Float32x4 = TokenTagEnum.Float32x4
	export type Float64 = TokenTagEnum.Float64
	export type Float64Absolute = TokenTagEnum.Float64Absolute
	export type Float64Add = TokenTagEnum.Float64Add
	export type Float64Ceiling = TokenTagEnum.Float64Ceiling
	export type Float64Constant = TokenTagEnum.Float64Constant
	export type Float64ConvertInteger32Signed = TokenTagEnum.Float64ConvertInteger32Signed
	export type Float64ConvertInteger32Unsigned = TokenTagEnum.Float64ConvertInteger32Unsigned
	export type Float64ConvertInteger64Signed = TokenTagEnum.Float64ConvertInteger64Signed
	export type Float64ConvertInteger64Unsigned = TokenTagEnum.Float64ConvertInteger64Unsigned
	export type Float64CopySign = TokenTagEnum.Float64CopySign
	export type Float64Divide = TokenTagEnum.Float64Divide
	export type Float64Equals = TokenTagEnum.Float64Equals
	export type Float64Floor = TokenTagEnum.Float64Floor
	export type Float64GreaterThan = TokenTagEnum.Float64GreaterThan
	export type Float64GreaterThanOrEquals = TokenTagEnum.Float64GreaterThanOrEquals
	export type Float64LessThan = TokenTagEnum.Float64LessThan
	export type Float64LessThanOrEquals = TokenTagEnum.Float64LessThanOrEquals
	export type Float64Load = TokenTagEnum.Float64Load
	export type Float64Maximum = TokenTagEnum.Float64Maximum
	export type Float64Minimum = TokenTagEnum.Float64Minimum
	export type Float64Multiply = TokenTagEnum.Float64Multiply
	export type Float64Nearest = TokenTagEnum.Float64Nearest
	export type Float64Negate = TokenTagEnum.Float64Negate
	export type Float64NotEquals = TokenTagEnum.Float64NotEquals
	export type Float64PromoteFloat32 = TokenTagEnum.Float64PromoteFloat32
	export type Float64ReinterpretInteger64 = TokenTagEnum.Float64ReinterpretInteger64
	export type Float64SquareRoot = TokenTagEnum.Float64SquareRoot
	export type Float64Store = TokenTagEnum.Float64Store
	export type Float64Subtract = TokenTagEnum.Float64Subtract
	export type Float64Truncate = TokenTagEnum.Float64Truncate
	export type Float64x2 = TokenTagEnum.Float64x2
	export type Function = TokenTagEnum.Function
	export type FunctionReference = TokenTagEnum.FunctionReference
	export type Global = TokenTagEnum.Global
	export type GlobalGet = TokenTagEnum.GlobalGet
	export type GlobalSet = TokenTagEnum.GlobalSet
	export type Identifier = TokenTagEnum.Identifier
	export type If = TokenTagEnum.If
	export type Import = TokenTagEnum.Import
	export type Integer16x8 = TokenTagEnum.Integer16x8
	export type Integer16x8Splat = TokenTagEnum.Integer16x8Splat
	export type Integer32 = TokenTagEnum.Integer32
	export type Integer32Add = TokenTagEnum.Integer32Add
	export type Integer32And = TokenTagEnum.Integer32And
	export type Integer32Constant = TokenTagEnum.Integer32Constant
	export type Integer32CountLeadingZeros = TokenTagEnum.Integer32CountLeadingZeros
	export type Integer32CountTrailingZeros = TokenTagEnum.Integer32CountTrailingZeros
	export type Integer32DivideSigned = TokenTagEnum.Integer32DivideSigned
	export type Integer32DivideUnsigned = TokenTagEnum.Integer32DivideUnsigned
	export type Integer32Equals = TokenTagEnum.Integer32Equals
	export type Integer32EqualsZero = TokenTagEnum.Integer32EqualsZero
	export type Integer32Extend16Signed = TokenTagEnum.Integer32Extend16Signed
	export type Integer32Extend8Signed = TokenTagEnum.Integer32Extend8Signed
	export type Integer32GreaterThanOrEqualsSigned = TokenTagEnum.Integer32GreaterThanOrEqualsSigned
	export type Integer32GreaterThanOrEqualsUnsigned = TokenTagEnum.Integer32GreaterThanOrEqualsUnsigned
	export type Integer32GreaterThanSigned = TokenTagEnum.Integer32GreaterThanSigned
	export type Integer32GreaterThanUnsigned = TokenTagEnum.Integer32GreaterThanUnsigned
	export type Integer32LessThanOrEqualsSigned = TokenTagEnum.Integer32LessThanOrEqualsSigned
	export type Integer32LessThanOrEqualsUnsigned = TokenTagEnum.Integer32LessThanOrEqualsUnsigned
	export type Integer32LessThanSigned = TokenTagEnum.Integer32LessThanSigned
	export type Integer32LessThanUnsigned = TokenTagEnum.Integer32LessThanUnsigned
	export type Integer32Load = TokenTagEnum.Integer32Load
	export type Integer32Load16Signed = TokenTagEnum.Integer32Load16Signed
	export type Integer32Load16Unsigned = TokenTagEnum.Integer32Load16Unsigned
	export type Integer32Load8Signed = TokenTagEnum.Integer32Load8Signed
	export type Integer32Load8Unsigned = TokenTagEnum.Integer32Load8Unsigned
	export type Integer32Multiply = TokenTagEnum.Integer32Multiply
	export type Integer32NotEqual = TokenTagEnum.Integer32NotEqual
	export type Integer32Or = TokenTagEnum.Integer32Or
	export type Integer32PopCountNonZeros = TokenTagEnum.Integer32PopCountNonZeros
	export type Integer32ReinterpretFloat32 = TokenTagEnum.Integer32ReinterpretFloat32
	export type Integer32RemainderSigned = TokenTagEnum.Integer32RemainderSigned
	export type Integer32RemainderUnsigned = TokenTagEnum.Integer32RemainderUnsigned
	export type Integer32RotateLeft = TokenTagEnum.Integer32RotateLeft
	export type Integer32RotateRight = TokenTagEnum.Integer32RotateRight
	export type Integer32ShiftLeft = TokenTagEnum.Integer32ShiftLeft
	export type Integer32ShiftRightSigned = TokenTagEnum.Integer32ShiftRightSigned
	export type Integer32ShiftRightUnsigned = TokenTagEnum.Integer32ShiftRightUnsigned
	export type Integer32Store = TokenTagEnum.Integer32Store
	export type Integer32Store16 = TokenTagEnum.Integer32Store16
	export type Integer32Store8 = TokenTagEnum.Integer32Store8
	export type Integer32Subtract = TokenTagEnum.Integer32Subtract
	export type Integer32TruncateFloat32Signed = TokenTagEnum.Integer32TruncateFloat32Signed
	export type Integer32TruncateFloat32Unsigned = TokenTagEnum.Integer32TruncateFloat32Unsigned
	export type Integer32TruncateFloat64Signed = TokenTagEnum.Integer32TruncateFloat64Signed
	export type Integer32TruncateFloat64Unsigned = TokenTagEnum.Integer32TruncateFloat64Unsigned
	export type Integer32TruncateSaturateFloat32Signed = TokenTagEnum.Integer32TruncateSaturateFloat32Signed
	export type Integer32TruncateSaturateFloat32Unsigned = TokenTagEnum.Integer32TruncateSaturateFloat32Unsigned
	export type Integer32TruncateSaturateFloat64Signed = TokenTagEnum.Integer32TruncateSaturateFloat64Signed
	export type Integer32TruncateSaturateFloat64Unsigned = TokenTagEnum.Integer32TruncateSaturateFloat64Unsigned
	export type Integer32WrapInteger64 = TokenTagEnum.Integer32WrapInteger64
	export type Integer32Xor = TokenTagEnum.Integer32Xor
	export type Integer32x4 = TokenTagEnum.Integer32x4
	export type Integer32x4Splat = TokenTagEnum.Integer32x4Splat
	export type Integer64 = TokenTagEnum.Integer64
	export type Integer64Add = TokenTagEnum.Integer64Add
	export type Integer64And = TokenTagEnum.Integer64And
	export type Integer64Constant = TokenTagEnum.Integer64Constant
	export type Integer64CountLeadingZeros = TokenTagEnum.Integer64CountLeadingZeros
	export type Integer64CountTrailingZeros = TokenTagEnum.Integer64CountTrailingZeros
	export type Integer64DivideSigned = TokenTagEnum.Integer64DivideSigned
	export type Integer64DivideUnsigned = TokenTagEnum.Integer64DivideUnsigned
	export type Integer64Equals = TokenTagEnum.Integer64Equals
	export type Integer64EqualsZero = TokenTagEnum.Integer64EqualsZero
	export type Integer64Extend16Signed = TokenTagEnum.Integer64Extend16Signed
	export type Integer64Extend32Signed = TokenTagEnum.Integer64Extend32Signed
	export type Integer64Extend8Signed = TokenTagEnum.Integer64Extend8Signed
	export type Integer64ExtendInteger32Signed = TokenTagEnum.Integer64ExtendInteger32Signed
	export type Integer64ExtendInteger32Unsigned = TokenTagEnum.Integer64ExtendInteger32Unsigned
	export type Integer64GreaterThanOrEqualsSigned = TokenTagEnum.Integer64GreaterThanOrEqualsSigned
	export type Integer64GreaterThanOrEqualsUnsigned = TokenTagEnum.Integer64GreaterThanOrEqualsUnsigned
	export type Integer64GreaterThanSigned = TokenTagEnum.Integer64GreaterThanSigned
	export type Integer64GreaterThanUnsigned = TokenTagEnum.Integer64GreaterThanUnsigned
	export type Integer64LessThanOrEqualsSigned = TokenTagEnum.Integer64LessThanOrEqualsSigned
	export type Integer64LessThanOrEqualsUnsigned = TokenTagEnum.Integer64LessThanOrEqualsUnsigned
	export type Integer64LessThanSigned = TokenTagEnum.Integer64LessThanSigned
	export type Integer64LessThanUnsigned = TokenTagEnum.Integer64LessThanUnsigned
	export type Integer64Load = TokenTagEnum.Integer64Load
	export type Integer64Load16Signed = TokenTagEnum.Integer64Load16Signed
	export type Integer64Load16Unsigned = TokenTagEnum.Integer64Load16Unsigned
	export type Integer64Load32Signed = TokenTagEnum.Integer64Load32Signed
	export type Integer64Load32Unsigned = TokenTagEnum.Integer64Load32Unsigned
	export type Integer64Load8Signed = TokenTagEnum.Integer64Load8Signed
	export type Integer64Load8Unsigned = TokenTagEnum.Integer64Load8Unsigned
	export type Integer64Multiply = TokenTagEnum.Integer64Multiply
	export type Integer64NotEqual = TokenTagEnum.Integer64NotEqual
	export type Integer64Or = TokenTagEnum.Integer64Or
	export type Integer64PopCountNonZeros = TokenTagEnum.Integer64PopCountNonZeros
	export type Integer64ReinterpretFloat64 = TokenTagEnum.Integer64ReinterpretFloat64
	export type Integer64RemainderSigned = TokenTagEnum.Integer64RemainderSigned
	export type Integer64RemainderUnsigned = TokenTagEnum.Integer64RemainderUnsigned
	export type Integer64RotateLeft = TokenTagEnum.Integer64RotateLeft
	export type Integer64RotateRight = TokenTagEnum.Integer64RotateRight
	export type Integer64ShiftLeft = TokenTagEnum.Integer64ShiftLeft
	export type Integer64ShiftRightSigned = TokenTagEnum.Integer64ShiftRightSigned
	export type Integer64ShiftRightUnsigned = TokenTagEnum.Integer64ShiftRightUnsigned
	export type Integer64Store = TokenTagEnum.Integer64Store
	export type Integer64Store16 = TokenTagEnum.Integer64Store16
	export type Integer64Store32 = TokenTagEnum.Integer64Store32
	export type Integer64Store8 = TokenTagEnum.Integer64Store8
	export type Integer64Subtract = TokenTagEnum.Integer64Subtract
	export type Integer64TruncateFloat32Signed = TokenTagEnum.Integer64TruncateFloat32Signed
	export type Integer64TruncateFloat32Unsigned = TokenTagEnum.Integer64TruncateFloat32Unsigned
	export type Integer64TruncateFloat64Signed = TokenTagEnum.Integer64TruncateFloat64Signed
	export type Integer64TruncateFloat64Unsigned = TokenTagEnum.Integer64TruncateFloat64Unsigned
	export type Integer64TruncateSaturateFloat32Signed = TokenTagEnum.Integer64TruncateSaturateFloat32Signed
	export type Integer64TruncateSaturateFloat32Unsigned = TokenTagEnum.Integer64TruncateSaturateFloat32Unsigned
	export type Integer64TruncateSaturateFloat64Signed = TokenTagEnum.Integer64TruncateSaturateFloat64Signed
	export type Integer64TruncateSaturateFloat64Unsigned = TokenTagEnum.Integer64TruncateSaturateFloat64Unsigned
	export type Integer64Xor = TokenTagEnum.Integer64Xor
	export type Integer64x2 = TokenTagEnum.Integer64x2
	export type Integer64x2Splat = TokenTagEnum.Integer64x2Splat
	export type Integer8x16 = TokenTagEnum.Integer8x16
	export type Integer8x16Shuffle = TokenTagEnum.Integer8x16Shuffle
	export type Integer8x16Splat = TokenTagEnum.Integer8x16Splat
	export type Integer8x16Swizzle = TokenTagEnum.Integer8x16Swizzle
	export type Item = TokenTagEnum.Item
	export type Keyword = TokenTagEnum.Keyword
	export type LineComment = TokenTagEnum.LineComment
	export type Local = TokenTagEnum.Local
	export type LocalGet = TokenTagEnum.LocalGet
	export type LocalSet = TokenTagEnum.LocalSet
	export type LocalTee = TokenTagEnum.LocalTee
	export type Loop = TokenTagEnum.Loop
	export type Memory = TokenTagEnum.Memory
	export type MemoryCopy = TokenTagEnum.MemoryCopy
	export type MemoryFill = TokenTagEnum.MemoryFill
	export type MemoryGrow = TokenTagEnum.MemoryGrow
	export type MemoryInitiate = TokenTagEnum.MemoryInitiate
	export type MemorySize = TokenTagEnum.MemorySize
	export type Module = TokenTagEnum.Module
	export type Mutable = TokenTagEnum.Mutable
	export type NoOperation = TokenTagEnum.NoOperation
	export type Number = TokenTagEnum.Number
	export type Offset = TokenTagEnum.Offset
	export type OffsetEquals = TokenTagEnum.OffsetEquals
	export type OpenBracket = TokenTagEnum.OpenBracket
	export type Parameter = TokenTagEnum.Parameter
	export type ReferenceFunction = TokenTagEnum.ReferenceFunction
	export type ReferenceIsNull = TokenTagEnum.ReferenceIsNull
	export type ReferenceNull = TokenTagEnum.ReferenceNull
	export type Result = TokenTagEnum.Result
	export type Return = TokenTagEnum.Return
	export type Select = TokenTagEnum.Select
	export type Start = TokenTagEnum.Start
	export type StringApostropheEscape = TokenTagEnum.StringApostropheEscape
	export type StringBackslashEscape = TokenTagEnum.StringBackslashEscape
	export type StringEndQuote = TokenTagEnum.StringEndQuote
	export type StringHexEscape = TokenTagEnum.StringHexEscape
	export type StringInvalidCharacterError = TokenTagEnum.StringInvalidCharacterError
	export type StringInvalidEscapeError = TokenTagEnum.StringInvalidEscapeError
	export type StringNewlineEscape = TokenTagEnum.StringNewlineEscape
	export type StringNonEscape = TokenTagEnum.StringNonEscape
	export type StringQuoteEscape = TokenTagEnum.StringQuoteEscape
	export type StringReturnEscape = TokenTagEnum.StringReturnEscape
	export type StringStartQuote = TokenTagEnum.StringStartQuote
	export type StringTabEscape = TokenTagEnum.StringTabEscape
	export type StringUnicodeEscape = TokenTagEnum.StringUnicodeEscape
	export type Table = TokenTagEnum.Table
	export type TableCopy = TokenTagEnum.TableCopy
	export type TableFill = TokenTagEnum.TableFill
	export type TableGet = TokenTagEnum.TableGet
	export type TableGrow = TokenTagEnum.TableGrow
	export type TableInitiate = TokenTagEnum.TableInitiate
	export type TableSet = TokenTagEnum.TableSet
	export type TableSize = TokenTagEnum.TableSize
	export type Type = TokenTagEnum.Type
	export type Unreachable = TokenTagEnum.Unreachable
	export type UnterminatedStringError = TokenTagEnum.UnterminatedStringError
	export type Vector128 = TokenTagEnum.Vector128
	export type Vector128Const = TokenTagEnum.Vector128Const
	export type Vector128Load = TokenTagEnum.Vector128Load
	export type Vector128Load16Lane = TokenTagEnum.Vector128Load16Lane
	export type Vector128Load16Splat = TokenTagEnum.Vector128Load16Splat
	export type Vector128Load16x4Signed = TokenTagEnum.Vector128Load16x4Signed
	export type Vector128Load16x4Unsigned = TokenTagEnum.Vector128Load16x4Unsigned
	export type Vector128Load32Lane = TokenTagEnum.Vector128Load32Lane
	export type Vector128Load32Splat = TokenTagEnum.Vector128Load32Splat
	export type Vector128Load32Zero = TokenTagEnum.Vector128Load32Zero
	export type Vector128Load32x2Signed = TokenTagEnum.Vector128Load32x2Signed
	export type Vector128Load32x2Unsigned = TokenTagEnum.Vector128Load32x2Unsigned
	export type Vector128Load64Lane = TokenTagEnum.Vector128Load64Lane
	export type Vector128Load64Splat = TokenTagEnum.Vector128Load64Splat
	export type Vector128Load64Zero = TokenTagEnum.Vector128Load64Zero
	export type Vector128Load8Lane = TokenTagEnum.Vector128Load8Lane
	export type Vector128Load8Splat = TokenTagEnum.Vector128Load8Splat
	export type Vector128Load8x8Signed = TokenTagEnum.Vector128Load8x8Signed
	export type Vector128Load8x8Unsigned = TokenTagEnum.Vector128Load8x8Unsigned
	export type Vector128Store = TokenTagEnum.Vector128Store
	export type Vector128Store16Lane = TokenTagEnum.Vector128Store16Lane
	export type Vector128Store32Lane = TokenTagEnum.Vector128Store32Lane
	export type Vector128Store64Lane = TokenTagEnum.Vector128Store64Lane
	export type Vector128Store8Lane = TokenTagEnum.Vector128Store8Lane
}

export const TokenTag: { [K in TokenTagName]: typeof TokenTagEnum[K] } = {
	AlignEquals: 1,
	Block: 2,
	BlockComment: 3,
	Branch: 4,
	BranchIf: 5,
	BranchTable: 6,
	Call: 7,
	CallIndirect: 8,
	CloseBracket: 9,
	Data: 10,
	DataDrop: 11,
	Declare: 12,
	Drop: 13,
	Element: 14,
	ElementDrop: 15,
	Else: 16,
	End: 17,
	Error: 18,
	Export: 19,
	External: 20,
	ExternalReference: 21,
	Float32: 22,
	Float32Absolute: 23,
	Float32Add: 24,
	Float32Ceiling: 25,
	Float32Constant: 26,
	Float32ConvertInteger32Signed: 27,
	Float32ConvertInteger32Unsigned: 28,
	Float32ConvertInteger64Signed: 29,
	Float32ConvertInteger64Unsigned: 30,
	Float32CopySign: 31,
	Float32DemoteFloat64: 32,
	Float32Divide: 33,
	Float32Equals: 34,
	Float32Floor: 35,
	Float32GreaterThan: 36,
	Float32GreaterThanOrEquals: 37,
	Float32LessThan: 38,
	Float32LessThanOrEquals: 39,
	Float32Load: 40,
	Float32Maximum: 41,
	Float32Minimum: 42,
	Float32Multiply: 43,
	Float32Nearest: 44,
	Float32Negate: 45,
	Float32NotEquals: 46,
	Float32ReinterpretInteger32: 47,
	Float32SquareRoot: 48,
	Float32Store: 49,
	Float32Subtract: 50,
	Float32Truncate: 51,
	Float32x4: 52,
	Float64: 53,
	Float64Absolute: 54,
	Float64Add: 55,
	Float64Ceiling: 56,
	Float64Constant: 57,
	Float64ConvertInteger32Signed: 58,
	Float64ConvertInteger32Unsigned: 59,
	Float64ConvertInteger64Signed: 60,
	Float64ConvertInteger64Unsigned: 61,
	Float64CopySign: 62,
	Float64Divide: 63,
	Float64Equals: 64,
	Float64Floor: 65,
	Float64GreaterThan: 66,
	Float64GreaterThanOrEquals: 67,
	Float64LessThan: 68,
	Float64LessThanOrEquals: 69,
	Float64Load: 70,
	Float64Maximum: 71,
	Float64Minimum: 72,
	Float64Multiply: 73,
	Float64Nearest: 74,
	Float64Negate: 75,
	Float64NotEquals: 76,
	Float64PromoteFloat32: 77,
	Float64ReinterpretInteger64: 78,
	Float64SquareRoot: 79,
	Float64Store: 80,
	Float64Subtract: 81,
	Float64Truncate: 82,
	Float64x2: 83,
	Function: 84,
	FunctionReference: 85,
	Global: 86,
	GlobalGet: 87,
	GlobalSet: 88,
	Identifier: 89,
	If: 90,
	Import: 91,
	Integer16x8: 92,
	Integer16x8Splat: 93,
	Integer32: 94,
	Integer32Add: 95,
	Integer32And: 96,
	Integer32Constant: 97,
	Integer32CountLeadingZeros: 98,
	Integer32CountTrailingZeros: 99,
	Integer32DivideSigned: 100,
	Integer32DivideUnsigned: 101,
	Integer32Equals: 102,
	Integer32EqualsZero: 103,
	Integer32Extend16Signed: 104,
	Integer32Extend8Signed: 105,
	Integer32GreaterThanOrEqualsSigned: 106,
	Integer32GreaterThanOrEqualsUnsigned: 107,
	Integer32GreaterThanSigned: 108,
	Integer32GreaterThanUnsigned: 109,
	Integer32LessThanOrEqualsSigned: 110,
	Integer32LessThanOrEqualsUnsigned: 111,
	Integer32LessThanSigned: 112,
	Integer32LessThanUnsigned: 113,
	Integer32Load: 114,
	Integer32Load16Signed: 115,
	Integer32Load16Unsigned: 116,
	Integer32Load8Signed: 117,
	Integer32Load8Unsigned: 118,
	Integer32Multiply: 119,
	Integer32NotEqual: 120,
	Integer32Or: 121,
	Integer32PopCountNonZeros: 122,
	Integer32ReinterpretFloat32: 123,
	Integer32RemainderSigned: 124,
	Integer32RemainderUnsigned: 125,
	Integer32RotateLeft: 126,
	Integer32RotateRight: 127,
	Integer32ShiftLeft: 128,
	Integer32ShiftRightSigned: 129,
	Integer32ShiftRightUnsigned: 130,
	Integer32Store: 131,
	Integer32Store16: 132,
	Integer32Store8: 133,
	Integer32Subtract: 134,
	Integer32TruncateFloat32Signed: 135,
	Integer32TruncateFloat32Unsigned: 136,
	Integer32TruncateFloat64Signed: 137,
	Integer32TruncateFloat64Unsigned: 138,
	Integer32TruncateSaturateFloat32Signed: 139,
	Integer32TruncateSaturateFloat32Unsigned: 140,
	Integer32TruncateSaturateFloat64Signed: 141,
	Integer32TruncateSaturateFloat64Unsigned: 142,
	Integer32WrapInteger64: 143,
	Integer32Xor: 144,
	Integer32x4: 145,
	Integer32x4Splat: 146,
	Integer64: 147,
	Integer64Add: 148,
	Integer64And: 149,
	Integer64Constant: 150,
	Integer64CountLeadingZeros: 151,
	Integer64CountTrailingZeros: 152,
	Integer64DivideSigned: 153,
	Integer64DivideUnsigned: 154,
	Integer64Equals: 155,
	Integer64EqualsZero: 156,
	Integer64Extend16Signed: 157,
	Integer64Extend32Signed: 158,
	Integer64Extend8Signed: 159,
	Integer64ExtendInteger32Signed: 160,
	Integer64ExtendInteger32Unsigned: 161,
	Integer64GreaterThanOrEqualsSigned: 162,
	Integer64GreaterThanOrEqualsUnsigned: 163,
	Integer64GreaterThanSigned: 164,
	Integer64GreaterThanUnsigned: 165,
	Integer64LessThanOrEqualsSigned: 166,
	Integer64LessThanOrEqualsUnsigned: 167,
	Integer64LessThanSigned: 168,
	Integer64LessThanUnsigned: 169,
	Integer64Load: 170,
	Integer64Load16Signed: 171,
	Integer64Load16Unsigned: 172,
	Integer64Load32Signed: 173,
	Integer64Load32Unsigned: 174,
	Integer64Load8Signed: 175,
	Integer64Load8Unsigned: 176,
	Integer64Multiply: 177,
	Integer64NotEqual: 178,
	Integer64Or: 179,
	Integer64PopCountNonZeros: 180,
	Integer64ReinterpretFloat64: 181,
	Integer64RemainderSigned: 182,
	Integer64RemainderUnsigned: 183,
	Integer64RotateLeft: 184,
	Integer64RotateRight: 185,
	Integer64ShiftLeft: 186,
	Integer64ShiftRightSigned: 187,
	Integer64ShiftRightUnsigned: 188,
	Integer64Store: 189,
	Integer64Store16: 190,
	Integer64Store32: 191,
	Integer64Store8: 192,
	Integer64Subtract: 193,
	Integer64TruncateFloat32Signed: 194,
	Integer64TruncateFloat32Unsigned: 195,
	Integer64TruncateFloat64Signed: 196,
	Integer64TruncateFloat64Unsigned: 197,
	Integer64TruncateSaturateFloat32Signed: 198,
	Integer64TruncateSaturateFloat32Unsigned: 199,
	Integer64TruncateSaturateFloat64Signed: 200,
	Integer64TruncateSaturateFloat64Unsigned: 201,
	Integer64Xor: 202,
	Integer64x2: 203,
	Integer64x2Splat: 204,
	Integer8x16: 205,
	Integer8x16Shuffle: 206,
	Integer8x16Splat: 207,
	Integer8x16Swizzle: 208,
	Item: 209,
	Keyword: 210,
	LineComment: 211,
	Local: 212,
	LocalGet: 213,
	LocalSet: 214,
	LocalTee: 215,
	Loop: 216,
	Memory: 217,
	MemoryCopy: 218,
	MemoryFill: 219,
	MemoryGrow: 220,
	MemoryInitiate: 221,
	MemorySize: 222,
	Module: 223,
	Mutable: 224,
	NoOperation: 225,
	Number: 226,
	Offset: 227,
	OffsetEquals: 228,
	OpenBracket: 229,
	Parameter: 230,
	ReferenceFunction: 231,
	ReferenceIsNull: 232,
	ReferenceNull: 233,
	Result: 234,
	Return: 235,
	Select: 236,
	Start: 237,
	StringApostropheEscape: 238,
	StringBackslashEscape: 239,
	StringEndQuote: 240,
	StringHexEscape: 241,
	StringInvalidCharacterError: 242,
	StringInvalidEscapeError: 243,
	StringNewlineEscape: 244,
	StringNonEscape: 245,
	StringQuoteEscape: 246,
	StringReturnEscape: 247,
	StringStartQuote: 248,
	StringTabEscape: 249,
	StringUnicodeEscape: 250,
	Table: 251,
	TableCopy: 252,
	TableFill: 253,
	TableGet: 254,
	TableGrow: 255,
	TableInitiate: 256,
	TableSet: 257,
	TableSize: 258,
	Type: 259,
	Unreachable: 260,
	UnterminatedStringError: 261,
	Vector128: 262,
	Vector128Const: 263,
	Vector128Load: 264,
	Vector128Load16Lane: 265,
	Vector128Load16Splat: 266,
	Vector128Load16x4Signed: 267,
	Vector128Load16x4Unsigned: 268,
	Vector128Load32Lane: 269,
	Vector128Load32Splat: 270,
	Vector128Load32Zero: 271,
	Vector128Load32x2Signed: 272,
	Vector128Load32x2Unsigned: 273,
	Vector128Load64Lane: 274,
	Vector128Load64Splat: 275,
	Vector128Load64Zero: 276,
	Vector128Load8Lane: 277,
	Vector128Load8Splat: 278,
	Vector128Load8x8Signed: 279,
	Vector128Load8x8Unsigned: 280,
	Vector128Store: 281,
	Vector128Store16Lane: 282,
	Vector128Store32Lane: 283,
	Vector128Store64Lane: 284,
	Vector128Store8Lane: 285,
}

export const TokenTagsToNames: Record<number, string> = {
	1: "AlignEquals",
	2: "Block",
	3: "BlockComment",
	4: "Branch",
	5: "BranchIf",
	6: "BranchTable",
	7: "Call",
	8: "CallIndirect",
	9: "CloseBracket",
	10: "Data",
	11: "DataDrop",
	12: "Declare",
	13: "Drop",
	14: "Element",
	15: "ElementDrop",
	16: "Else",
	17: "End",
	18: "Error",
	19: "Export",
	20: "External",
	21: "ExternalReference",
	22: "Float32",
	23: "Float32Absolute",
	24: "Float32Add",
	25: "Float32Ceiling",
	26: "Float32Constant",
	27: "Float32ConvertInteger32Signed",
	28: "Float32ConvertInteger32Unsigned",
	29: "Float32ConvertInteger64Signed",
	30: "Float32ConvertInteger64Unsigned",
	31: "Float32CopySign",
	32: "Float32DemoteFloat64",
	33: "Float32Divide",
	34: "Float32Equals",
	35: "Float32Floor",
	36: "Float32GreaterThan",
	37: "Float32GreaterThanOrEquals",
	38: "Float32LessThan",
	39: "Float32LessThanOrEquals",
	40: "Float32Load",
	41: "Float32Maximum",
	42: "Float32Minimum",
	43: "Float32Multiply",
	44: "Float32Nearest",
	45: "Float32Negate",
	46: "Float32NotEquals",
	47: "Float32ReinterpretInteger32",
	48: "Float32SquareRoot",
	49: "Float32Store",
	50: "Float32Subtract",
	51: "Float32Truncate",
	52: "Float32x4",
	53: "Float64",
	54: "Float64Absolute",
	55: "Float64Add",
	56: "Float64Ceiling",
	57: "Float64Constant",
	58: "Float64ConvertInteger32Signed",
	59: "Float64ConvertInteger32Unsigned",
	60: "Float64ConvertInteger64Signed",
	61: "Float64ConvertInteger64Unsigned",
	62: "Float64CopySign",
	63: "Float64Divide",
	64: "Float64Equals",
	65: "Float64Floor",
	66: "Float64GreaterThan",
	67: "Float64GreaterThanOrEquals",
	68: "Float64LessThan",
	69: "Float64LessThanOrEquals",
	70: "Float64Load",
	71: "Float64Maximum",
	72: "Float64Minimum",
	73: "Float64Multiply",
	74: "Float64Nearest",
	75: "Float64Negate",
	76: "Float64NotEquals",
	77: "Float64PromoteFloat32",
	78: "Float64ReinterpretInteger64",
	79: "Float64SquareRoot",
	80: "Float64Store",
	81: "Float64Subtract",
	82: "Float64Truncate",
	83: "Float64x2",
	84: "Function",
	85: "FunctionReference",
	86: "Global",
	87: "GlobalGet",
	88: "GlobalSet",
	89: "Identifier",
	90: "If",
	91: "Import",
	92: "Integer16x8",
	93: "Integer16x8Splat",
	94: "Integer32",
	95: "Integer32Add",
	96: "Integer32And",
	97: "Integer32Constant",
	98: "Integer32CountLeadingZeros",
	99: "Integer32CountTrailingZeros",
	100: "Integer32DivideSigned",
	101: "Integer32DivideUnsigned",
	102: "Integer32Equals",
	103: "Integer32EqualsZero",
	104: "Integer32Extend16Signed",
	105: "Integer32Extend8Signed",
	106: "Integer32GreaterThanOrEqualsSigned",
	107: "Integer32GreaterThanOrEqualsUnsigned",
	108: "Integer32GreaterThanSigned",
	109: "Integer32GreaterThanUnsigned",
	110: "Integer32LessThanOrEqualsSigned",
	111: "Integer32LessThanOrEqualsUnsigned",
	112: "Integer32LessThanSigned",
	113: "Integer32LessThanUnsigned",
	114: "Integer32Load",
	115: "Integer32Load16Signed",
	116: "Integer32Load16Unsigned",
	117: "Integer32Load8Signed",
	118: "Integer32Load8Unsigned",
	119: "Integer32Multiply",
	120: "Integer32NotEqual",
	121: "Integer32Or",
	122: "Integer32PopCountNonZeros",
	123: "Integer32ReinterpretFloat32",
	124: "Integer32RemainderSigned",
	125: "Integer32RemainderUnsigned",
	126: "Integer32RotateLeft",
	127: "Integer32RotateRight",
	128: "Integer32ShiftLeft",
	129: "Integer32ShiftRightSigned",
	130: "Integer32ShiftRightUnsigned",
	131: "Integer32Store",
	132: "Integer32Store16",
	133: "Integer32Store8",
	134: "Integer32Subtract",
	135: "Integer32TruncateFloat32Signed",
	136: "Integer32TruncateFloat32Unsigned",
	137: "Integer32TruncateFloat64Signed",
	138: "Integer32TruncateFloat64Unsigned",
	139: "Integer32TruncateSaturateFloat32Signed",
	140: "Integer32TruncateSaturateFloat32Unsigned",
	141: "Integer32TruncateSaturateFloat64Signed",
	142: "Integer32TruncateSaturateFloat64Unsigned",
	143: "Integer32WrapInteger64",
	144: "Integer32Xor",
	145: "Integer32x4",
	146: "Integer32x4Splat",
	147: "Integer64",
	148: "Integer64Add",
	149: "Integer64And",
	150: "Integer64Constant",
	151: "Integer64CountLeadingZeros",
	152: "Integer64CountTrailingZeros",
	153: "Integer64DivideSigned",
	154: "Integer64DivideUnsigned",
	155: "Integer64Equals",
	156: "Integer64EqualsZero",
	157: "Integer64Extend16Signed",
	158: "Integer64Extend32Signed",
	159: "Integer64Extend8Signed",
	160: "Integer64ExtendInteger32Signed",
	161: "Integer64ExtendInteger32Unsigned",
	162: "Integer64GreaterThanOrEqualsSigned",
	163: "Integer64GreaterThanOrEqualsUnsigned",
	164: "Integer64GreaterThanSigned",
	165: "Integer64GreaterThanUnsigned",
	166: "Integer64LessThanOrEqualsSigned",
	167: "Integer64LessThanOrEqualsUnsigned",
	168: "Integer64LessThanSigned",
	169: "Integer64LessThanUnsigned",
	170: "Integer64Load",
	171: "Integer64Load16Signed",
	172: "Integer64Load16Unsigned",
	173: "Integer64Load32Signed",
	174: "Integer64Load32Unsigned",
	175: "Integer64Load8Signed",
	176: "Integer64Load8Unsigned",
	177: "Integer64Multiply",
	178: "Integer64NotEqual",
	179: "Integer64Or",
	180: "Integer64PopCountNonZeros",
	181: "Integer64ReinterpretFloat64",
	182: "Integer64RemainderSigned",
	183: "Integer64RemainderUnsigned",
	184: "Integer64RotateLeft",
	185: "Integer64RotateRight",
	186: "Integer64ShiftLeft",
	187: "Integer64ShiftRightSigned",
	188: "Integer64ShiftRightUnsigned",
	189: "Integer64Store",
	190: "Integer64Store16",
	191: "Integer64Store32",
	192: "Integer64Store8",
	193: "Integer64Subtract",
	194: "Integer64TruncateFloat32Signed",
	195: "Integer64TruncateFloat32Unsigned",
	196: "Integer64TruncateFloat64Signed",
	197: "Integer64TruncateFloat64Unsigned",
	198: "Integer64TruncateSaturateFloat32Signed",
	199: "Integer64TruncateSaturateFloat32Unsigned",
	200: "Integer64TruncateSaturateFloat64Signed",
	201: "Integer64TruncateSaturateFloat64Unsigned",
	202: "Integer64Xor",
	203: "Integer64x2",
	204: "Integer64x2Splat",
	205: "Integer8x16",
	206: "Integer8x16Shuffle",
	207: "Integer8x16Splat",
	208: "Integer8x16Swizzle",
	209: "Item",
	210: "Keyword",
	211: "LineComment",
	212: "Local",
	213: "LocalGet",
	214: "LocalSet",
	215: "LocalTee",
	216: "Loop",
	217: "Memory",
	218: "MemoryCopy",
	219: "MemoryFill",
	220: "MemoryGrow",
	221: "MemoryInitiate",
	222: "MemorySize",
	223: "Module",
	224: "Mutable",
	225: "NoOperation",
	226: "Number",
	227: "Offset",
	228: "OffsetEquals",
	229: "OpenBracket",
	230: "Parameter",
	231: "ReferenceFunction",
	232: "ReferenceIsNull",
	233: "ReferenceNull",
	234: "Result",
	235: "Return",
	236: "Select",
	237: "Start",
	238: "StringApostropheEscape",
	239: "StringBackslashEscape",
	240: "StringEndQuote",
	241: "StringHexEscape",
	242: "StringInvalidCharacterError",
	243: "StringInvalidEscapeError",
	244: "StringNewlineEscape",
	245: "StringNonEscape",
	246: "StringQuoteEscape",
	247: "StringReturnEscape",
	248: "StringStartQuote",
	249: "StringTabEscape",
	250: "StringUnicodeEscape",
	251: "Table",
	252: "TableCopy",
	253: "TableFill",
	254: "TableGet",
	255: "TableGrow",
	256: "TableInitiate",
	257: "TableSet",
	258: "TableSize",
	259: "Type",
	260: "Unreachable",
	261: "UnterminatedStringError",
	262: "Vector128",
	263: "Vector128Const",
	264: "Vector128Load",
	265: "Vector128Load16Lane",
	266: "Vector128Load16Splat",
	267: "Vector128Load16x4Signed",
	268: "Vector128Load16x4Unsigned",
	269: "Vector128Load32Lane",
	270: "Vector128Load32Splat",
	271: "Vector128Load32Zero",
	272: "Vector128Load32x2Signed",
	273: "Vector128Load32x2Unsigned",
	274: "Vector128Load64Lane",
	275: "Vector128Load64Splat",
	276: "Vector128Load64Zero",
	277: "Vector128Load8Lane",
	278: "Vector128Load8Splat",
	279: "Vector128Load8x8Signed",
	280: "Vector128Load8x8Unsigned",
	281: "Vector128Store",
	282: "Vector128Store16Lane",
	283: "Vector128Store32Lane",
	284: "Vector128Store64Lane",
	285: "Vector128Store8Lane",
}
