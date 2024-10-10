import { condition, many, optional, Rule, sequence, union } from "../lib/parsing"
import { oneOf, range, terminal } from "../lib/parsing/string"

export const Newline = union(oneOf(`\n\r`), terminal(`\r\n`))
export const Format = union(Newline, terminal(`\t`))

export const IdentifierCharacter =
	union(range(`0`, `9`), range(`A`, `Z`), range(`a`, `z`), oneOf(`!#$%&'*+-./:<=>?@\\^_\`|~`))

export const UnknownKeyword = sequence(range(`a`, `z`), optional(many(IdentifierCharacter)))
export const HexDigit = union(range(`0`, `9`), range(`A`, `F`), range(`a`, `f`))
export const HexNumber = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

export const StringNonEscape = condition<string>((code, index) =>
	code[index.$]! >= `\x20` && code[index.$]! != `\x7F` && code[index.$] != `"` && code[index.$] != `\\`
)

export const StringNonEscapes = many(StringNonEscape)
export const Backslash = terminal(`\\`)
export const DoubleHexDigits = sequence(HexDigit, HexDigit)
export const CharacterT = terminal(`t`)
export const CharacterN = terminal(`n`)
export const CharacterR = terminal(`r`)
export const CharacterApostrophe = terminal(`'`)
export const CharacterBackslash = terminal(`\\`)
export const CharacterU = terminal(`u`)
export const CharacterOpenSquigglyBracket = terminal(`{`)
export const CharacterCloseSquigglyBracket = terminal(`}`)

export const CharacterCloseSquigglyBracketBeforeStringEnds = sequence(
	many(condition((code, index) =>
		code[index.$]! >= `\x20` && code[index.$]! != `\x7F` && code[index.$] != `"` && code[index.$] != `\\` &&
		code[index.$] != `}`
	)),
	CharacterCloseSquigglyBracket
)

export const Quote = terminal(`"`)
export const Identifier = sequence(terminal(`$`), many(IdentifierCharacter))
export const Number = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
export const LineCharacter = condition((code, index) => code[index.$] != `\n` && code[index.$] != `\r`)

export const CommentLine =
	sequence(terminal(`;;`), optional(many(LineCharacter)), union(Newline, (code, index) => index.$ == code.length))

export const BlockCharacter: Rule<string> = union(
	condition((code, index) => code[index.$] != `;` && code[index.$] != `(`),
	condition((code, index) => code[index.$] == `;` && code[index.$ + 1] != `)`),
	condition((code, index) => code[index.$] == `(` && code[index.$ + 1] != `;`),
	(source, index) => CommentBlock(source, index)
)

export const CommentBlock = sequence(terminal(`(;`), optional(many(BlockCharacter)), terminal(`;)`))
export const Space = many(union(terminal(` `), Format))
export const Sign = optional(union(terminal(`+`), terminal(`-`)))
export const Fraction = sequence(range(`0`, `9`), optional(many(sequence(optional(terminal(`_`)), range(`0`, `9`)))))
export const HexFraction = sequence(HexDigit, optional(many(sequence(optional(terminal(`_`)), HexDigit))))

export const DecimalFloat = sequence(
	Number,
	union(sequence(terminal(`.`), Fraction), optional(terminal(`.`))),
	optional(sequence(oneOf(`Ee`), Sign, Number))
)

export const HexFloat = sequence(
	terminal(`0x`),
	HexNumber,
	union(sequence(terminal(`.`), HexFraction), optional(terminal(`.`))),
	optional(sequence(oneOf(`Pp`), Sign, HexNumber))
)

export const FloatMag =
	union(HexFloat, DecimalFloat, terminal(`inf`), sequence(terminal(`nan:0x`), HexNumber), terminal(`nan`))

export const KeywordOffsetEquals = terminal(`offset=`)
export const KeywordAlignEquals = terminal(`align=`)
export const Float = sequence(Sign, FloatMag)
export const BracketOpen = terminal(`(`)
export const BracketClose = terminal(`)`)
