import { AstNodeTag } from "./AstNodeTag"

type Span = { index: number, size: number }
type Reference<T> = number//{ index: number, tag: (AstNode & T)["tag"] }

export namespace AstNode {
	export type NumberType = Integer32Type | Integer64Type | Float32Type | Float64Type
	export type VectorType = Vector128Type
	export type ReferenceType = FunctionReferenceType | ExternalReferenceType
	export type ValueType = NumberType | VectorType | ReferenceType
	export type ModuleField = Type | Import /* TODO */

	export type ImportDescription =
		ImportDescriptionFunction | ImportDescriptionTable | ImportDescriptionMemory | ImportDescriptionGlobal

	export type Index = NumberLiteral | Identifier
	export type MemoryType = Limits
	export type GlobalType = ValueType | MutableValueType

	export type Module = Span &
		{ tag: AstNodeTag.Module, identifier: Reference<Identifier> | undefined, moduleFields: Reference<ModuleField>[] }

	export type ImplicitModule = Span &
		{ tag: AstNodeTag.ImplicitModule, moduleFields: Reference<ModuleField>[] }

	export type Identifier = Span & { tag: AstNodeTag.Identifier }

	export type Type = Span &
		{ tag: AstNodeTag.Type, identifier: Reference<Identifier> | undefined, functionType: Reference<FunctionType> }

	export type FunctionType =
		Span & { tag: AstNodeTag.FunctionType, parameters: Reference<Parameter>[], results: Reference<Result>[] }

	export type Parameter = Span &
		{ tag: AstNodeTag.Parameter, identifier: Reference<Identifier> | undefined, valueTypes: Reference<ValueType>[] }

	export type Result = Span & { tag: AstNodeTag.Result, valueTypes: Reference<ValueType>[] }
	export type Integer32Type = Span & { tag: AstNodeTag.Integer32Type }
	export type Integer64Type = Span & { tag: AstNodeTag.Integer64Type }
	export type Float32Type = Span & { tag: AstNodeTag.Float32Type }
	export type Float64Type = Span & { tag: AstNodeTag.Float64Type }
	export type Vector128Type = Span & { tag: AstNodeTag.Vector128Type }
	export type FunctionReferenceType = Span & { tag: AstNodeTag.FunctionReferenceType }
	export type ExternalReferenceType = Span & { tag: AstNodeTag.ExternalReferenceType }

	export type Import = Span & {
		tag: AstNodeTag.Import
		module: Reference<StringLiteral>
		name: Reference<StringLiteral>
		description: Reference<ImportDescription>
	}

	export type StringLiteral = Span & { tag: AstNodeTag.StringLiteral }

	export type ImportDescriptionFunction = Span & {
		tag: AstNodeTag.ImportDescriptionFunction
		identifier: Reference<Identifier> | undefined
		typeUse: Reference<TypeUse>
	}

	export type TypeUse = Span & {
		tag: AstNodeTag.TypeUse
		typeIndex: Reference<Index>
		parameters: Reference<Parameter>[]
		results: Reference<Result>[]
	}

	export type NumberLiteral = Span & { tag: AstNodeTag.NumberLiteral }

	export type ImportDescriptionTable = Span & {
		tag: AstNodeTag.ImportDescriptionTable
		identifier: Reference<Identifier> | undefined
		type: Reference<TableType>
	}

	export type TableType = Span &
		{ tag: AstNodeTag.TableType, limits: Reference<Limits>, referenceType: Reference<ReferenceType> }

	export type Limits = Span &
		{ tag: AstNodeTag.Limits, minimum: Reference<NumberLiteral>, maximum: Reference<NumberLiteral> | undefined }

	export type ImportDescriptionMemory = Span & {
		tag: AstNodeTag.ImportDescriptionMemory
		identifier: Reference<Identifier> | undefined
		type: Reference<MemoryType>
	}

	export type ImportDescriptionGlobal = Span & {
		tag: AstNodeTag.ImportDescriptionGlobal
		identifier: Reference<Identifier> | undefined
		type: Reference<GlobalType>
	}

	export type MutableValueType = Span & { tag: AstNodeTag.MutableValueType, type: Reference<ValueType> }
}

export type AstNode = AstNode.ModuleField | AstNode.ImportDescription | AstNode.Index | AstNode.GlobalType | AstNode.Module | AstNode.Type | AstNode.FunctionType | AstNode.Parameter | AstNode.Result | AstNode.ImplicitModule | AstNode.StringLiteral | AstNode.TypeUse | AstNode.TableType | AstNode.Limits
