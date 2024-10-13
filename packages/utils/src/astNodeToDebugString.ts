import { AstNodeTagsToNames } from "./AstNodeTag"
import { AstNode } from "./getNextAstNodes"
import { Token } from "./tokenise"

export function astNodeToDebugString(code: string, tokens: Token[], astNode: AstNode): string {
	const firstToken = tokens[astNode.index]!
	const lastToken = tokens[astNode.index + astNode.size - 1]!

	return `${AstNodeTagsToNames[astNode.tag]} ${JSON.stringify(code.slice(firstToken.index, lastToken.index + lastToken.size))}\n${Object.entries(astNode).filter(([ key ]) => key != `tag`).map(([ key, value ]) => `\t${key}: ${Array.isArray(value) ? value.join(`, `) : value}`).join(`\n`)}`
}
