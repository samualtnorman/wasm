declare enum AstNodeTagEnum {
	ExternalReferenceType,
	Float32Type,
	Float64Type,
	FunctionReferenceType,
	FunctionType,
	Identifier,
	Integer32Type,
	Integer64Type,
	Module,
	Parameter,
	Parameters,
	Result,
	Results,
	Type,
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
	export type Integer32Type = AstNodeTagEnum.Integer32Type
	export type Integer64Type = AstNodeTagEnum.Integer64Type
	export type Module = AstNodeTagEnum.Module
	export type Parameter = AstNodeTagEnum.Parameter
	export type Parameters = AstNodeTagEnum.Parameters
	export type Result = AstNodeTagEnum.Result
	export type Results = AstNodeTagEnum.Results
	export type Type = AstNodeTagEnum.Type
	export type Vector128Type = AstNodeTagEnum.Vector128Type
}

export const AstNodeTag: { [K in AstNodeTagName]: typeof AstNodeTagEnum[K] } = {
	ExternalReferenceType: 1,
	Float32Type: 2,
	Float64Type: 3,
	FunctionReferenceType: 4,
	FunctionType: 5,
	Identifier: 6,
	Integer32Type: 7,
	Integer64Type: 8,
	Module: 9,
	Parameter: 10,
	Parameters: 11,
	Result: 12,
	Results: 13,
	Type: 14,
	Vector128Type: 15,
}

export const AstNodeTagsToNames: Record<number, string> = {
	1: "ExternalReferenceType",
	2: "Float32Type",
	3: "Float64Type",
	4: "FunctionReferenceType",
	5: "FunctionType",
	6: "Identifier",
	7: "Integer32Type",
	8: "Integer64Type",
	9: "Module",
	10: "Parameter",
	11: "Parameters",
	12: "Result",
	13: "Results",
	14: "Type",
	15: "Vector128Type",
}
