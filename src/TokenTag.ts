export const TokenTag = {
	Keyword: 1 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Keyword" },
	Number: 2 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Number" },
	String: 3 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.String" },
	Identifier: 4 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Identifier" },
	OpenBracket: 5 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OpenBracket" },
	CloseBracket: 6 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CloseBracket" },
	Reserved: 7 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Reserved" },
	Integer32Type: 8 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer32Type" },
	Integer64Type: 9 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Integer64Type" },
	Float32Type: 10 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float32Type" },
	Float64Type: 11 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float64Type" },
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
	export type Integer32Type = typeof TokenTag.Integer32Type
	export type Integer64Type = typeof TokenTag.Integer64Type
	export type Float32Type = typeof TokenTag.Float32Type
	export type Float64Type = typeof TokenTag.Float64Type
}
