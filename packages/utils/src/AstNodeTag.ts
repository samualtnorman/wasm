declare enum AstNodeTagEnum {
	ExternalReferenceType,
	Float32Type,
	Float64Type,
	FunctionReferenceType,
	FunctionType,
	Identifier,
	ImplicitModule,
	Import,
	ImportDescriptionFunction,
	ImportDescriptionGlobal,
	ImportDescriptionMemory,
	ImportDescriptionTable,
	Integer32Type,
	Integer64Type,
	Limits,
	Module,
	MutableValueType,
	NumberLiteral,
	Parameter,
	Parameters,
	Result,
	Results,
	StringLiteral,
	TableType,
	Type,
	TypeUse,
	Vector128Type
}

export type AstNodeTag = AstNodeTagEnum
export type AstNodeTagName = keyof typeof AstNodeTagEnum

export namespace AstNodeTag {
	export type ExternalReferenceType = AstNodeTagEnum.ExternalReferenceType
	export type Float32Type = AstNodeTagEnum.Float32Type
	export type Float64Type = AstNodeTagEnum.Float64Type
	export type FunctionReferenceType = AstNodeTagEnum.FunctionReferenceType
	export type FunctionType = AstNodeTagEnum.FunctionType
	export type Identifier = AstNodeTagEnum.Identifier
	export type ImplicitModule = AstNodeTagEnum.ImplicitModule
	export type Import = AstNodeTagEnum.Import
	export type ImportDescriptionFunction = AstNodeTagEnum.ImportDescriptionFunction
	export type ImportDescriptionGlobal = AstNodeTagEnum.ImportDescriptionGlobal
	export type ImportDescriptionMemory = AstNodeTagEnum.ImportDescriptionMemory
	export type ImportDescriptionTable = AstNodeTagEnum.ImportDescriptionTable
	export type Integer32Type = AstNodeTagEnum.Integer32Type
	export type Integer64Type = AstNodeTagEnum.Integer64Type
	export type Limits = AstNodeTagEnum.Limits
	export type Module = AstNodeTagEnum.Module
	export type MutableValueType = AstNodeTagEnum.MutableValueType
	export type NumberLiteral = AstNodeTagEnum.NumberLiteral
	export type Parameter = AstNodeTagEnum.Parameter
	export type Parameters = AstNodeTagEnum.Parameters
	export type Result = AstNodeTagEnum.Result
	export type Results = AstNodeTagEnum.Results
	export type StringLiteral = AstNodeTagEnum.StringLiteral
	export type TableType = AstNodeTagEnum.TableType
	export type Type = AstNodeTagEnum.Type
	export type TypeUse = AstNodeTagEnum.TypeUse
	export type Vector128Type = AstNodeTagEnum.Vector128Type
}

export const AstNodeTag: { [K in AstNodeTagName]: typeof AstNodeTagEnum[K] } = {
	ExternalReferenceType: 1,
	Float32Type: 2,
	Float64Type: 3,
	FunctionReferenceType: 4,
	FunctionType: 5,
	Identifier: 6,
	ImplicitModule: 7,
	Import: 8,
	ImportDescriptionFunction: 9,
	ImportDescriptionGlobal: 10,
	ImportDescriptionMemory: 11,
	ImportDescriptionTable: 12,
	Integer32Type: 13,
	Integer64Type: 14,
	Limits: 15,
	Module: 16,
	MutableValueType: 17,
	NumberLiteral: 18,
	Parameter: 19,
	Parameters: 20,
	Result: 21,
	Results: 22,
	StringLiteral: 23,
	TableType: 24,
	Type: 25,
	TypeUse: 26,
	Vector128Type: 27,
}

export const AstNodeTagsToNames: Record<number, string> = {
	1: "ExternalReferenceType",
	2: "Float32Type",
	3: "Float64Type",
	4: "FunctionReferenceType",
	5: "FunctionType",
	6: "Identifier",
	7: "ImplicitModule",
	8: "Import",
	9: "ImportDescriptionFunction",
	10: "ImportDescriptionGlobal",
	11: "ImportDescriptionMemory",
	12: "ImportDescriptionTable",
	13: "Integer32Type",
	14: "Integer64Type",
	15: "Limits",
	16: "Module",
	17: "MutableValueType",
	18: "NumberLiteral",
	19: "Parameter",
	20: "Parameters",
	21: "Result",
	22: "Results",
	23: "StringLiteral",
	24: "TableType",
	25: "Type",
	26: "TypeUse",
	27: "Vector128Type",
}
