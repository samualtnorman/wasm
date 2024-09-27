export const TokenTag = {
	Integer32Type: 1,
	Integer64Type: 2,
	Float32Type: 3,
	Float64Type: 4,
	OpenBracket: 5,
	CloseBracket: 6,
	LineComment: 7,
	BlockComment: 8,
	Number: 9,
	HexNumber: 10,
	String: 11,
	Identifier: 12,
	VectorType: 13,
	FunctionReference: 14,
	ExternalReference: 15,
	Function: 16,
	External: 17,
	Unreachable: 18,
	NoOp: 19,
	Branch: 20,
	BranchIf: 21,
	BranchTable: 22,
	Return: 23,
	Call: 24,
	CallIndirect: 25,
	If: 26,
	End: 27,
	Else: 28,
	ReferenceNull: 29,
	ReferenceIsNull: 30,
	ReferenceFunction: 31,
	Drop: 32,
	Select: 33,
	LocalGet: 34,
	LocalSet: 35,
	LocalTee: 36,
	GlobalGet: 37,
	GlobalSet: 38,
	TableGet: 39,
	TableSet: 40,
	TableSize: 41,
	TableGrow: 42,
	TableFill: 43,
	TableCopy: 44,
	TableInit: 45,
	ElementDrop: 46,
	Loop: 47,
	Module: 48,
	Keyword: 49,
	Integer: 50
} as const

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]
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
