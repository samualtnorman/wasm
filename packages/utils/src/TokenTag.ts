declare enum TokenTagEnum {
	CloseBracket,
	CommentBlock,
	CommentLine,
	ErrorInvalidCharacter,
	ErrorStringInvalidCharacter,
	ErrorStringInvalidEscape,
	ErrorStringInvalidUnicodeEscape,
	ErrorStringUnterminated,
	ErrorUnterminatedCommentBlock,
	Identifier,
	KeywordAlignEquals,
	KeywordBlock,
	KeywordBranch,
	KeywordBranchIf,
	KeywordBranchTable,
	KeywordCall,
	KeywordCallIndirect,
	KeywordData,
	KeywordDataDrop,
	KeywordDeclare,
	KeywordDrop,
	KeywordElement,
	KeywordElementDrop,
	KeywordElse,
	KeywordEnd,
	KeywordExport,
	KeywordExternal,
	KeywordExternalReference,
	KeywordFloat32,
	KeywordFloat32Absolute,
	KeywordFloat32Add,
	KeywordFloat32Ceiling,
	KeywordFloat32Constant,
	KeywordFloat32ConvertInteger32Signed,
	KeywordFloat32ConvertInteger32Unsigned,
	KeywordFloat32ConvertInteger64Signed,
	KeywordFloat32ConvertInteger64Unsigned,
	KeywordFloat32CopySign,
	KeywordFloat32DemoteFloat64,
	KeywordFloat32Divide,
	KeywordFloat32Equals,
	KeywordFloat32Floor,
	KeywordFloat32GreaterThan,
	KeywordFloat32GreaterThanOrEquals,
	KeywordFloat32LessThan,
	KeywordFloat32LessThanOrEquals,
	KeywordFloat32Load,
	KeywordFloat32Maximum,
	KeywordFloat32Minimum,
	KeywordFloat32Multiply,
	KeywordFloat32Nearest,
	KeywordFloat32Negate,
	KeywordFloat32NotEquals,
	KeywordFloat32ReinterpretInteger32,
	KeywordFloat32SquareRoot,
	KeywordFloat32Store,
	KeywordFloat32Subtract,
	KeywordFloat32Truncate,
	KeywordFloat32x4,
	KeywordFloat64,
	KeywordFloat64Absolute,
	KeywordFloat64Add,
	KeywordFloat64Ceiling,
	KeywordFloat64Constant,
	KeywordFloat64ConvertInteger32Signed,
	KeywordFloat64ConvertInteger32Unsigned,
	KeywordFloat64ConvertInteger64Signed,
	KeywordFloat64ConvertInteger64Unsigned,
	KeywordFloat64CopySign,
	KeywordFloat64Divide,
	KeywordFloat64Equals,
	KeywordFloat64Floor,
	KeywordFloat64GreaterThan,
	KeywordFloat64GreaterThanOrEquals,
	KeywordFloat64LessThan,
	KeywordFloat64LessThanOrEquals,
	KeywordFloat64Load,
	KeywordFloat64Maximum,
	KeywordFloat64Minimum,
	KeywordFloat64Multiply,
	KeywordFloat64Nearest,
	KeywordFloat64Negate,
	KeywordFloat64NotEquals,
	KeywordFloat64PromoteFloat32,
	KeywordFloat64ReinterpretInteger64,
	KeywordFloat64SquareRoot,
	KeywordFloat64Store,
	KeywordFloat64Subtract,
	KeywordFloat64Truncate,
	KeywordFloat64x2,
	KeywordFunction,
	KeywordFunctionReference,
	KeywordGlobal,
	KeywordGlobalGet,
	KeywordGlobalSet,
	KeywordIf,
	KeywordImport,
	KeywordInteger16x8,
	KeywordInteger16x8Splat,
	KeywordInteger32,
	KeywordInteger32Add,
	KeywordInteger32And,
	KeywordInteger32Constant,
	KeywordInteger32CountLeadingZeros,
	KeywordInteger32CountTrailingZeros,
	KeywordInteger32DivideSigned,
	KeywordInteger32DivideUnsigned,
	KeywordInteger32Equals,
	KeywordInteger32EqualsZero,
	KeywordInteger32Extend16Signed,
	KeywordInteger32Extend8Signed,
	KeywordInteger32GreaterThanOrEqualsSigned,
	KeywordInteger32GreaterThanOrEqualsUnsigned,
	KeywordInteger32GreaterThanSigned,
	KeywordInteger32GreaterThanUnsigned,
	KeywordInteger32LessThanOrEqualsSigned,
	KeywordInteger32LessThanOrEqualsUnsigned,
	KeywordInteger32LessThanSigned,
	KeywordInteger32LessThanUnsigned,
	KeywordInteger32Load,
	KeywordInteger32Load16Signed,
	KeywordInteger32Load16Unsigned,
	KeywordInteger32Load8Signed,
	KeywordInteger32Load8Unsigned,
	KeywordInteger32Multiply,
	KeywordInteger32NotEqual,
	KeywordInteger32Or,
	KeywordInteger32PopCountNonZeros,
	KeywordInteger32ReinterpretFloat32,
	KeywordInteger32RemainderSigned,
	KeywordInteger32RemainderUnsigned,
	KeywordInteger32RotateLeft,
	KeywordInteger32RotateRight,
	KeywordInteger32ShiftLeft,
	KeywordInteger32ShiftRightSigned,
	KeywordInteger32ShiftRightUnsigned,
	KeywordInteger32Store,
	KeywordInteger32Store16,
	KeywordInteger32Store8,
	KeywordInteger32Subtract,
	KeywordInteger32TruncateFloat32Signed,
	KeywordInteger32TruncateFloat32Unsigned,
	KeywordInteger32TruncateFloat64Signed,
	KeywordInteger32TruncateFloat64Unsigned,
	KeywordInteger32TruncateSaturateFloat32Signed,
	KeywordInteger32TruncateSaturateFloat32Unsigned,
	KeywordInteger32TruncateSaturateFloat64Signed,
	KeywordInteger32TruncateSaturateFloat64Unsigned,
	KeywordInteger32WrapInteger64,
	KeywordInteger32Xor,
	KeywordInteger32x4,
	KeywordInteger32x4Splat,
	KeywordInteger64,
	KeywordInteger64Add,
	KeywordInteger64And,
	KeywordInteger64Constant,
	KeywordInteger64CountLeadingZeros,
	KeywordInteger64CountTrailingZeros,
	KeywordInteger64DivideSigned,
	KeywordInteger64DivideUnsigned,
	KeywordInteger64Equals,
	KeywordInteger64EqualsZero,
	KeywordInteger64Extend16Signed,
	KeywordInteger64Extend32Signed,
	KeywordInteger64Extend8Signed,
	KeywordInteger64ExtendInteger32Signed,
	KeywordInteger64ExtendInteger32Unsigned,
	KeywordInteger64GreaterThanOrEqualsSigned,
	KeywordInteger64GreaterThanOrEqualsUnsigned,
	KeywordInteger64GreaterThanSigned,
	KeywordInteger64GreaterThanUnsigned,
	KeywordInteger64LessThanOrEqualsSigned,
	KeywordInteger64LessThanOrEqualsUnsigned,
	KeywordInteger64LessThanSigned,
	KeywordInteger64LessThanUnsigned,
	KeywordInteger64Load,
	KeywordInteger64Load16Signed,
	KeywordInteger64Load16Unsigned,
	KeywordInteger64Load32Signed,
	KeywordInteger64Load32Unsigned,
	KeywordInteger64Load8Signed,
	KeywordInteger64Load8Unsigned,
	KeywordInteger64Multiply,
	KeywordInteger64NotEqual,
	KeywordInteger64Or,
	KeywordInteger64PopCountNonZeros,
	KeywordInteger64ReinterpretFloat64,
	KeywordInteger64RemainderSigned,
	KeywordInteger64RemainderUnsigned,
	KeywordInteger64RotateLeft,
	KeywordInteger64RotateRight,
	KeywordInteger64ShiftLeft,
	KeywordInteger64ShiftRightSigned,
	KeywordInteger64ShiftRightUnsigned,
	KeywordInteger64Store,
	KeywordInteger64Store16,
	KeywordInteger64Store32,
	KeywordInteger64Store8,
	KeywordInteger64Subtract,
	KeywordInteger64TruncateFloat32Signed,
	KeywordInteger64TruncateFloat32Unsigned,
	KeywordInteger64TruncateFloat64Signed,
	KeywordInteger64TruncateFloat64Unsigned,
	KeywordInteger64TruncateSaturateFloat32Signed,
	KeywordInteger64TruncateSaturateFloat32Unsigned,
	KeywordInteger64TruncateSaturateFloat64Signed,
	KeywordInteger64TruncateSaturateFloat64Unsigned,
	KeywordInteger64Xor,
	KeywordInteger64x2,
	KeywordInteger64x2Splat,
	KeywordInteger8x16,
	KeywordInteger8x16Shuffle,
	KeywordInteger8x16Splat,
	KeywordInteger8x16Swizzle,
	KeywordItem,
	KeywordLocal,
	KeywordLocalGet,
	KeywordLocalSet,
	KeywordLocalTee,
	KeywordLoop,
	KeywordMemory,
	KeywordMemoryCopy,
	KeywordMemoryFill,
	KeywordMemoryGrow,
	KeywordMemoryInitiate,
	KeywordMemorySize,
	KeywordModule,
	KeywordMutable,
	KeywordNoOperation,
	KeywordOffset,
	KeywordOffsetEquals,
	KeywordParameter,
	KeywordReferenceFunction,
	KeywordReferenceIsNull,
	KeywordReferenceNull,
	KeywordResult,
	KeywordReturn,
	KeywordSelect,
	KeywordStart,
	KeywordTable,
	KeywordTableCopy,
	KeywordTableFill,
	KeywordTableGet,
	KeywordTableGrow,
	KeywordTableInitiate,
	KeywordTableSet,
	KeywordTableSize,
	KeywordThen,
	KeywordType,
	KeywordUnreachable,
	KeywordVector128,
	KeywordVector128Const,
	KeywordVector128Load,
	KeywordVector128Load16Lane,
	KeywordVector128Load16Splat,
	KeywordVector128Load16x4Signed,
	KeywordVector128Load16x4Unsigned,
	KeywordVector128Load32Lane,
	KeywordVector128Load32Splat,
	KeywordVector128Load32Zero,
	KeywordVector128Load32x2Signed,
	KeywordVector128Load32x2Unsigned,
	KeywordVector128Load64Lane,
	KeywordVector128Load64Splat,
	KeywordVector128Load64Zero,
	KeywordVector128Load8Lane,
	KeywordVector128Load8Splat,
	KeywordVector128Load8x8Signed,
	KeywordVector128Load8x8Unsigned,
	KeywordVector128Store,
	KeywordVector128Store16Lane,
	KeywordVector128Store32Lane,
	KeywordVector128Store64Lane,
	KeywordVector128Store8Lane,
	Number,
	OpenBracket,
	StringEndQuote,
	StringEscapeApostrophe,
	StringEscapeBackslash,
	StringEscapeHex,
	StringEscapeNewline,
	StringEscapeQuote,
	StringEscapeReturn,
	StringEscapeTab,
	StringEscapeUnicode,
	StringNonEscape,
	StringStartQuote,
	UnknownKeyword
}

export type TokenTag = TokenTagEnum
export type TokenTagName = keyof typeof TokenTagEnum

export namespace TokenTag {
	export type CloseBracket = TokenTagEnum.CloseBracket
	export type CommentBlock = TokenTagEnum.CommentBlock
	export type CommentLine = TokenTagEnum.CommentLine
	export type ErrorInvalidCharacter = TokenTagEnum.ErrorInvalidCharacter
	export type ErrorStringInvalidCharacter = TokenTagEnum.ErrorStringInvalidCharacter
	export type ErrorStringInvalidEscape = TokenTagEnum.ErrorStringInvalidEscape
	export type ErrorStringInvalidUnicodeEscape = TokenTagEnum.ErrorStringInvalidUnicodeEscape
	export type ErrorStringUnterminated = TokenTagEnum.ErrorStringUnterminated
	export type ErrorUnterminatedCommentBlock = TokenTagEnum.ErrorUnterminatedCommentBlock
	export type Identifier = TokenTagEnum.Identifier
	export type KeywordAlignEquals = TokenTagEnum.KeywordAlignEquals
	export type KeywordBlock = TokenTagEnum.KeywordBlock
	export type KeywordBranch = TokenTagEnum.KeywordBranch
	export type KeywordBranchIf = TokenTagEnum.KeywordBranchIf
	export type KeywordBranchTable = TokenTagEnum.KeywordBranchTable
	export type KeywordCall = TokenTagEnum.KeywordCall
	export type KeywordCallIndirect = TokenTagEnum.KeywordCallIndirect
	export type KeywordData = TokenTagEnum.KeywordData
	export type KeywordDataDrop = TokenTagEnum.KeywordDataDrop
	export type KeywordDeclare = TokenTagEnum.KeywordDeclare
	export type KeywordDrop = TokenTagEnum.KeywordDrop
	export type KeywordElement = TokenTagEnum.KeywordElement
	export type KeywordElementDrop = TokenTagEnum.KeywordElementDrop
	export type KeywordElse = TokenTagEnum.KeywordElse
	export type KeywordEnd = TokenTagEnum.KeywordEnd
	export type KeywordExport = TokenTagEnum.KeywordExport
	export type KeywordExternal = TokenTagEnum.KeywordExternal
	export type KeywordExternalReference = TokenTagEnum.KeywordExternalReference
	export type KeywordFloat32 = TokenTagEnum.KeywordFloat32
	export type KeywordFloat32Absolute = TokenTagEnum.KeywordFloat32Absolute
	export type KeywordFloat32Add = TokenTagEnum.KeywordFloat32Add
	export type KeywordFloat32Ceiling = TokenTagEnum.KeywordFloat32Ceiling
	export type KeywordFloat32Constant = TokenTagEnum.KeywordFloat32Constant
	export type KeywordFloat32ConvertInteger32Signed = TokenTagEnum.KeywordFloat32ConvertInteger32Signed
	export type KeywordFloat32ConvertInteger32Unsigned = TokenTagEnum.KeywordFloat32ConvertInteger32Unsigned
	export type KeywordFloat32ConvertInteger64Signed = TokenTagEnum.KeywordFloat32ConvertInteger64Signed
	export type KeywordFloat32ConvertInteger64Unsigned = TokenTagEnum.KeywordFloat32ConvertInteger64Unsigned
	export type KeywordFloat32CopySign = TokenTagEnum.KeywordFloat32CopySign
	export type KeywordFloat32DemoteFloat64 = TokenTagEnum.KeywordFloat32DemoteFloat64
	export type KeywordFloat32Divide = TokenTagEnum.KeywordFloat32Divide
	export type KeywordFloat32Equals = TokenTagEnum.KeywordFloat32Equals
	export type KeywordFloat32Floor = TokenTagEnum.KeywordFloat32Floor
	export type KeywordFloat32GreaterThan = TokenTagEnum.KeywordFloat32GreaterThan
	export type KeywordFloat32GreaterThanOrEquals = TokenTagEnum.KeywordFloat32GreaterThanOrEquals
	export type KeywordFloat32LessThan = TokenTagEnum.KeywordFloat32LessThan
	export type KeywordFloat32LessThanOrEquals = TokenTagEnum.KeywordFloat32LessThanOrEquals
	export type KeywordFloat32Load = TokenTagEnum.KeywordFloat32Load
	export type KeywordFloat32Maximum = TokenTagEnum.KeywordFloat32Maximum
	export type KeywordFloat32Minimum = TokenTagEnum.KeywordFloat32Minimum
	export type KeywordFloat32Multiply = TokenTagEnum.KeywordFloat32Multiply
	export type KeywordFloat32Nearest = TokenTagEnum.KeywordFloat32Nearest
	export type KeywordFloat32Negate = TokenTagEnum.KeywordFloat32Negate
	export type KeywordFloat32NotEquals = TokenTagEnum.KeywordFloat32NotEquals
	export type KeywordFloat32ReinterpretInteger32 = TokenTagEnum.KeywordFloat32ReinterpretInteger32
	export type KeywordFloat32SquareRoot = TokenTagEnum.KeywordFloat32SquareRoot
	export type KeywordFloat32Store = TokenTagEnum.KeywordFloat32Store
	export type KeywordFloat32Subtract = TokenTagEnum.KeywordFloat32Subtract
	export type KeywordFloat32Truncate = TokenTagEnum.KeywordFloat32Truncate
	export type KeywordFloat32x4 = TokenTagEnum.KeywordFloat32x4
	export type KeywordFloat64 = TokenTagEnum.KeywordFloat64
	export type KeywordFloat64Absolute = TokenTagEnum.KeywordFloat64Absolute
	export type KeywordFloat64Add = TokenTagEnum.KeywordFloat64Add
	export type KeywordFloat64Ceiling = TokenTagEnum.KeywordFloat64Ceiling
	export type KeywordFloat64Constant = TokenTagEnum.KeywordFloat64Constant
	export type KeywordFloat64ConvertInteger32Signed = TokenTagEnum.KeywordFloat64ConvertInteger32Signed
	export type KeywordFloat64ConvertInteger32Unsigned = TokenTagEnum.KeywordFloat64ConvertInteger32Unsigned
	export type KeywordFloat64ConvertInteger64Signed = TokenTagEnum.KeywordFloat64ConvertInteger64Signed
	export type KeywordFloat64ConvertInteger64Unsigned = TokenTagEnum.KeywordFloat64ConvertInteger64Unsigned
	export type KeywordFloat64CopySign = TokenTagEnum.KeywordFloat64CopySign
	export type KeywordFloat64Divide = TokenTagEnum.KeywordFloat64Divide
	export type KeywordFloat64Equals = TokenTagEnum.KeywordFloat64Equals
	export type KeywordFloat64Floor = TokenTagEnum.KeywordFloat64Floor
	export type KeywordFloat64GreaterThan = TokenTagEnum.KeywordFloat64GreaterThan
	export type KeywordFloat64GreaterThanOrEquals = TokenTagEnum.KeywordFloat64GreaterThanOrEquals
	export type KeywordFloat64LessThan = TokenTagEnum.KeywordFloat64LessThan
	export type KeywordFloat64LessThanOrEquals = TokenTagEnum.KeywordFloat64LessThanOrEquals
	export type KeywordFloat64Load = TokenTagEnum.KeywordFloat64Load
	export type KeywordFloat64Maximum = TokenTagEnum.KeywordFloat64Maximum
	export type KeywordFloat64Minimum = TokenTagEnum.KeywordFloat64Minimum
	export type KeywordFloat64Multiply = TokenTagEnum.KeywordFloat64Multiply
	export type KeywordFloat64Nearest = TokenTagEnum.KeywordFloat64Nearest
	export type KeywordFloat64Negate = TokenTagEnum.KeywordFloat64Negate
	export type KeywordFloat64NotEquals = TokenTagEnum.KeywordFloat64NotEquals
	export type KeywordFloat64PromoteFloat32 = TokenTagEnum.KeywordFloat64PromoteFloat32
	export type KeywordFloat64ReinterpretInteger64 = TokenTagEnum.KeywordFloat64ReinterpretInteger64
	export type KeywordFloat64SquareRoot = TokenTagEnum.KeywordFloat64SquareRoot
	export type KeywordFloat64Store = TokenTagEnum.KeywordFloat64Store
	export type KeywordFloat64Subtract = TokenTagEnum.KeywordFloat64Subtract
	export type KeywordFloat64Truncate = TokenTagEnum.KeywordFloat64Truncate
	export type KeywordFloat64x2 = TokenTagEnum.KeywordFloat64x2
	export type KeywordFunction = TokenTagEnum.KeywordFunction
	export type KeywordFunctionReference = TokenTagEnum.KeywordFunctionReference
	export type KeywordGlobal = TokenTagEnum.KeywordGlobal
	export type KeywordGlobalGet = TokenTagEnum.KeywordGlobalGet
	export type KeywordGlobalSet = TokenTagEnum.KeywordGlobalSet
	export type KeywordIf = TokenTagEnum.KeywordIf
	export type KeywordImport = TokenTagEnum.KeywordImport
	export type KeywordInteger16x8 = TokenTagEnum.KeywordInteger16x8
	export type KeywordInteger16x8Splat = TokenTagEnum.KeywordInteger16x8Splat
	export type KeywordInteger32 = TokenTagEnum.KeywordInteger32
	export type KeywordInteger32Add = TokenTagEnum.KeywordInteger32Add
	export type KeywordInteger32And = TokenTagEnum.KeywordInteger32And
	export type KeywordInteger32Constant = TokenTagEnum.KeywordInteger32Constant
	export type KeywordInteger32CountLeadingZeros = TokenTagEnum.KeywordInteger32CountLeadingZeros
	export type KeywordInteger32CountTrailingZeros = TokenTagEnum.KeywordInteger32CountTrailingZeros
	export type KeywordInteger32DivideSigned = TokenTagEnum.KeywordInteger32DivideSigned
	export type KeywordInteger32DivideUnsigned = TokenTagEnum.KeywordInteger32DivideUnsigned
	export type KeywordInteger32Equals = TokenTagEnum.KeywordInteger32Equals
	export type KeywordInteger32EqualsZero = TokenTagEnum.KeywordInteger32EqualsZero
	export type KeywordInteger32Extend16Signed = TokenTagEnum.KeywordInteger32Extend16Signed
	export type KeywordInteger32Extend8Signed = TokenTagEnum.KeywordInteger32Extend8Signed
	export type KeywordInteger32GreaterThanOrEqualsSigned = TokenTagEnum.KeywordInteger32GreaterThanOrEqualsSigned
	export type KeywordInteger32GreaterThanOrEqualsUnsigned = TokenTagEnum.KeywordInteger32GreaterThanOrEqualsUnsigned
	export type KeywordInteger32GreaterThanSigned = TokenTagEnum.KeywordInteger32GreaterThanSigned
	export type KeywordInteger32GreaterThanUnsigned = TokenTagEnum.KeywordInteger32GreaterThanUnsigned
	export type KeywordInteger32LessThanOrEqualsSigned = TokenTagEnum.KeywordInteger32LessThanOrEqualsSigned
	export type KeywordInteger32LessThanOrEqualsUnsigned = TokenTagEnum.KeywordInteger32LessThanOrEqualsUnsigned
	export type KeywordInteger32LessThanSigned = TokenTagEnum.KeywordInteger32LessThanSigned
	export type KeywordInteger32LessThanUnsigned = TokenTagEnum.KeywordInteger32LessThanUnsigned
	export type KeywordInteger32Load = TokenTagEnum.KeywordInteger32Load
	export type KeywordInteger32Load16Signed = TokenTagEnum.KeywordInteger32Load16Signed
	export type KeywordInteger32Load16Unsigned = TokenTagEnum.KeywordInteger32Load16Unsigned
	export type KeywordInteger32Load8Signed = TokenTagEnum.KeywordInteger32Load8Signed
	export type KeywordInteger32Load8Unsigned = TokenTagEnum.KeywordInteger32Load8Unsigned
	export type KeywordInteger32Multiply = TokenTagEnum.KeywordInteger32Multiply
	export type KeywordInteger32NotEqual = TokenTagEnum.KeywordInteger32NotEqual
	export type KeywordInteger32Or = TokenTagEnum.KeywordInteger32Or
	export type KeywordInteger32PopCountNonZeros = TokenTagEnum.KeywordInteger32PopCountNonZeros
	export type KeywordInteger32ReinterpretFloat32 = TokenTagEnum.KeywordInteger32ReinterpretFloat32
	export type KeywordInteger32RemainderSigned = TokenTagEnum.KeywordInteger32RemainderSigned
	export type KeywordInteger32RemainderUnsigned = TokenTagEnum.KeywordInteger32RemainderUnsigned
	export type KeywordInteger32RotateLeft = TokenTagEnum.KeywordInteger32RotateLeft
	export type KeywordInteger32RotateRight = TokenTagEnum.KeywordInteger32RotateRight
	export type KeywordInteger32ShiftLeft = TokenTagEnum.KeywordInteger32ShiftLeft
	export type KeywordInteger32ShiftRightSigned = TokenTagEnum.KeywordInteger32ShiftRightSigned
	export type KeywordInteger32ShiftRightUnsigned = TokenTagEnum.KeywordInteger32ShiftRightUnsigned
	export type KeywordInteger32Store = TokenTagEnum.KeywordInteger32Store
	export type KeywordInteger32Store16 = TokenTagEnum.KeywordInteger32Store16
	export type KeywordInteger32Store8 = TokenTagEnum.KeywordInteger32Store8
	export type KeywordInteger32Subtract = TokenTagEnum.KeywordInteger32Subtract
	export type KeywordInteger32TruncateFloat32Signed = TokenTagEnum.KeywordInteger32TruncateFloat32Signed
	export type KeywordInteger32TruncateFloat32Unsigned = TokenTagEnum.KeywordInteger32TruncateFloat32Unsigned
	export type KeywordInteger32TruncateFloat64Signed = TokenTagEnum.KeywordInteger32TruncateFloat64Signed
	export type KeywordInteger32TruncateFloat64Unsigned = TokenTagEnum.KeywordInteger32TruncateFloat64Unsigned
	export type KeywordInteger32TruncateSaturateFloat32Signed = TokenTagEnum.KeywordInteger32TruncateSaturateFloat32Signed
	export type KeywordInteger32TruncateSaturateFloat32Unsigned = TokenTagEnum.KeywordInteger32TruncateSaturateFloat32Unsigned
	export type KeywordInteger32TruncateSaturateFloat64Signed = TokenTagEnum.KeywordInteger32TruncateSaturateFloat64Signed
	export type KeywordInteger32TruncateSaturateFloat64Unsigned = TokenTagEnum.KeywordInteger32TruncateSaturateFloat64Unsigned
	export type KeywordInteger32WrapInteger64 = TokenTagEnum.KeywordInteger32WrapInteger64
	export type KeywordInteger32Xor = TokenTagEnum.KeywordInteger32Xor
	export type KeywordInteger32x4 = TokenTagEnum.KeywordInteger32x4
	export type KeywordInteger32x4Splat = TokenTagEnum.KeywordInteger32x4Splat
	export type KeywordInteger64 = TokenTagEnum.KeywordInteger64
	export type KeywordInteger64Add = TokenTagEnum.KeywordInteger64Add
	export type KeywordInteger64And = TokenTagEnum.KeywordInteger64And
	export type KeywordInteger64Constant = TokenTagEnum.KeywordInteger64Constant
	export type KeywordInteger64CountLeadingZeros = TokenTagEnum.KeywordInteger64CountLeadingZeros
	export type KeywordInteger64CountTrailingZeros = TokenTagEnum.KeywordInteger64CountTrailingZeros
	export type KeywordInteger64DivideSigned = TokenTagEnum.KeywordInteger64DivideSigned
	export type KeywordInteger64DivideUnsigned = TokenTagEnum.KeywordInteger64DivideUnsigned
	export type KeywordInteger64Equals = TokenTagEnum.KeywordInteger64Equals
	export type KeywordInteger64EqualsZero = TokenTagEnum.KeywordInteger64EqualsZero
	export type KeywordInteger64Extend16Signed = TokenTagEnum.KeywordInteger64Extend16Signed
	export type KeywordInteger64Extend32Signed = TokenTagEnum.KeywordInteger64Extend32Signed
	export type KeywordInteger64Extend8Signed = TokenTagEnum.KeywordInteger64Extend8Signed
	export type KeywordInteger64ExtendInteger32Signed = TokenTagEnum.KeywordInteger64ExtendInteger32Signed
	export type KeywordInteger64ExtendInteger32Unsigned = TokenTagEnum.KeywordInteger64ExtendInteger32Unsigned
	export type KeywordInteger64GreaterThanOrEqualsSigned = TokenTagEnum.KeywordInteger64GreaterThanOrEqualsSigned
	export type KeywordInteger64GreaterThanOrEqualsUnsigned = TokenTagEnum.KeywordInteger64GreaterThanOrEqualsUnsigned
	export type KeywordInteger64GreaterThanSigned = TokenTagEnum.KeywordInteger64GreaterThanSigned
	export type KeywordInteger64GreaterThanUnsigned = TokenTagEnum.KeywordInteger64GreaterThanUnsigned
	export type KeywordInteger64LessThanOrEqualsSigned = TokenTagEnum.KeywordInteger64LessThanOrEqualsSigned
	export type KeywordInteger64LessThanOrEqualsUnsigned = TokenTagEnum.KeywordInteger64LessThanOrEqualsUnsigned
	export type KeywordInteger64LessThanSigned = TokenTagEnum.KeywordInteger64LessThanSigned
	export type KeywordInteger64LessThanUnsigned = TokenTagEnum.KeywordInteger64LessThanUnsigned
	export type KeywordInteger64Load = TokenTagEnum.KeywordInteger64Load
	export type KeywordInteger64Load16Signed = TokenTagEnum.KeywordInteger64Load16Signed
	export type KeywordInteger64Load16Unsigned = TokenTagEnum.KeywordInteger64Load16Unsigned
	export type KeywordInteger64Load32Signed = TokenTagEnum.KeywordInteger64Load32Signed
	export type KeywordInteger64Load32Unsigned = TokenTagEnum.KeywordInteger64Load32Unsigned
	export type KeywordInteger64Load8Signed = TokenTagEnum.KeywordInteger64Load8Signed
	export type KeywordInteger64Load8Unsigned = TokenTagEnum.KeywordInteger64Load8Unsigned
	export type KeywordInteger64Multiply = TokenTagEnum.KeywordInteger64Multiply
	export type KeywordInteger64NotEqual = TokenTagEnum.KeywordInteger64NotEqual
	export type KeywordInteger64Or = TokenTagEnum.KeywordInteger64Or
	export type KeywordInteger64PopCountNonZeros = TokenTagEnum.KeywordInteger64PopCountNonZeros
	export type KeywordInteger64ReinterpretFloat64 = TokenTagEnum.KeywordInteger64ReinterpretFloat64
	export type KeywordInteger64RemainderSigned = TokenTagEnum.KeywordInteger64RemainderSigned
	export type KeywordInteger64RemainderUnsigned = TokenTagEnum.KeywordInteger64RemainderUnsigned
	export type KeywordInteger64RotateLeft = TokenTagEnum.KeywordInteger64RotateLeft
	export type KeywordInteger64RotateRight = TokenTagEnum.KeywordInteger64RotateRight
	export type KeywordInteger64ShiftLeft = TokenTagEnum.KeywordInteger64ShiftLeft
	export type KeywordInteger64ShiftRightSigned = TokenTagEnum.KeywordInteger64ShiftRightSigned
	export type KeywordInteger64ShiftRightUnsigned = TokenTagEnum.KeywordInteger64ShiftRightUnsigned
	export type KeywordInteger64Store = TokenTagEnum.KeywordInteger64Store
	export type KeywordInteger64Store16 = TokenTagEnum.KeywordInteger64Store16
	export type KeywordInteger64Store32 = TokenTagEnum.KeywordInteger64Store32
	export type KeywordInteger64Store8 = TokenTagEnum.KeywordInteger64Store8
	export type KeywordInteger64Subtract = TokenTagEnum.KeywordInteger64Subtract
	export type KeywordInteger64TruncateFloat32Signed = TokenTagEnum.KeywordInteger64TruncateFloat32Signed
	export type KeywordInteger64TruncateFloat32Unsigned = TokenTagEnum.KeywordInteger64TruncateFloat32Unsigned
	export type KeywordInteger64TruncateFloat64Signed = TokenTagEnum.KeywordInteger64TruncateFloat64Signed
	export type KeywordInteger64TruncateFloat64Unsigned = TokenTagEnum.KeywordInteger64TruncateFloat64Unsigned
	export type KeywordInteger64TruncateSaturateFloat32Signed = TokenTagEnum.KeywordInteger64TruncateSaturateFloat32Signed
	export type KeywordInteger64TruncateSaturateFloat32Unsigned = TokenTagEnum.KeywordInteger64TruncateSaturateFloat32Unsigned
	export type KeywordInteger64TruncateSaturateFloat64Signed = TokenTagEnum.KeywordInteger64TruncateSaturateFloat64Signed
	export type KeywordInteger64TruncateSaturateFloat64Unsigned = TokenTagEnum.KeywordInteger64TruncateSaturateFloat64Unsigned
	export type KeywordInteger64Xor = TokenTagEnum.KeywordInteger64Xor
	export type KeywordInteger64x2 = TokenTagEnum.KeywordInteger64x2
	export type KeywordInteger64x2Splat = TokenTagEnum.KeywordInteger64x2Splat
	export type KeywordInteger8x16 = TokenTagEnum.KeywordInteger8x16
	export type KeywordInteger8x16Shuffle = TokenTagEnum.KeywordInteger8x16Shuffle
	export type KeywordInteger8x16Splat = TokenTagEnum.KeywordInteger8x16Splat
	export type KeywordInteger8x16Swizzle = TokenTagEnum.KeywordInteger8x16Swizzle
	export type KeywordItem = TokenTagEnum.KeywordItem
	export type KeywordLocal = TokenTagEnum.KeywordLocal
	export type KeywordLocalGet = TokenTagEnum.KeywordLocalGet
	export type KeywordLocalSet = TokenTagEnum.KeywordLocalSet
	export type KeywordLocalTee = TokenTagEnum.KeywordLocalTee
	export type KeywordLoop = TokenTagEnum.KeywordLoop
	export type KeywordMemory = TokenTagEnum.KeywordMemory
	export type KeywordMemoryCopy = TokenTagEnum.KeywordMemoryCopy
	export type KeywordMemoryFill = TokenTagEnum.KeywordMemoryFill
	export type KeywordMemoryGrow = TokenTagEnum.KeywordMemoryGrow
	export type KeywordMemoryInitiate = TokenTagEnum.KeywordMemoryInitiate
	export type KeywordMemorySize = TokenTagEnum.KeywordMemorySize
	export type KeywordModule = TokenTagEnum.KeywordModule
	export type KeywordMutable = TokenTagEnum.KeywordMutable
	export type KeywordNoOperation = TokenTagEnum.KeywordNoOperation
	export type KeywordOffset = TokenTagEnum.KeywordOffset
	export type KeywordOffsetEquals = TokenTagEnum.KeywordOffsetEquals
	export type KeywordParameter = TokenTagEnum.KeywordParameter
	export type KeywordReferenceFunction = TokenTagEnum.KeywordReferenceFunction
	export type KeywordReferenceIsNull = TokenTagEnum.KeywordReferenceIsNull
	export type KeywordReferenceNull = TokenTagEnum.KeywordReferenceNull
	export type KeywordResult = TokenTagEnum.KeywordResult
	export type KeywordReturn = TokenTagEnum.KeywordReturn
	export type KeywordSelect = TokenTagEnum.KeywordSelect
	export type KeywordStart = TokenTagEnum.KeywordStart
	export type KeywordTable = TokenTagEnum.KeywordTable
	export type KeywordTableCopy = TokenTagEnum.KeywordTableCopy
	export type KeywordTableFill = TokenTagEnum.KeywordTableFill
	export type KeywordTableGet = TokenTagEnum.KeywordTableGet
	export type KeywordTableGrow = TokenTagEnum.KeywordTableGrow
	export type KeywordTableInitiate = TokenTagEnum.KeywordTableInitiate
	export type KeywordTableSet = TokenTagEnum.KeywordTableSet
	export type KeywordTableSize = TokenTagEnum.KeywordTableSize
	export type KeywordThen = TokenTagEnum.KeywordThen
	export type KeywordType = TokenTagEnum.KeywordType
	export type KeywordUnreachable = TokenTagEnum.KeywordUnreachable
	export type KeywordVector128 = TokenTagEnum.KeywordVector128
	export type KeywordVector128Const = TokenTagEnum.KeywordVector128Const
	export type KeywordVector128Load = TokenTagEnum.KeywordVector128Load
	export type KeywordVector128Load16Lane = TokenTagEnum.KeywordVector128Load16Lane
	export type KeywordVector128Load16Splat = TokenTagEnum.KeywordVector128Load16Splat
	export type KeywordVector128Load16x4Signed = TokenTagEnum.KeywordVector128Load16x4Signed
	export type KeywordVector128Load16x4Unsigned = TokenTagEnum.KeywordVector128Load16x4Unsigned
	export type KeywordVector128Load32Lane = TokenTagEnum.KeywordVector128Load32Lane
	export type KeywordVector128Load32Splat = TokenTagEnum.KeywordVector128Load32Splat
	export type KeywordVector128Load32Zero = TokenTagEnum.KeywordVector128Load32Zero
	export type KeywordVector128Load32x2Signed = TokenTagEnum.KeywordVector128Load32x2Signed
	export type KeywordVector128Load32x2Unsigned = TokenTagEnum.KeywordVector128Load32x2Unsigned
	export type KeywordVector128Load64Lane = TokenTagEnum.KeywordVector128Load64Lane
	export type KeywordVector128Load64Splat = TokenTagEnum.KeywordVector128Load64Splat
	export type KeywordVector128Load64Zero = TokenTagEnum.KeywordVector128Load64Zero
	export type KeywordVector128Load8Lane = TokenTagEnum.KeywordVector128Load8Lane
	export type KeywordVector128Load8Splat = TokenTagEnum.KeywordVector128Load8Splat
	export type KeywordVector128Load8x8Signed = TokenTagEnum.KeywordVector128Load8x8Signed
	export type KeywordVector128Load8x8Unsigned = TokenTagEnum.KeywordVector128Load8x8Unsigned
	export type KeywordVector128Store = TokenTagEnum.KeywordVector128Store
	export type KeywordVector128Store16Lane = TokenTagEnum.KeywordVector128Store16Lane
	export type KeywordVector128Store32Lane = TokenTagEnum.KeywordVector128Store32Lane
	export type KeywordVector128Store64Lane = TokenTagEnum.KeywordVector128Store64Lane
	export type KeywordVector128Store8Lane = TokenTagEnum.KeywordVector128Store8Lane
	export type Number = TokenTagEnum.Number
	export type OpenBracket = TokenTagEnum.OpenBracket
	export type StringEndQuote = TokenTagEnum.StringEndQuote
	export type StringEscapeApostrophe = TokenTagEnum.StringEscapeApostrophe
	export type StringEscapeBackslash = TokenTagEnum.StringEscapeBackslash
	export type StringEscapeHex = TokenTagEnum.StringEscapeHex
	export type StringEscapeNewline = TokenTagEnum.StringEscapeNewline
	export type StringEscapeQuote = TokenTagEnum.StringEscapeQuote
	export type StringEscapeReturn = TokenTagEnum.StringEscapeReturn
	export type StringEscapeTab = TokenTagEnum.StringEscapeTab
	export type StringEscapeUnicode = TokenTagEnum.StringEscapeUnicode
	export type StringNonEscape = TokenTagEnum.StringNonEscape
	export type StringStartQuote = TokenTagEnum.StringStartQuote
	export type UnknownKeyword = TokenTagEnum.UnknownKeyword
}

export const TokenTag: { [K in TokenTagName]: typeof TokenTagEnum[K] } = {
	CloseBracket: 1,
	CommentBlock: 2,
	CommentLine: 3,
	ErrorInvalidCharacter: 4,
	ErrorStringInvalidCharacter: 5,
	ErrorStringInvalidEscape: 6,
	ErrorStringInvalidUnicodeEscape: 7,
	ErrorStringUnterminated: 8,
	ErrorUnterminatedCommentBlock: 9,
	Identifier: 10,
	KeywordAlignEquals: 11,
	KeywordBlock: 12,
	KeywordBranch: 13,
	KeywordBranchIf: 14,
	KeywordBranchTable: 15,
	KeywordCall: 16,
	KeywordCallIndirect: 17,
	KeywordData: 18,
	KeywordDataDrop: 19,
	KeywordDeclare: 20,
	KeywordDrop: 21,
	KeywordElement: 22,
	KeywordElementDrop: 23,
	KeywordElse: 24,
	KeywordEnd: 25,
	KeywordExport: 26,
	KeywordExternal: 27,
	KeywordExternalReference: 28,
	KeywordFloat32: 29,
	KeywordFloat32Absolute: 30,
	KeywordFloat32Add: 31,
	KeywordFloat32Ceiling: 32,
	KeywordFloat32Constant: 33,
	KeywordFloat32ConvertInteger32Signed: 34,
	KeywordFloat32ConvertInteger32Unsigned: 35,
	KeywordFloat32ConvertInteger64Signed: 36,
	KeywordFloat32ConvertInteger64Unsigned: 37,
	KeywordFloat32CopySign: 38,
	KeywordFloat32DemoteFloat64: 39,
	KeywordFloat32Divide: 40,
	KeywordFloat32Equals: 41,
	KeywordFloat32Floor: 42,
	KeywordFloat32GreaterThan: 43,
	KeywordFloat32GreaterThanOrEquals: 44,
	KeywordFloat32LessThan: 45,
	KeywordFloat32LessThanOrEquals: 46,
	KeywordFloat32Load: 47,
	KeywordFloat32Maximum: 48,
	KeywordFloat32Minimum: 49,
	KeywordFloat32Multiply: 50,
	KeywordFloat32Nearest: 51,
	KeywordFloat32Negate: 52,
	KeywordFloat32NotEquals: 53,
	KeywordFloat32ReinterpretInteger32: 54,
	KeywordFloat32SquareRoot: 55,
	KeywordFloat32Store: 56,
	KeywordFloat32Subtract: 57,
	KeywordFloat32Truncate: 58,
	KeywordFloat32x4: 59,
	KeywordFloat64: 60,
	KeywordFloat64Absolute: 61,
	KeywordFloat64Add: 62,
	KeywordFloat64Ceiling: 63,
	KeywordFloat64Constant: 64,
	KeywordFloat64ConvertInteger32Signed: 65,
	KeywordFloat64ConvertInteger32Unsigned: 66,
	KeywordFloat64ConvertInteger64Signed: 67,
	KeywordFloat64ConvertInteger64Unsigned: 68,
	KeywordFloat64CopySign: 69,
	KeywordFloat64Divide: 70,
	KeywordFloat64Equals: 71,
	KeywordFloat64Floor: 72,
	KeywordFloat64GreaterThan: 73,
	KeywordFloat64GreaterThanOrEquals: 74,
	KeywordFloat64LessThan: 75,
	KeywordFloat64LessThanOrEquals: 76,
	KeywordFloat64Load: 77,
	KeywordFloat64Maximum: 78,
	KeywordFloat64Minimum: 79,
	KeywordFloat64Multiply: 80,
	KeywordFloat64Nearest: 81,
	KeywordFloat64Negate: 82,
	KeywordFloat64NotEquals: 83,
	KeywordFloat64PromoteFloat32: 84,
	KeywordFloat64ReinterpretInteger64: 85,
	KeywordFloat64SquareRoot: 86,
	KeywordFloat64Store: 87,
	KeywordFloat64Subtract: 88,
	KeywordFloat64Truncate: 89,
	KeywordFloat64x2: 90,
	KeywordFunction: 91,
	KeywordFunctionReference: 92,
	KeywordGlobal: 93,
	KeywordGlobalGet: 94,
	KeywordGlobalSet: 95,
	KeywordIf: 96,
	KeywordImport: 97,
	KeywordInteger16x8: 98,
	KeywordInteger16x8Splat: 99,
	KeywordInteger32: 100,
	KeywordInteger32Add: 101,
	KeywordInteger32And: 102,
	KeywordInteger32Constant: 103,
	KeywordInteger32CountLeadingZeros: 104,
	KeywordInteger32CountTrailingZeros: 105,
	KeywordInteger32DivideSigned: 106,
	KeywordInteger32DivideUnsigned: 107,
	KeywordInteger32Equals: 108,
	KeywordInteger32EqualsZero: 109,
	KeywordInteger32Extend16Signed: 110,
	KeywordInteger32Extend8Signed: 111,
	KeywordInteger32GreaterThanOrEqualsSigned: 112,
	KeywordInteger32GreaterThanOrEqualsUnsigned: 113,
	KeywordInteger32GreaterThanSigned: 114,
	KeywordInteger32GreaterThanUnsigned: 115,
	KeywordInteger32LessThanOrEqualsSigned: 116,
	KeywordInteger32LessThanOrEqualsUnsigned: 117,
	KeywordInteger32LessThanSigned: 118,
	KeywordInteger32LessThanUnsigned: 119,
	KeywordInteger32Load: 120,
	KeywordInteger32Load16Signed: 121,
	KeywordInteger32Load16Unsigned: 122,
	KeywordInteger32Load8Signed: 123,
	KeywordInteger32Load8Unsigned: 124,
	KeywordInteger32Multiply: 125,
	KeywordInteger32NotEqual: 126,
	KeywordInteger32Or: 127,
	KeywordInteger32PopCountNonZeros: 128,
	KeywordInteger32ReinterpretFloat32: 129,
	KeywordInteger32RemainderSigned: 130,
	KeywordInteger32RemainderUnsigned: 131,
	KeywordInteger32RotateLeft: 132,
	KeywordInteger32RotateRight: 133,
	KeywordInteger32ShiftLeft: 134,
	KeywordInteger32ShiftRightSigned: 135,
	KeywordInteger32ShiftRightUnsigned: 136,
	KeywordInteger32Store: 137,
	KeywordInteger32Store16: 138,
	KeywordInteger32Store8: 139,
	KeywordInteger32Subtract: 140,
	KeywordInteger32TruncateFloat32Signed: 141,
	KeywordInteger32TruncateFloat32Unsigned: 142,
	KeywordInteger32TruncateFloat64Signed: 143,
	KeywordInteger32TruncateFloat64Unsigned: 144,
	KeywordInteger32TruncateSaturateFloat32Signed: 145,
	KeywordInteger32TruncateSaturateFloat32Unsigned: 146,
	KeywordInteger32TruncateSaturateFloat64Signed: 147,
	KeywordInteger32TruncateSaturateFloat64Unsigned: 148,
	KeywordInteger32WrapInteger64: 149,
	KeywordInteger32Xor: 150,
	KeywordInteger32x4: 151,
	KeywordInteger32x4Splat: 152,
	KeywordInteger64: 153,
	KeywordInteger64Add: 154,
	KeywordInteger64And: 155,
	KeywordInteger64Constant: 156,
	KeywordInteger64CountLeadingZeros: 157,
	KeywordInteger64CountTrailingZeros: 158,
	KeywordInteger64DivideSigned: 159,
	KeywordInteger64DivideUnsigned: 160,
	KeywordInteger64Equals: 161,
	KeywordInteger64EqualsZero: 162,
	KeywordInteger64Extend16Signed: 163,
	KeywordInteger64Extend32Signed: 164,
	KeywordInteger64Extend8Signed: 165,
	KeywordInteger64ExtendInteger32Signed: 166,
	KeywordInteger64ExtendInteger32Unsigned: 167,
	KeywordInteger64GreaterThanOrEqualsSigned: 168,
	KeywordInteger64GreaterThanOrEqualsUnsigned: 169,
	KeywordInteger64GreaterThanSigned: 170,
	KeywordInteger64GreaterThanUnsigned: 171,
	KeywordInteger64LessThanOrEqualsSigned: 172,
	KeywordInteger64LessThanOrEqualsUnsigned: 173,
	KeywordInteger64LessThanSigned: 174,
	KeywordInteger64LessThanUnsigned: 175,
	KeywordInteger64Load: 176,
	KeywordInteger64Load16Signed: 177,
	KeywordInteger64Load16Unsigned: 178,
	KeywordInteger64Load32Signed: 179,
	KeywordInteger64Load32Unsigned: 180,
	KeywordInteger64Load8Signed: 181,
	KeywordInteger64Load8Unsigned: 182,
	KeywordInteger64Multiply: 183,
	KeywordInteger64NotEqual: 184,
	KeywordInteger64Or: 185,
	KeywordInteger64PopCountNonZeros: 186,
	KeywordInteger64ReinterpretFloat64: 187,
	KeywordInteger64RemainderSigned: 188,
	KeywordInteger64RemainderUnsigned: 189,
	KeywordInteger64RotateLeft: 190,
	KeywordInteger64RotateRight: 191,
	KeywordInteger64ShiftLeft: 192,
	KeywordInteger64ShiftRightSigned: 193,
	KeywordInteger64ShiftRightUnsigned: 194,
	KeywordInteger64Store: 195,
	KeywordInteger64Store16: 196,
	KeywordInteger64Store32: 197,
	KeywordInteger64Store8: 198,
	KeywordInteger64Subtract: 199,
	KeywordInteger64TruncateFloat32Signed: 200,
	KeywordInteger64TruncateFloat32Unsigned: 201,
	KeywordInteger64TruncateFloat64Signed: 202,
	KeywordInteger64TruncateFloat64Unsigned: 203,
	KeywordInteger64TruncateSaturateFloat32Signed: 204,
	KeywordInteger64TruncateSaturateFloat32Unsigned: 205,
	KeywordInteger64TruncateSaturateFloat64Signed: 206,
	KeywordInteger64TruncateSaturateFloat64Unsigned: 207,
	KeywordInteger64Xor: 208,
	KeywordInteger64x2: 209,
	KeywordInteger64x2Splat: 210,
	KeywordInteger8x16: 211,
	KeywordInteger8x16Shuffle: 212,
	KeywordInteger8x16Splat: 213,
	KeywordInteger8x16Swizzle: 214,
	KeywordItem: 215,
	KeywordLocal: 216,
	KeywordLocalGet: 217,
	KeywordLocalSet: 218,
	KeywordLocalTee: 219,
	KeywordLoop: 220,
	KeywordMemory: 221,
	KeywordMemoryCopy: 222,
	KeywordMemoryFill: 223,
	KeywordMemoryGrow: 224,
	KeywordMemoryInitiate: 225,
	KeywordMemorySize: 226,
	KeywordModule: 227,
	KeywordMutable: 228,
	KeywordNoOperation: 229,
	KeywordOffset: 230,
	KeywordOffsetEquals: 231,
	KeywordParameter: 232,
	KeywordReferenceFunction: 233,
	KeywordReferenceIsNull: 234,
	KeywordReferenceNull: 235,
	KeywordResult: 236,
	KeywordReturn: 237,
	KeywordSelect: 238,
	KeywordStart: 239,
	KeywordTable: 240,
	KeywordTableCopy: 241,
	KeywordTableFill: 242,
	KeywordTableGet: 243,
	KeywordTableGrow: 244,
	KeywordTableInitiate: 245,
	KeywordTableSet: 246,
	KeywordTableSize: 247,
	KeywordThen: 248,
	KeywordType: 249,
	KeywordUnreachable: 250,
	KeywordVector128: 251,
	KeywordVector128Const: 252,
	KeywordVector128Load: 253,
	KeywordVector128Load16Lane: 254,
	KeywordVector128Load16Splat: 255,
	KeywordVector128Load16x4Signed: 256,
	KeywordVector128Load16x4Unsigned: 257,
	KeywordVector128Load32Lane: 258,
	KeywordVector128Load32Splat: 259,
	KeywordVector128Load32Zero: 260,
	KeywordVector128Load32x2Signed: 261,
	KeywordVector128Load32x2Unsigned: 262,
	KeywordVector128Load64Lane: 263,
	KeywordVector128Load64Splat: 264,
	KeywordVector128Load64Zero: 265,
	KeywordVector128Load8Lane: 266,
	KeywordVector128Load8Splat: 267,
	KeywordVector128Load8x8Signed: 268,
	KeywordVector128Load8x8Unsigned: 269,
	KeywordVector128Store: 270,
	KeywordVector128Store16Lane: 271,
	KeywordVector128Store32Lane: 272,
	KeywordVector128Store64Lane: 273,
	KeywordVector128Store8Lane: 274,
	Number: 275,
	OpenBracket: 276,
	StringEndQuote: 277,
	StringEscapeApostrophe: 278,
	StringEscapeBackslash: 279,
	StringEscapeHex: 280,
	StringEscapeNewline: 281,
	StringEscapeQuote: 282,
	StringEscapeReturn: 283,
	StringEscapeTab: 284,
	StringEscapeUnicode: 285,
	StringNonEscape: 286,
	StringStartQuote: 287,
	UnknownKeyword: 288,
}

export const TokenTagsToNames: Record<number, string> = {
	1: "CloseBracket",
	2: "CommentBlock",
	3: "CommentLine",
	4: "ErrorInvalidCharacter",
	5: "ErrorStringInvalidCharacter",
	6: "ErrorStringInvalidEscape",
	7: "ErrorStringInvalidUnicodeEscape",
	8: "ErrorStringUnterminated",
	9: "ErrorUnterminatedCommentBlock",
	10: "Identifier",
	11: "KeywordAlignEquals",
	12: "KeywordBlock",
	13: "KeywordBranch",
	14: "KeywordBranchIf",
	15: "KeywordBranchTable",
	16: "KeywordCall",
	17: "KeywordCallIndirect",
	18: "KeywordData",
	19: "KeywordDataDrop",
	20: "KeywordDeclare",
	21: "KeywordDrop",
	22: "KeywordElement",
	23: "KeywordElementDrop",
	24: "KeywordElse",
	25: "KeywordEnd",
	26: "KeywordExport",
	27: "KeywordExternal",
	28: "KeywordExternalReference",
	29: "KeywordFloat32",
	30: "KeywordFloat32Absolute",
	31: "KeywordFloat32Add",
	32: "KeywordFloat32Ceiling",
	33: "KeywordFloat32Constant",
	34: "KeywordFloat32ConvertInteger32Signed",
	35: "KeywordFloat32ConvertInteger32Unsigned",
	36: "KeywordFloat32ConvertInteger64Signed",
	37: "KeywordFloat32ConvertInteger64Unsigned",
	38: "KeywordFloat32CopySign",
	39: "KeywordFloat32DemoteFloat64",
	40: "KeywordFloat32Divide",
	41: "KeywordFloat32Equals",
	42: "KeywordFloat32Floor",
	43: "KeywordFloat32GreaterThan",
	44: "KeywordFloat32GreaterThanOrEquals",
	45: "KeywordFloat32LessThan",
	46: "KeywordFloat32LessThanOrEquals",
	47: "KeywordFloat32Load",
	48: "KeywordFloat32Maximum",
	49: "KeywordFloat32Minimum",
	50: "KeywordFloat32Multiply",
	51: "KeywordFloat32Nearest",
	52: "KeywordFloat32Negate",
	53: "KeywordFloat32NotEquals",
	54: "KeywordFloat32ReinterpretInteger32",
	55: "KeywordFloat32SquareRoot",
	56: "KeywordFloat32Store",
	57: "KeywordFloat32Subtract",
	58: "KeywordFloat32Truncate",
	59: "KeywordFloat32x4",
	60: "KeywordFloat64",
	61: "KeywordFloat64Absolute",
	62: "KeywordFloat64Add",
	63: "KeywordFloat64Ceiling",
	64: "KeywordFloat64Constant",
	65: "KeywordFloat64ConvertInteger32Signed",
	66: "KeywordFloat64ConvertInteger32Unsigned",
	67: "KeywordFloat64ConvertInteger64Signed",
	68: "KeywordFloat64ConvertInteger64Unsigned",
	69: "KeywordFloat64CopySign",
	70: "KeywordFloat64Divide",
	71: "KeywordFloat64Equals",
	72: "KeywordFloat64Floor",
	73: "KeywordFloat64GreaterThan",
	74: "KeywordFloat64GreaterThanOrEquals",
	75: "KeywordFloat64LessThan",
	76: "KeywordFloat64LessThanOrEquals",
	77: "KeywordFloat64Load",
	78: "KeywordFloat64Maximum",
	79: "KeywordFloat64Minimum",
	80: "KeywordFloat64Multiply",
	81: "KeywordFloat64Nearest",
	82: "KeywordFloat64Negate",
	83: "KeywordFloat64NotEquals",
	84: "KeywordFloat64PromoteFloat32",
	85: "KeywordFloat64ReinterpretInteger64",
	86: "KeywordFloat64SquareRoot",
	87: "KeywordFloat64Store",
	88: "KeywordFloat64Subtract",
	89: "KeywordFloat64Truncate",
	90: "KeywordFloat64x2",
	91: "KeywordFunction",
	92: "KeywordFunctionReference",
	93: "KeywordGlobal",
	94: "KeywordGlobalGet",
	95: "KeywordGlobalSet",
	96: "KeywordIf",
	97: "KeywordImport",
	98: "KeywordInteger16x8",
	99: "KeywordInteger16x8Splat",
	100: "KeywordInteger32",
	101: "KeywordInteger32Add",
	102: "KeywordInteger32And",
	103: "KeywordInteger32Constant",
	104: "KeywordInteger32CountLeadingZeros",
	105: "KeywordInteger32CountTrailingZeros",
	106: "KeywordInteger32DivideSigned",
	107: "KeywordInteger32DivideUnsigned",
	108: "KeywordInteger32Equals",
	109: "KeywordInteger32EqualsZero",
	110: "KeywordInteger32Extend16Signed",
	111: "KeywordInteger32Extend8Signed",
	112: "KeywordInteger32GreaterThanOrEqualsSigned",
	113: "KeywordInteger32GreaterThanOrEqualsUnsigned",
	114: "KeywordInteger32GreaterThanSigned",
	115: "KeywordInteger32GreaterThanUnsigned",
	116: "KeywordInteger32LessThanOrEqualsSigned",
	117: "KeywordInteger32LessThanOrEqualsUnsigned",
	118: "KeywordInteger32LessThanSigned",
	119: "KeywordInteger32LessThanUnsigned",
	120: "KeywordInteger32Load",
	121: "KeywordInteger32Load16Signed",
	122: "KeywordInteger32Load16Unsigned",
	123: "KeywordInteger32Load8Signed",
	124: "KeywordInteger32Load8Unsigned",
	125: "KeywordInteger32Multiply",
	126: "KeywordInteger32NotEqual",
	127: "KeywordInteger32Or",
	128: "KeywordInteger32PopCountNonZeros",
	129: "KeywordInteger32ReinterpretFloat32",
	130: "KeywordInteger32RemainderSigned",
	131: "KeywordInteger32RemainderUnsigned",
	132: "KeywordInteger32RotateLeft",
	133: "KeywordInteger32RotateRight",
	134: "KeywordInteger32ShiftLeft",
	135: "KeywordInteger32ShiftRightSigned",
	136: "KeywordInteger32ShiftRightUnsigned",
	137: "KeywordInteger32Store",
	138: "KeywordInteger32Store16",
	139: "KeywordInteger32Store8",
	140: "KeywordInteger32Subtract",
	141: "KeywordInteger32TruncateFloat32Signed",
	142: "KeywordInteger32TruncateFloat32Unsigned",
	143: "KeywordInteger32TruncateFloat64Signed",
	144: "KeywordInteger32TruncateFloat64Unsigned",
	145: "KeywordInteger32TruncateSaturateFloat32Signed",
	146: "KeywordInteger32TruncateSaturateFloat32Unsigned",
	147: "KeywordInteger32TruncateSaturateFloat64Signed",
	148: "KeywordInteger32TruncateSaturateFloat64Unsigned",
	149: "KeywordInteger32WrapInteger64",
	150: "KeywordInteger32Xor",
	151: "KeywordInteger32x4",
	152: "KeywordInteger32x4Splat",
	153: "KeywordInteger64",
	154: "KeywordInteger64Add",
	155: "KeywordInteger64And",
	156: "KeywordInteger64Constant",
	157: "KeywordInteger64CountLeadingZeros",
	158: "KeywordInteger64CountTrailingZeros",
	159: "KeywordInteger64DivideSigned",
	160: "KeywordInteger64DivideUnsigned",
	161: "KeywordInteger64Equals",
	162: "KeywordInteger64EqualsZero",
	163: "KeywordInteger64Extend16Signed",
	164: "KeywordInteger64Extend32Signed",
	165: "KeywordInteger64Extend8Signed",
	166: "KeywordInteger64ExtendInteger32Signed",
	167: "KeywordInteger64ExtendInteger32Unsigned",
	168: "KeywordInteger64GreaterThanOrEqualsSigned",
	169: "KeywordInteger64GreaterThanOrEqualsUnsigned",
	170: "KeywordInteger64GreaterThanSigned",
	171: "KeywordInteger64GreaterThanUnsigned",
	172: "KeywordInteger64LessThanOrEqualsSigned",
	173: "KeywordInteger64LessThanOrEqualsUnsigned",
	174: "KeywordInteger64LessThanSigned",
	175: "KeywordInteger64LessThanUnsigned",
	176: "KeywordInteger64Load",
	177: "KeywordInteger64Load16Signed",
	178: "KeywordInteger64Load16Unsigned",
	179: "KeywordInteger64Load32Signed",
	180: "KeywordInteger64Load32Unsigned",
	181: "KeywordInteger64Load8Signed",
	182: "KeywordInteger64Load8Unsigned",
	183: "KeywordInteger64Multiply",
	184: "KeywordInteger64NotEqual",
	185: "KeywordInteger64Or",
	186: "KeywordInteger64PopCountNonZeros",
	187: "KeywordInteger64ReinterpretFloat64",
	188: "KeywordInteger64RemainderSigned",
	189: "KeywordInteger64RemainderUnsigned",
	190: "KeywordInteger64RotateLeft",
	191: "KeywordInteger64RotateRight",
	192: "KeywordInteger64ShiftLeft",
	193: "KeywordInteger64ShiftRightSigned",
	194: "KeywordInteger64ShiftRightUnsigned",
	195: "KeywordInteger64Store",
	196: "KeywordInteger64Store16",
	197: "KeywordInteger64Store32",
	198: "KeywordInteger64Store8",
	199: "KeywordInteger64Subtract",
	200: "KeywordInteger64TruncateFloat32Signed",
	201: "KeywordInteger64TruncateFloat32Unsigned",
	202: "KeywordInteger64TruncateFloat64Signed",
	203: "KeywordInteger64TruncateFloat64Unsigned",
	204: "KeywordInteger64TruncateSaturateFloat32Signed",
	205: "KeywordInteger64TruncateSaturateFloat32Unsigned",
	206: "KeywordInteger64TruncateSaturateFloat64Signed",
	207: "KeywordInteger64TruncateSaturateFloat64Unsigned",
	208: "KeywordInteger64Xor",
	209: "KeywordInteger64x2",
	210: "KeywordInteger64x2Splat",
	211: "KeywordInteger8x16",
	212: "KeywordInteger8x16Shuffle",
	213: "KeywordInteger8x16Splat",
	214: "KeywordInteger8x16Swizzle",
	215: "KeywordItem",
	216: "KeywordLocal",
	217: "KeywordLocalGet",
	218: "KeywordLocalSet",
	219: "KeywordLocalTee",
	220: "KeywordLoop",
	221: "KeywordMemory",
	222: "KeywordMemoryCopy",
	223: "KeywordMemoryFill",
	224: "KeywordMemoryGrow",
	225: "KeywordMemoryInitiate",
	226: "KeywordMemorySize",
	227: "KeywordModule",
	228: "KeywordMutable",
	229: "KeywordNoOperation",
	230: "KeywordOffset",
	231: "KeywordOffsetEquals",
	232: "KeywordParameter",
	233: "KeywordReferenceFunction",
	234: "KeywordReferenceIsNull",
	235: "KeywordReferenceNull",
	236: "KeywordResult",
	237: "KeywordReturn",
	238: "KeywordSelect",
	239: "KeywordStart",
	240: "KeywordTable",
	241: "KeywordTableCopy",
	242: "KeywordTableFill",
	243: "KeywordTableGet",
	244: "KeywordTableGrow",
	245: "KeywordTableInitiate",
	246: "KeywordTableSet",
	247: "KeywordTableSize",
	248: "KeywordThen",
	249: "KeywordType",
	250: "KeywordUnreachable",
	251: "KeywordVector128",
	252: "KeywordVector128Const",
	253: "KeywordVector128Load",
	254: "KeywordVector128Load16Lane",
	255: "KeywordVector128Load16Splat",
	256: "KeywordVector128Load16x4Signed",
	257: "KeywordVector128Load16x4Unsigned",
	258: "KeywordVector128Load32Lane",
	259: "KeywordVector128Load32Splat",
	260: "KeywordVector128Load32Zero",
	261: "KeywordVector128Load32x2Signed",
	262: "KeywordVector128Load32x2Unsigned",
	263: "KeywordVector128Load64Lane",
	264: "KeywordVector128Load64Splat",
	265: "KeywordVector128Load64Zero",
	266: "KeywordVector128Load8Lane",
	267: "KeywordVector128Load8Splat",
	268: "KeywordVector128Load8x8Signed",
	269: "KeywordVector128Load8x8Unsigned",
	270: "KeywordVector128Store",
	271: "KeywordVector128Store16Lane",
	272: "KeywordVector128Store32Lane",
	273: "KeywordVector128Store64Lane",
	274: "KeywordVector128Store8Lane",
	275: "Number",
	276: "OpenBracket",
	277: "StringEndQuote",
	278: "StringEscapeApostrophe",
	279: "StringEscapeBackslash",
	280: "StringEscapeHex",
	281: "StringEscapeNewline",
	282: "StringEscapeQuote",
	283: "StringEscapeReturn",
	284: "StringEscapeTab",
	285: "StringEscapeUnicode",
	286: "StringNonEscape",
	287: "StringStartQuote",
	288: "UnknownKeyword",
}
