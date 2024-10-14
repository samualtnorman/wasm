import { Pretty } from "@samual/lib"
import { AstNodeTag, AstNodeTagsToNames } from "./AstNodeTag"
import { condition } from "./lib/parsing"
import { tokenise, type Token } from "./tokenise"
import { TokenTag, TokenTagsToNames } from "./TokenTag"
import { assert } from "@samual/lib/assert"
import { tokenToDebugString } from "./tokenToDebugString"

type IndexSymbol = { readonly _: unique symbol }["_"]

export namespace AstNode {
	type Span = { index: number, size: number }
	type Index<T> = number// & { [K in IndexSymbol]: T }
	type NumberType = Integer32Type | Integer64Type | Float32Type | Float64Type
	type VectorType = Vector128Type
	type ReferenceType = FunctionReferenceType | ExternalReferenceType
	type ValueType = NumberType | VectorType | ReferenceType
	type ModuleField = Type /* TODO */

	export type Module = Span &
		{ tag: AstNodeTag.Module, identifier: Index<Identifier> | undefined, moduleFields: Index<ModuleField>[] }

	export type ImplicitModule = Span &
		{ tag: AstNodeTag.ImplicitModule, moduleFields: Index<ModuleField>[] }

	export type Identifier = Span & { tag: AstNodeTag.Identifier }

	export type Type = Span &
		{ tag: AstNodeTag.Type, identifier: Index<Identifier> | undefined, functionType: Index<FunctionType> }

	export type FunctionType =
		Span & { tag: AstNodeTag.FunctionType, parameters: Index<Parameter>[], results: Index<Result>[] }

	export type Parameter =
		Span & { tag: AstNodeTag.Parameter, identifier: Index<Identifier> | undefined, valueTypes: Index<ValueType>[] }

	export type Result = Span & { tag: AstNodeTag.Result, valueTypes: Index<ValueType>[] }
	export type Integer32Type = Span & { tag: AstNodeTag.Integer32Type }
	export type Integer64Type = Span & { tag: AstNodeTag.Integer64Type }
	export type Float32Type = Span & { tag: AstNodeTag.Float32Type }
	export type Float64Type = Span & { tag: AstNodeTag.Float64Type }
	export type Vector128Type = Span & { tag: AstNodeTag.Vector128Type }
	export type FunctionReferenceType = Span & { tag: AstNodeTag.FunctionReferenceType }
	export type ExternalReferenceType = Span & { tag: AstNodeTag.ExternalReferenceType }
}

export type AstNode = AstNode.Module | AstNode.Identifier | AstNode.Type | AstNode.FunctionType | AstNode.Parameter |
	AstNode.Result | AstNode.Integer32Type | AstNode.Integer64Type | AstNode.Float32Type | AstNode.Float64Type |
	AstNode.Vector128Type | AstNode.FunctionReferenceType | AstNode.ExternalReferenceType | AstNode.ImplicitModule

const token = (tag: TokenTag) => condition<Token[]>((tokens, index) => tokens[index.$]!.tag == tag)
const OpenBracket = token(TokenTag.OpenBracket)
const KeywordModule = token(TokenTag.KeywordModule)
const CloseBracket = token(TokenTag.CloseBracket)
const Identifier = token(TokenTag.Identifier)
const KeywordType = token(TokenTag.KeywordType)
const KeywordFunction = token(TokenTag.KeywordFunction)
const KeywordParameter = token(TokenTag.KeywordParameter)
const KeywordResult = token(TokenTag.KeywordResult)
const KeywordInteger32 = token(TokenTag.KeywordInteger32)
const KeywordInteger64 = token(TokenTag.KeywordInteger64)
const KeywordFloat32 = token(TokenTag.KeywordFloat32)
const KeywordFloat64 = token(TokenTag.KeywordFloat64)
const KeywordVector128 = token(TokenTag.KeywordVector128)
const KeywordFunctionReference = token(TokenTag.KeywordFunctionReference)
const KeywordExternalReference = token(TokenTag.KeywordExternalReference)
const KeywordExternal = token(TokenTag.KeywordExternal)

export function getNextAstNodes(
	code: string,
	tokens: Token[],
	tokenIndex: { $: number },
	newAstNodeIndex: number,
	currentAstNode?: AstNode
): AstNode | undefined {
	const startIndex = tokenIndex.$

	const AstNode =
		<T extends AstNodeTag>(tag: T, node: Omit<AstNode & { tag: T }, `tag` | `index`>): AstNode & { tag: T } =>
			({ tag, index: startIndex, ...node } as any)

	if (currentAstNode) {
		if (currentAstNode.tag == AstNodeTag.Module) {
			if (currentAstNode.identifier == -1) {
				if (Identifier(tokens, tokenIndex)) {
					currentAstNode.identifier = newAstNodeIndex

					return AstNode(AstNodeTag.Identifier, { size: 1 })
				}

				currentAstNode.identifier = undefined
			}

			if (OpenBracket(tokens, tokenIndex)) {
				if (KeywordType(tokens, tokenIndex)) {
					currentAstNode.moduleFields.push(newAstNodeIndex)

					return AstNode(AstNodeTag.Type, { size: -1, identifier: -1, functionType: -1 })
				}

				throw Error(HERE)
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.ImplicitModule) {
			if (OpenBracket(tokens, tokenIndex)) {
				if (KeywordType(tokens, tokenIndex)) {
					currentAstNode.moduleFields.push(newAstNodeIndex)

					return AstNode(AstNodeTag.Type, { size: -1, identifier: -1, functionType: -1 })
				}

				throw Error(HERE)
			}

			assert(tokenIndex.$ == tokens.length, HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.Type) {
			if (currentAstNode.identifier == -1) {
				if (Identifier(tokens, tokenIndex)) {
					currentAstNode.identifier = newAstNodeIndex

					return AstNode(AstNodeTag.Identifier, { size: 1 })
				}

				currentAstNode.identifier = undefined
			}

			if (currentAstNode.functionType == -1) {
				assert(OpenBracket(tokens, tokenIndex), HERE)
				assert(KeywordFunction(tokens, tokenIndex), HERE)
				currentAstNode.functionType = newAstNodeIndex

				return AstNode(AstNodeTag.FunctionType, { size: -1, parameters: [], results: [] })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.FunctionType) {
			if (OpenBracket(tokens, tokenIndex)) {
				if (KeywordParameter(tokens, tokenIndex)) {
					assert(!currentAstNode.results.length, HERE)
					currentAstNode.parameters.push(newAstNodeIndex)

					return AstNode(AstNodeTag.Parameter, { size: -1, identifier: -1, valueTypes: [] })
				}

				assert(KeywordResult(tokens, tokenIndex), HERE)
				currentAstNode.results.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Result, { size: -1, valueTypes: [] })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.Parameter) {
			if (currentAstNode.identifier == -1) {
				if (Identifier(tokens, tokenIndex)) {
					currentAstNode.identifier = newAstNodeIndex

					return AstNode(AstNodeTag.Identifier, { size: 1 })
				}

				currentAstNode.identifier = undefined
			}

			if (KeywordInteger32(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Integer32Type, { size: 1 })
			}

			if (KeywordInteger64(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Integer64Type, { size: 1 })
			}

			if (KeywordFloat32(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Float32Type, { size: 1 })
			}

			if (KeywordFloat64(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Float64Type, { size: 1 })
			}

			if (KeywordVector128(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Vector128Type, { size: 1 })
			}

			if (KeywordFunctionReference(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.FunctionReferenceType, { size: 1 })
			}

			if (KeywordExternalReference(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.ExternalReferenceType, { size: 1 })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)

			if (currentAstNode.identifier != undefined)
				assert(currentAstNode.valueTypes.length == 1, HERE)

			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.Result) {
			if (KeywordInteger32(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Integer32Type, { size: 1 })
			}

			if (KeywordInteger64(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Integer64Type, { size: 1 })
			}

			if (KeywordFloat32(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Float32Type, { size: 1 })
			}

			if (KeywordFloat64(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Float64Type, { size: 1 })
			}

			if (KeywordVector128(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.Vector128Type, { size: 1 })
			}

			if (KeywordFunctionReference(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.FunctionReferenceType, { size: 1 })
			}

			if (KeywordExternalReference(tokens, tokenIndex)) {
				currentAstNode.valueTypes.push(newAstNodeIndex)

				return AstNode(AstNodeTag.ExternalReferenceType, { size: 1 })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		throw Error(`${HERE} unhandled currentAstNode ${AstNodeTagsToNames[currentAstNode.tag]}`)
	}

	if (tokens[tokenIndex.$]?.tag == TokenTag.OpenBracket && tokens[tokenIndex.$ + 1]?.tag == TokenTag.KeywordType)
		return AstNode(AstNodeTag.ImplicitModule, { size: -1, moduleFields: [] })

	if (OpenBracket(tokens, tokenIndex)) {
		if (KeywordModule(tokens, tokenIndex))
			return AstNode(AstNodeTag.Module, { size: -1, identifier: -1, moduleFields: [] })

		throw Error(`${HERE} unhandled token ${tokenToDebugString(tokens[tokenIndex.$]!, code)}`)
	}

	throw Error(`${HERE} unhandled token ${tokenToDebugString(tokens[tokenIndex.$]!, code)}`)

	// function AstNode(tag: AstNodeTag, fields: Omit<>) {
	// 	return index = astNodes.length

	// 	astNodes.push({ tag, index: startIndex, size: index.$ - startIndex })

	// 	return index
	// }
}
