import { spliceString } from "@samual/lib/spliceString"
import chalk, { type ChalkInstance } from "chalk"
import { tokenise } from "./tokenise"
import { TokenTag } from "./TokenTag"

const code = `\
(import "wasi_unstable" "fd_write" (func $fd_write (param i32 i32 i32 i32) (result i32)))

(memory 1)
(export "memory" (memory 0))

;; io vector
(data (i32.const 0) "\\08") ;; pointer to string
(data (i32.const 4) "\\0e") ;; length of string
(data (i32.const 8) "Hello, World!\\n")

(global $stdout i32 (i32.const 1))

(func (export "_start")
    (drop
        (call $fd_write
            (global.get $stdout)
            (i32.const 0) ;; pointer to io vector
            (i32.const 1) ;; length of io vector
            (i32.const 20) ;; where to store number of bytes written
        )
    )
)`

let highlighted = code

// for (const token of tokenise(code))
// 	console.log(tokenToDebugString(token, code))

const TokenTagsToStringHighlighterFunctions: { [K in TokenTag]?: (text: string) => string } = {
	[TokenTag.UnknownKeyword]: chalk.magenta,
	[TokenTag.KeywordFunction]: chalk.magenta,
	[TokenTag.KeywordParameter]: chalk.magenta,
	[TokenTag.KeywordResult]: chalk.magenta,
	[TokenTag.KeywordInteger32Load]: chalk.magenta,
	[TokenTag.KeywordLocalGet]: chalk.magenta,
	[TokenTag.KeywordInteger32Constant]: chalk.magenta,
	[TokenTag.KeywordDrop]: chalk.magenta,
	[TokenTag.KeywordCall]: chalk.magenta,
	[TokenTag.KeywordGlobalGet]: chalk.magenta,
	[TokenTag.KeywordGlobalGet]: chalk.magenta,
	[TokenTag.KeywordImport]: (text: string) => chalk.bold(chalk.magentaBright(text)),
	[TokenTag.KeywordMemory]: (text: string) => chalk.bold(chalk.magentaBright(text)),
	[TokenTag.KeywordExport]: (text: string) => chalk.bold(chalk.magentaBright(text)),
	[TokenTag.KeywordData]: (text: string) => chalk.bold(chalk.magentaBright(text)),
	[TokenTag.KeywordGlobal]: (text: string) => chalk.bold(chalk.magentaBright(text)),
	[TokenTag.Identifier]: (text: string) => chalk.bold(chalk.blue(text)),
	[TokenTag.Number]: chalk.yellow,
	[TokenTag.StringStartQuote]: chalk.green,
	[TokenTag.StringNonEscape]: chalk.green,
	[TokenTag.StringEndQuote]: chalk.green,
	[TokenTag.StringEscapeApostrophe]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeBackslash]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeHex]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeNewline]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeQuote]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeReturn]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeTab]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.StringEscapeUnicode]: (text: string) => chalk.bold(chalk.greenBright(text)),
	[TokenTag.OpenBracket]: chalk.white,
	[TokenTag.CloseBracket]: chalk.white,
	[TokenTag.KeywordInteger32]: chalk.cyanBright,
	[TokenTag.KeywordInteger64]: chalk.cyanBright,
	[TokenTag.KeywordFloat32]: chalk.cyanBright,
	[TokenTag.KeywordFloat64]: chalk.cyanBright,
	[TokenTag.CommentLine]: chalk.gray,
	[TokenTag.CommentBlock]: chalk.gray,
}

for (const token of [ ...tokenise(code) ].reverse()) {
	const highlighterFunction = TokenTagsToStringHighlighterFunctions[token.tag]

	if (highlighterFunction) {
		const chalked = highlighterFunction(code.slice(token.index, token.index + token.size))

		highlighted = spliceString(highlighted, chalked, token.index, token.size)
	}
}

console.log(highlighted)
