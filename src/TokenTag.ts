export const TokenTag = {
	Integer32Type: 1 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Type" },
	Integer64Type: 2 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Type" },
	Float32Type: 3 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32Type" },
	Float64Type: 4 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64Type" },
	OpenBracket: 5 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OpenBracket" },
	CloseBracket: 6 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CloseBracket" },
	LineComment: 7 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LineComment" },
	BlockComment: 8 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BlockComment" },
	Number: 9 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Number" },
	HexNumber: 10 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.HexNumber" },
	String: 11 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.String" },
	Identifier: 12 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Identifier" },
	VectorType: 13 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.VectorType" },
	FunctionReference: 14 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.FunctionReference" },
	ExternalReference: 15 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ExternalReference" },
	Function: 16 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Function" },
	External: 17 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.External" },
	Unreachable: 18 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Unreachable" },
	NoOp: 19 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.NoOp" },
	Branch: 20 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Branch" },
	BranchIf: 21 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BranchIf" },
	BranchTable: 22 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BranchTable" },
	Return: 23 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Return" },
	Call: 24 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Call" },
	CallIndirect: 25 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CallIndirect" },
	If: 26 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.If" },
	End: 27 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.End" },
	Else: 28 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Else" },
	ReferenceNull: 29 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceNull" },
	ReferenceIsNull: 30 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceIsNull" },
	ReferenceFunction: 31 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ReferenceFunction" },
	Drop: 32 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Drop" },
	Select: 33 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Select" },
	LocalGet: 34 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalGet" },
	LocalSet: 35 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalSet" },
	LocalTee: 36 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LocalTee" },
	GlobalGet: 37 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.GlobalGet" },
	GlobalSet: 38 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.GlobalSet" },
	TableGet: 39 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableGet" },
	TableSet: 40 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableSet" },
	TableSize: 41 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableSize" },
	TableGrow: 42 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableGrow" },
	TableFill: 43 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableFill" },
	TableCopy: 44 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableCopy" },
	TableInit: 45 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.TableInit" },
	ElementDrop: 46 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ElementDrop" },
	Loop: 47 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Loop" },
	Module: 48 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Module" },
	Keyword: 49 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Keyword" },
	Integer: 50 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer" },
}

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]

export namespace TokenTag {
	export type Integer32Type = typeof TokenTag.Integer32Type
	export type Integer64Type = typeof TokenTag.Integer64Type
	export type Float32Type = typeof TokenTag.Float32Type
	export type Float64Type = typeof TokenTag.Float64Type
	export type OpenBracket = typeof TokenTag.OpenBracket
	export type CloseBracket = typeof TokenTag.CloseBracket
	export type LineComment = typeof TokenTag.LineComment
	export type BlockComment = typeof TokenTag.BlockComment
	export type Number = typeof TokenTag.Number
	export type HexNumber = typeof TokenTag.HexNumber
	export type String = typeof TokenTag.String
	export type Identifier = typeof TokenTag.Identifier
	export type VectorType = typeof TokenTag.VectorType
	export type FunctionReference = typeof TokenTag.FunctionReference
	export type ExternalReference = typeof TokenTag.ExternalReference
	export type Function = typeof TokenTag.Function
	export type External = typeof TokenTag.External
	export type Unreachable = typeof TokenTag.Unreachable
	export type NoOp = typeof TokenTag.NoOp
	export type Branch = typeof TokenTag.Branch
	export type BranchIf = typeof TokenTag.BranchIf
	export type BranchTable = typeof TokenTag.BranchTable
	export type Return = typeof TokenTag.Return
	export type Call = typeof TokenTag.Call
	export type CallIndirect = typeof TokenTag.CallIndirect
	export type If = typeof TokenTag.If
	export type End = typeof TokenTag.End
	export type Else = typeof TokenTag.Else
	export type ReferenceNull = typeof TokenTag.ReferenceNull
	export type ReferenceIsNull = typeof TokenTag.ReferenceIsNull
	export type ReferenceFunction = typeof TokenTag.ReferenceFunction
	export type Drop = typeof TokenTag.Drop
	export type Select = typeof TokenTag.Select
	export type LocalGet = typeof TokenTag.LocalGet
	export type LocalSet = typeof TokenTag.LocalSet
	export type LocalTee = typeof TokenTag.LocalTee
	export type GlobalGet = typeof TokenTag.GlobalGet
	export type GlobalSet = typeof TokenTag.GlobalSet
	export type TableGet = typeof TokenTag.TableGet
	export type TableSet = typeof TokenTag.TableSet
	export type TableSize = typeof TokenTag.TableSize
	export type TableGrow = typeof TokenTag.TableGrow
	export type TableFill = typeof TokenTag.TableFill
	export type TableCopy = typeof TokenTag.TableCopy
	export type TableInit = typeof TokenTag.TableInit
	export type ElementDrop = typeof TokenTag.ElementDrop
	export type Loop = typeof TokenTag.Loop
	export type Module = typeof TokenTag.Module
	export type Keyword = typeof TokenTag.Keyword
	export type Integer = typeof TokenTag.Integer
}
