import { assert } from "@samual/lib/assert"
import { MAX_LOOP_COUNT } from "./common"
import { Token } from "./tokenise"
import { TokenTag } from "./TokenTag"
import { Backslash, CharacterApostrophe, CharacterBackslash, CharacterCloseSquigglyBracket, CharacterCloseSquigglyBracketBeforeStringEnds, CharacterN, CharacterOpenSquigglyBracket, CharacterR, CharacterT, CharacterU, CommentBlockEnd, CommentBlockInner, CommentBlockStart, DoubleHexDigits, HexNumber, InvalidCharacter, Newline, Quote, Space, StringNonEscapes, TokenFunctions } from "./utils/tokenising"

const INSIDE_STRING_TOKEN_TAGS = [
	TokenTag.StringEscapeApostrophe, TokenTag.StringEscapeBackslash, TokenTag.StringEscapeHex,
	TokenTag.StringEscapeNewline, TokenTag.StringNonEscape, TokenTag.StringEscapeQuote, TokenTag.StringEscapeReturn,
	TokenTag.StringStartQuote, TokenTag.StringEscapeTab, TokenTag.StringEscapeUnicode,
	TokenTag.ErrorStringInvalidCharacter, TokenTag.ErrorStringInvalidEscape, TokenTag.ErrorStringInvalidUnicodeEscape
]

export function getNextToken(code: string, previousToken?: Token): Token | undefined {
	const index = { $: previousToken ? previousToken.index + previousToken.size : 0 }
	let startIndex = index.$
	const Token = (tag: TokenTag): Token => ({ tag, index: startIndex, size: index.$ - startIndex })

	if (previousToken && INSIDE_STRING_TOKEN_TAGS.includes(previousToken.tag)) {
		if (index.$ >= code.length)
			return Token(TokenTag.ErrorStringUnterminated)

		if (Backslash(code, index)) {
			if (DoubleHexDigits(code, index))
				return Token(TokenTag.StringEscapeHex)

			if (CharacterT(code, index))
				return Token(TokenTag.StringEscapeTab)

			if (CharacterN(code, index))
				return Token(TokenTag.StringEscapeNewline)

			if (CharacterR(code, index))
				return Token(TokenTag.StringEscapeReturn)

			if (Quote(code, index))
				return Token(TokenTag.StringEscapeQuote)

			if (CharacterApostrophe(code, index))
				return Token(TokenTag.StringEscapeApostrophe)

			if (CharacterBackslash(code, index))
				return Token(TokenTag.StringEscapeBackslash)

			if (!CharacterU(code, index)) {
				index.$++

				return Token(TokenTag.ErrorStringInvalidEscape)
			}

			if (!CharacterOpenSquigglyBracket(code, index))
				return Token(TokenTag.ErrorStringInvalidUnicodeEscape)

			if (HexNumber(code, index) && CharacterCloseSquigglyBracket(code, index))
				return Token(TokenTag.StringEscapeUnicode)

			if (CharacterCloseSquigglyBracket(code, index))
				return Token(TokenTag.ErrorStringInvalidUnicodeEscape)

			CharacterCloseSquigglyBracketBeforeStringEnds(code, index)

			return Token(TokenTag.ErrorStringInvalidUnicodeEscape)
		}

		if (Newline(code, index))
			return Token(TokenTag.ErrorStringUnterminated)

		if (StringNonEscapes(code, index))
			return Token(TokenTag.StringNonEscape)

		if (Quote(code, index))
			return Token(TokenTag.StringEndQuote)

		index.$++

		return Token(TokenTag.ErrorStringInvalidCharacter)
	}

	let loopsLeft = MAX_LOOP_COUNT

	while (Space(code, index))
		assert(loopsLeft--, HERE)

	startIndex = index.$

	if (index.$ >= code.length)
		return

	if (Quote(code, index))
		return Token(TokenTag.StringStartQuote)

	if (CommentBlockStart(code, index)) {
		CommentBlockInner(code, index)

		if (CommentBlockEnd(code, index))
			return Token(TokenTag.CommentBlock)

		return Token(TokenTag.ErrorUnterminatedCommentBlock)
	}

	for (const name in TokenFunctions) {
		if (TokenFunctions[name as keyof typeof TokenFunctions](code, index))
			return Token(TokenTag[name as keyof typeof TokenFunctions])
	}

	index.$++

	loopsLeft = MAX_LOOP_COUNT

	while (InvalidCharacter(code, index))
		assert(loopsLeft--, HERE)

	return Token(TokenTag.ErrorInvalidCharacter)
}
