export const TokenTag = {
	Keyword: 1 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Keyword" },
	Number: 2 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Number" },
	String: 3 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.String" },
	Identifier: 4 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Identifier" },
	OpenBracket: 5 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OpenBracket" },
	CloseBracket: 6 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CloseBracket" },
	Reserved: 7 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Reserved" },
	Integer32: 8 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32" },
	Integer64: 9 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64" },
	Float32: 10 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32" },
	Float64: 11 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64" },
	Vector128: 12 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Vector128" },
	FunctionReference: 13 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.FunctionReference" },
	ExternalReference: 14 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.ExternalReference" },
	Function: 15 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Function" },
	External: 16 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.External" },
	Parameter: 17 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Parameter" },
	Result: 18 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Result" },
	LineComment: 19 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.LineComment" },
	BlockComment: 20 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.BlockComment" },
}

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]

export namespace TokenTag {
	export type Keyword = typeof TokenTag.Keyword
	export type Number = typeof TokenTag.Number
	export type String = typeof TokenTag.String
	export type Identifier = typeof TokenTag.Identifier
	export type OpenBracket = typeof TokenTag.OpenBracket
	export type CloseBracket = typeof TokenTag.CloseBracket
	export type Reserved = typeof TokenTag.Reserved
	export type Integer32 = typeof TokenTag.Integer32
	export type Integer64 = typeof TokenTag.Integer64
	export type Float32 = typeof TokenTag.Float32
	export type Float64 = typeof TokenTag.Float64
	export type Vector128 = typeof TokenTag.Vector128
	export type FunctionReference = typeof TokenTag.FunctionReference
	export type ExternalReference = typeof TokenTag.ExternalReference
	export type Function = typeof TokenTag.Function
	export type External = typeof TokenTag.External
	export type Parameter = typeof TokenTag.Parameter
	export type Result = typeof TokenTag.Result
	export type LineComment = typeof TokenTag.LineComment
	export type BlockComment = typeof TokenTag.BlockComment
}
