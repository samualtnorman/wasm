import { TokenTag } from "./TokenTag"

export type Token = { tag: TokenTag, index: number, size: number }

const TokenDefinitions: { regex: RegExp, tag: TokenTag }[] = [
	{ regex: /^\(;(?:[^;(]|;[^)]|\([^;])*;\)/, tag: TokenTag.BlockComment },
	{ regex: /^[+-]?(?:[0-9](?:_?[0-9])*|0x[0-9A-Fa-f](?:_?[0-9A-Fa-f])*)/, tag: TokenTag.Integer },
	{ regex: /^\$[0-9A-Za-z!#$%&'*+-./:<=>?@\\^_`|~]+/, tag: TokenTag.Identifier },
	{ regex: /^[a-z][0-9A-Za-z!#$%&'*+-./:<=>?@\\^_`|~]*/, tag: TokenTag.Keyword },
	{ regex: /^"(\\"|[^"])*"/, tag: TokenTag.String },
	{ regex: /^\(/, tag: TokenTag.OpenBracket },
	{ regex: /^\)/, tag: TokenTag.CloseBracket },
	{ regex: /^;;[^\x0A\x0D]*(?:[ \x09\x0A\x0D]|\x0D\x0A|$)/, tag: TokenTag.LineComment },
]

export function* tokenise(code: string): Generator<Token, void> {
	let index = 0

	while (index < code.length) {
		let match

		x: if (!(match = /^(?:[ \x09\x0A\x0D]|\x0D\x0A)+/.exec(code.slice(index)))) {
			for (const { regex, tag } of TokenDefinitions) {
				if ((match = regex.exec(code.slice(index)))) {
					yield { tag, index, size: match[0].length }
					break x
				}
			}

			throw Error(`Unexpected character ${JSON.stringify(code[index])}`)
		}

		index += match[0].length
	}
}
