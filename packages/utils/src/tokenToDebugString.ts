import type { Token } from "./tokenise"
import { TokenTag } from "./TokenTag"

const TokenTagsToNames = Object.fromEntries(Object.entries(TokenTag).map(([ name, tag ]) => [ tag, name ]))

export const tokenToDebugString = (token: Token, code: string) =>
	`${TokenTagsToNames[token.tag]} ${JSON.stringify(code.slice(token.index, token.index + token.size))} ${token.index}`
