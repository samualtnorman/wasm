export const TokenTag = {
	Keyword: 1 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Keyword" },
	UnsignedInteger: 2 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.UnsignedInteger" },
	SignedInteger: 3 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.SignedInteger" },
	Float: 4 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Float" },
	String: 5 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.String" },
	Identifier: 6 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Identifier" },
	OpenBracket: 7 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.OpenBracket" },
	CloseBracket: 8 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.CloseBracket" },
	Reserved: 9 as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.Reserved" },
}

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]

export namespace TokenTag {
	export type Keyword = typeof TokenTag.Keyword
	export type UnsignedInteger = typeof TokenTag.UnsignedInteger
	export type SignedInteger = typeof TokenTag.SignedInteger
	export type Float = typeof TokenTag.Float
	export type String = typeof TokenTag.String
	export type Identifier = typeof TokenTag.Identifier
	export type OpenBracket = typeof TokenTag.OpenBracket
	export type CloseBracket = typeof TokenTag.CloseBracket
	export type Reserved = typeof TokenTag.Reserved
}
