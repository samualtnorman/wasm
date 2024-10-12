import type { Token } from "./tokenise"

export const offsetToTokenIndex =
	(tokens: Token[], offset: number) => tokens.findIndex(token => offset < token.index + token.size)
