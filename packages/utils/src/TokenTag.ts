declare enum TokenTagEnum { Drop, ElementDrop, Function, FunctionReference, External, ExternalReference, Integer32, Integer32Constant, Integer64, Integer64Constant, Float32, Float32Constant, Float64, Float64Constant, LineComment, BlockComment, OpenBracket, CloseBracket, AlignEquals, Block, Branch, BranchIf, BranchTable, Call, CallIndirect, DataDrop, Else, End, Float32Load, Float32Store, Float64Load, Float64Store, GlobalGet, GlobalSet, Identifier, If, Integer32Load, Integer32Load8Signed, Integer32Load8Unsigned, Integer32Load16Signed, Integer32Load16Unsigned, Integer32Store, Integer32Store8, Integer32Store16, Integer64Load, Integer64Load8Signed, Integer64Load8Unsigned, Integer64Load16Signed, Integer64Load16Unsigned, Integer64Store, Integer64Store8, Integer64Store16, Integer64Load32Signed, Integer64Load32Unsigned, Integer64Store32, Keyword, LocalGet, LocalSet, LocalTee, Loop, MemorySize, MemoryGrow, MemoryFill, MemoryCopy, MemoryInitiate, Mutable, NoOperation, Number, OffsetEquals, Parameter, ReferenceFunction, ReferenceNull, ReferenceIsNull, Result, Return, Select, String, TableCopy, TableFill, TableGet, TableGrow, TableInitiate, TableSet, TableSize, Unreachable, Vector128 }

export const TokenTag = {
	Drop: 1 as TokenTagEnum.Drop,
	ElementDrop: 2 as TokenTagEnum.ElementDrop,
	Function: 3 as TokenTagEnum.Function,
	FunctionReference: 4 as TokenTagEnum.FunctionReference,
	External: 5 as TokenTagEnum.External,
	ExternalReference: 6 as TokenTagEnum.ExternalReference,
	Integer32: 7 as TokenTagEnum.Integer32,
	Integer32Constant: 8 as TokenTagEnum.Integer32Constant,
	Integer64: 9 as TokenTagEnum.Integer64,
	Integer64Constant: 10 as TokenTagEnum.Integer64Constant,
	Float32: 11 as TokenTagEnum.Float32,
	Float32Constant: 12 as TokenTagEnum.Float32Constant,
	Float64: 13 as TokenTagEnum.Float64,
	Float64Constant: 14 as TokenTagEnum.Float64Constant,
	LineComment: 15 as TokenTagEnum.LineComment,
	BlockComment: 16 as TokenTagEnum.BlockComment,
	OpenBracket: 17 as TokenTagEnum.OpenBracket,
	CloseBracket: 18 as TokenTagEnum.CloseBracket,
	AlignEquals: 19 as TokenTagEnum.AlignEquals,
	Block: 20 as TokenTagEnum.Block,
	Branch: 21 as TokenTagEnum.Branch,
	BranchIf: 22 as TokenTagEnum.BranchIf,
	BranchTable: 23 as TokenTagEnum.BranchTable,
	Call: 24 as TokenTagEnum.Call,
	CallIndirect: 25 as TokenTagEnum.CallIndirect,
	DataDrop: 26 as TokenTagEnum.DataDrop,
	Else: 27 as TokenTagEnum.Else,
	End: 28 as TokenTagEnum.End,
	Float32Load: 29 as TokenTagEnum.Float32Load,
	Float32Store: 30 as TokenTagEnum.Float32Store,
	Float64Load: 31 as TokenTagEnum.Float64Load,
	Float64Store: 32 as TokenTagEnum.Float64Store,
	GlobalGet: 33 as TokenTagEnum.GlobalGet,
	GlobalSet: 34 as TokenTagEnum.GlobalSet,
	Identifier: 35 as TokenTagEnum.Identifier,
	If: 36 as TokenTagEnum.If,
	Integer32Load: 37 as TokenTagEnum.Integer32Load,
	Integer32Load8Signed: 38 as TokenTagEnum.Integer32Load8Signed,
	Integer32Load8Unsigned: 39 as TokenTagEnum.Integer32Load8Unsigned,
	Integer32Load16Signed: 40 as TokenTagEnum.Integer32Load16Signed,
	Integer32Load16Unsigned: 41 as TokenTagEnum.Integer32Load16Unsigned,
	Integer32Store: 42 as TokenTagEnum.Integer32Store,
	Integer32Store8: 43 as TokenTagEnum.Integer32Store8,
	Integer32Store16: 44 as TokenTagEnum.Integer32Store16,
	Integer64Load: 45 as TokenTagEnum.Integer64Load,
	Integer64Load8Signed: 46 as TokenTagEnum.Integer64Load8Signed,
	Integer64Load8Unsigned: 47 as TokenTagEnum.Integer64Load8Unsigned,
	Integer64Load16Signed: 48 as TokenTagEnum.Integer64Load16Signed,
	Integer64Load16Unsigned: 49 as TokenTagEnum.Integer64Load16Unsigned,
	Integer64Store: 50 as TokenTagEnum.Integer64Store,
	Integer64Store8: 51 as TokenTagEnum.Integer64Store8,
	Integer64Store16: 52 as TokenTagEnum.Integer64Store16,
	Integer64Load32Signed: 53 as TokenTagEnum.Integer64Load32Signed,
	Integer64Load32Unsigned: 54 as TokenTagEnum.Integer64Load32Unsigned,
	Integer64Store32: 55 as TokenTagEnum.Integer64Store32,
	Keyword: 56 as TokenTagEnum.Keyword,
	LocalGet: 57 as TokenTagEnum.LocalGet,
	LocalSet: 58 as TokenTagEnum.LocalSet,
	LocalTee: 59 as TokenTagEnum.LocalTee,
	Loop: 60 as TokenTagEnum.Loop,
	MemorySize: 61 as TokenTagEnum.MemorySize,
	MemoryGrow: 62 as TokenTagEnum.MemoryGrow,
	MemoryFill: 63 as TokenTagEnum.MemoryFill,
	MemoryCopy: 64 as TokenTagEnum.MemoryCopy,
	MemoryInitiate: 65 as TokenTagEnum.MemoryInitiate,
	Mutable: 66 as TokenTagEnum.Mutable,
	NoOperation: 67 as TokenTagEnum.NoOperation,
	Number: 68 as TokenTagEnum.Number,
	OffsetEquals: 69 as TokenTagEnum.OffsetEquals,
	Parameter: 70 as TokenTagEnum.Parameter,
	ReferenceFunction: 71 as TokenTagEnum.ReferenceFunction,
	ReferenceNull: 72 as TokenTagEnum.ReferenceNull,
	ReferenceIsNull: 73 as TokenTagEnum.ReferenceIsNull,
	Result: 74 as TokenTagEnum.Result,
	Return: 75 as TokenTagEnum.Return,
	Select: 76 as TokenTagEnum.Select,
	String: 77 as TokenTagEnum.String,
	TableCopy: 78 as TokenTagEnum.TableCopy,
	TableFill: 79 as TokenTagEnum.TableFill,
	TableGet: 80 as TokenTagEnum.TableGet,
	TableGrow: 81 as TokenTagEnum.TableGrow,
	TableInitiate: 82 as TokenTagEnum.TableInitiate,
	TableSet: 83 as TokenTagEnum.TableSet,
	TableSize: 84 as TokenTagEnum.TableSize,
	Unreachable: 85 as TokenTagEnum.Unreachable,
	Vector128: 86 as TokenTagEnum.Vector128,
}

export type TokenTag = TokenTagEnum

export namespace TokenTag {
	export type Drop = typeof TokenTag.Drop
	export type ElementDrop = typeof TokenTag.ElementDrop
	export type Function = typeof TokenTag.Function
	export type FunctionReference = typeof TokenTag.FunctionReference
	export type External = typeof TokenTag.External
	export type ExternalReference = typeof TokenTag.ExternalReference
	export type Integer32 = typeof TokenTag.Integer32
	export type Integer32Constant = typeof TokenTag.Integer32Constant
	export type Integer64 = typeof TokenTag.Integer64
	export type Integer64Constant = typeof TokenTag.Integer64Constant
	export type Float32 = typeof TokenTag.Float32
	export type Float32Constant = typeof TokenTag.Float32Constant
	export type Float64 = typeof TokenTag.Float64
	export type Float64Constant = typeof TokenTag.Float64Constant
	export type LineComment = typeof TokenTag.LineComment
	export type BlockComment = typeof TokenTag.BlockComment
	export type OpenBracket = typeof TokenTag.OpenBracket
	export type CloseBracket = typeof TokenTag.CloseBracket
	export type AlignEquals = typeof TokenTag.AlignEquals
	export type Block = typeof TokenTag.Block
	export type Branch = typeof TokenTag.Branch
	export type BranchIf = typeof TokenTag.BranchIf
	export type BranchTable = typeof TokenTag.BranchTable
	export type Call = typeof TokenTag.Call
	export type CallIndirect = typeof TokenTag.CallIndirect
	export type DataDrop = typeof TokenTag.DataDrop
	export type Else = typeof TokenTag.Else
	export type End = typeof TokenTag.End
	export type Float32Load = typeof TokenTag.Float32Load
	export type Float32Store = typeof TokenTag.Float32Store
	export type Float64Load = typeof TokenTag.Float64Load
	export type Float64Store = typeof TokenTag.Float64Store
	export type GlobalGet = typeof TokenTag.GlobalGet
	export type GlobalSet = typeof TokenTag.GlobalSet
	export type Identifier = typeof TokenTag.Identifier
	export type If = typeof TokenTag.If
	export type Integer32Load = typeof TokenTag.Integer32Load
	export type Integer32Load8Signed = typeof TokenTag.Integer32Load8Signed
	export type Integer32Load8Unsigned = typeof TokenTag.Integer32Load8Unsigned
	export type Integer32Load16Signed = typeof TokenTag.Integer32Load16Signed
	export type Integer32Load16Unsigned = typeof TokenTag.Integer32Load16Unsigned
	export type Integer32Store = typeof TokenTag.Integer32Store
	export type Integer32Store8 = typeof TokenTag.Integer32Store8
	export type Integer32Store16 = typeof TokenTag.Integer32Store16
	export type Integer64Load = typeof TokenTag.Integer64Load
	export type Integer64Load8Signed = typeof TokenTag.Integer64Load8Signed
	export type Integer64Load8Unsigned = typeof TokenTag.Integer64Load8Unsigned
	export type Integer64Load16Signed = typeof TokenTag.Integer64Load16Signed
	export type Integer64Load16Unsigned = typeof TokenTag.Integer64Load16Unsigned
	export type Integer64Store = typeof TokenTag.Integer64Store
	export type Integer64Store8 = typeof TokenTag.Integer64Store8
	export type Integer64Store16 = typeof TokenTag.Integer64Store16
	export type Integer64Load32Signed = typeof TokenTag.Integer64Load32Signed
	export type Integer64Load32Unsigned = typeof TokenTag.Integer64Load32Unsigned
	export type Integer64Store32 = typeof TokenTag.Integer64Store32
	export type Keyword = typeof TokenTag.Keyword
	export type LocalGet = typeof TokenTag.LocalGet
	export type LocalSet = typeof TokenTag.LocalSet
	export type LocalTee = typeof TokenTag.LocalTee
	export type Loop = typeof TokenTag.Loop
	export type MemorySize = typeof TokenTag.MemorySize
	export type MemoryGrow = typeof TokenTag.MemoryGrow
	export type MemoryFill = typeof TokenTag.MemoryFill
	export type MemoryCopy = typeof TokenTag.MemoryCopy
	export type MemoryInitiate = typeof TokenTag.MemoryInitiate
	export type Mutable = typeof TokenTag.Mutable
	export type NoOperation = typeof TokenTag.NoOperation
	export type Number = typeof TokenTag.Number
	export type OffsetEquals = typeof TokenTag.OffsetEquals
	export type Parameter = typeof TokenTag.Parameter
	export type ReferenceFunction = typeof TokenTag.ReferenceFunction
	export type ReferenceNull = typeof TokenTag.ReferenceNull
	export type ReferenceIsNull = typeof TokenTag.ReferenceIsNull
	export type Result = typeof TokenTag.Result
	export type Return = typeof TokenTag.Return
	export type Select = typeof TokenTag.Select
	export type String = typeof TokenTag.String
	export type TableCopy = typeof TokenTag.TableCopy
	export type TableFill = typeof TokenTag.TableFill
	export type TableGet = typeof TokenTag.TableGet
	export type TableGrow = typeof TokenTag.TableGrow
	export type TableInitiate = typeof TokenTag.TableInitiate
	export type TableSet = typeof TokenTag.TableSet
	export type TableSize = typeof TokenTag.TableSize
	export type Unreachable = typeof TokenTag.Unreachable
	export type Vector128 = typeof TokenTag.Vector128
}
