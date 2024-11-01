import { assert } from "@samual/lib/assert"
import type { AstNode } from "./AstNode"
import { AstNodeTag, AstNodeTagsToNames } from "./AstNodeTag"
import { condition, many, optional, sequence, union } from "./lib/parsing"
import { type Token } from "./tokenise"
import { TokenTag } from "./TokenTag"
import { tokenToDebugString } from "./tokenToDebugString"

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
const KeywordImport = token(TokenTag.KeywordImport)
const KeywordTable = token(TokenTag.KeywordTable)
const KeywordMemory = token(TokenTag.KeywordMemory)
const KeywordGlobal = token(TokenTag.KeywordGlobal)
const LiteralNumber = token(TokenTag.Number)

const LiteralString = sequence(
	token(TokenTag.StringStartQuote),
	optional(many(union(
		token(TokenTag.StringNonEscape),
		token(TokenTag.StringEscapeApostrophe),
		token(TokenTag.StringEscapeBackslash),
		token(TokenTag.StringEscapeHex),
		token(TokenTag.StringEscapeNewline),
		token(TokenTag.StringEscapeQuote),
		token(TokenTag.StringEscapeReturn),
		token(TokenTag.StringEscapeTab),
		token(TokenTag.StringEscapeUnicode)
	))),
	token(TokenTag.StringEndQuote)
)

export function getNextAstNode(
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

		if (currentAstNode.tag == AstNodeTag.Import) {
			if (currentAstNode.module == -1) {
				currentAstNode.module = newAstNodeIndex
				assert(LiteralString(tokens, tokenIndex), HERE)

				return AstNode(AstNodeTag.StringLiteral, { size: 1 })
			}

			if (currentAstNode.name == -1) {
				currentAstNode.name = newAstNodeIndex
				assert(LiteralString(tokens, tokenIndex), HERE)

				return AstNode(AstNodeTag.StringLiteral, { size: 1 })
			}

			if (currentAstNode.description == -1) {
				assert(OpenBracket(tokens, tokenIndex), HERE)

				currentAstNode.description = newAstNodeIndex

				if (KeywordFunction(tokens, tokenIndex))
					return AstNode(AstNodeTag.ImportDescriptionFunction, { size: -1, identifier: -1, typeUse: -1 })

				if (KeywordTable(tokens, tokenIndex))
					return AstNode(AstNodeTag.ImportDescriptionTable, { size: -1, identifier: -1, type: -1 })

				if (KeywordMemory(tokens, tokenIndex))
					return AstNode(AstNodeTag.ImportDescriptionMemory, { size: -1, identifier: -1, type: -1 })

				assert(KeywordGlobal(tokens, tokenIndex), HERE)

				return AstNode(AstNodeTag.ImportDescriptionGlobal, { size: -1, identifier: -1, type: -1 })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.ImportDescriptionFunction) {
			if (currentAstNode.identifier == -1) {
				if (Identifier(tokens, tokenIndex)) {
					currentAstNode.identifier = newAstNodeIndex

					return AstNode(AstNodeTag.Identifier, { size: 1 })
				}

				currentAstNode.identifier = undefined
			}

			if (currentAstNode.typeUse == -1) {
				currentAstNode.typeUse = newAstNodeIndex

				return AstNode(AstNodeTag.TypeUse, { size: -1, typeIndex: -1, parameters: [], results: [] })
			}

			assert(CloseBracket(tokens, tokenIndex), HERE)
			currentAstNode.size = tokenIndex.$ - currentAstNode.index

			return
		}

		if (currentAstNode.tag == AstNodeTag.TypeUse) {
			if (currentAstNode.typeIndex == -1) {
				assert(OpenBracket(tokens, tokenIndex), HERE)
				assert(KeywordType(tokens, tokenIndex), HERE)
				currentAstNode.typeIndex = newAstNodeIndex

				let node

				if (LiteralNumber(tokens, tokenIndex))
					node = AstNode(AstNodeTag.NumberLiteral, { size: 1 })
				else {
					assert(Identifier(tokens, tokenIndex), HERE)
					node = AstNode(AstNodeTag.Identifier, { size: 1 })
				}

				assert(CloseBracket(tokens, tokenIndex), HERE)

				return node
			}

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

		if (KeywordImport(tokens, tokenIndex))
			return AstNode(AstNodeTag.Import, { size: -1, module: -1, name: -1, description: -1 })

		throw Error(`${HERE} unhandled token ${tokenToDebugString(tokens[tokenIndex.$]!, code)}`)
	}

	throw Error(`${HERE} unhandled token ${tokenToDebugString(tokens[tokenIndex.$]!, code)}`)
}
