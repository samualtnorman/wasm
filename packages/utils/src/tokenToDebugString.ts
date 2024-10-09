import type { Token } from "./tokenise"
import { TokenTagsToNames } from "./TokenTag"

export const tokenToDebugString = (token: Token, code: string) =>
	`${TokenTagsToNames[token.tag]} ${JSON.stringify(code.slice(token.index, token.index + token.size))} ${token.index}`
