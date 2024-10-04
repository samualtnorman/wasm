export const TokenTag = {
	Drop: 1 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Drop" },
	ElementDrop: 2 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ElementDrop" },
	Function: 3 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Function" },
	FunctionReference: 4 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.FunctionReference" },
	External: 5 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.External" },
	ExternalReference: 6 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ExternalReference" },
	Integer32: 7 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32" },
	Integer32Constant: 8 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Constant" },
	Integer64: 9 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64" },
	Integer64Constant: 10 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Constant" },
	Float32: 11 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32" },
	Float32Constant: 12 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32Constant" },
	Float64: 13 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64" },
	Float64Constant: 14 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64Constant" },
	LineComment: 15 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LineComment" },
	BlockComment: 16 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BlockComment" },
	OpenBracket: 17 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OpenBracket" },
	CloseBracket: 18 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CloseBracket" },
	AlignEquals: 19 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.AlignEquals" },
	Block: 20 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Block" },
	Branch: 21 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Branch" },
	BranchIf: 22 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BranchIf" },
	BranchTable: 23 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BranchTable" },
	Call: 24 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Call" },
	CallIndirect: 25 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CallIndirect" },
	DataDrop: 26 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.DataDrop" },
	Else: 27 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Else" },
	End: 28 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.End" },
	Float32Load: 29 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32Load" },
	Float32Store: 30 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32Store" },
	Float64Load: 31 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64Load" },
	Float64Store: 32 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64Store" },
	GlobalGet: 33 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.GlobalGet" },
	GlobalSet: 34 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.GlobalSet" },
	Identifier: 35 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Identifier" },
	If: 36 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.If" },
	Integer32Load: 37 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Load" },
	Integer32Load8Signed: 38 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Load8Signed" },
	Integer32Load8Unsigned: 39 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Load8Unsigned" },
	Integer32Load16Signed: 40 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Load16Signed" },
	Integer32Load16Unsigned: 41 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Load16Unsigned" },
	Integer32Store: 42 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Store" },
	Integer32Store8: 43 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Store8" },
	Integer32Store16: 44 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Store16" },
	Integer64Load: 45 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load" },
	Integer64Load8Signed: 46 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load8Signed" },
	Integer64Load8Unsigned: 47 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load8Unsigned" },
	Integer64Load16Signed: 48 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load16Signed" },
	Integer64Load16Unsigned: 49 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load16Unsigned" },
	Integer64Store: 50 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Store" },
	Integer64Store8: 51 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Store8" },
	Integer64Store16: 52 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Store16" },
	Integer64Load32Signed: 53 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load32Signed" },
	Integer64Load32Unsigned: 54 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Load32Unsigned" },
	Integer64Store32: 55 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Store32" },
	Keyword: 56 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Keyword" },
	LocalGet: 57 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalGet" },
	LocalSet: 58 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalSet" },
	LocalTee: 59 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalTee" },
	Loop: 60 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Loop" },
	MemorySize: 61 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.MemorySize" },
	MemoryGrow: 62 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.MemoryGrow" },
	MemoryFill: 63 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.MemoryFill" },
	MemoryCopy: 64 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.MemoryCopy" },
	MemoryInitiate: 65 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.MemoryInitiate" },
	Mutable: 66 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Mutable" },
	NoOperation: 67 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.NoOperation" },
	Number: 68 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Number" },
	OffsetEquals: 69 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OffsetEquals" },
	Parameter: 70 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Parameter" },
	ReferenceFunction: 71 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceFunction" },
	ReferenceNull: 72 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceNull" },
	ReferenceIsNull: 73 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceIsNull" },
	Result: 74 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Result" },
	Return: 75 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Return" },
	Select: 76 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Select" },
	String: 77 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.String" },
	TableCopy: 78 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableCopy" },
	TableFill: 79 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableFill" },
	TableGet: 80 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableGet" },
	TableGrow: 81 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableGrow" },
	TableInitiate: 82 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableInitiate" },
	TableSet: 83 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableSet" },
	TableSize: 84 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableSize" },
	Unreachable: 85 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Unreachable" },
	Vector128: 86 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Vector128" },
}

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]

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
