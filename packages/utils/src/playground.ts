import { spliceString } from "@samual/lib/spliceString"
import chalk, { type ChalkInstance } from "chalk"
import { type Token, tokenise } from "./tokenise"
import { TokenTag } from "./TokenTag"

const TokenTagsToNames = Object.fromEntries(Object.entries(TokenTag).map(([ name, tag ]) => [ tag, name ]))

const tokenToDebugString = (token: Token, code: string) =>
	`${TokenTagsToNames[token.tag]} ${JSON.stringify(code.slice(token.index, token.index + token.size))}`

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

const TokenTagsToChalkInstances: { [K in TokenTag]?: ChalkInstance } = {
	[TokenTag.Keyword]: chalk.magenta,
	[TokenTag.Function]: chalk.magenta,
	[TokenTag.Parameter]: chalk.magenta,
	[TokenTag.Result]: chalk.magenta,
	[TokenTag.Integer32Load]: chalk.magenta,
	[TokenTag.LocalGet]: chalk.magenta,
	[TokenTag.Integer32Constant]: chalk.magenta,
	[TokenTag.Drop]: chalk.magenta,
	[TokenTag.Call]: chalk.magenta,
	[TokenTag.GlobalGet]: chalk.magenta,
	[TokenTag.GlobalGet]: chalk.magenta,
	[TokenTag.Import]: chalk.magentaBright,
	[TokenTag.Memory]: chalk.magentaBright,
	[TokenTag.Export]: chalk.magentaBright,
	[TokenTag.Data]: chalk.magentaBright,
	[TokenTag.Global]: chalk.magentaBright,
	[TokenTag.Identifier]: chalk.blueBright,
	[TokenTag.Number]: chalk.yellow,
	[TokenTag.String]: chalk.green,
	[TokenTag.OpenBracket]: chalk.white,
	[TokenTag.CloseBracket]: chalk.white,
	[TokenTag.Integer32]: chalk.cyanBright,
	[TokenTag.Integer64]: chalk.cyanBright,
	[TokenTag.Float32]: chalk.cyanBright,
	[TokenTag.Float64]: chalk.cyanBright,
	[TokenTag.LineComment]: chalk.gray,
	[TokenTag.BlockComment]: chalk.gray,
}

for (const token of [ ...tokenise(code) ].reverse()) {
	const chalkInstance = TokenTagsToChalkInstances[token.tag]

	if (chalkInstance) {
		const chalked = chalkInstance(code.slice(token.index, token.index + token.size))

		highlighted = spliceString(highlighted, chalked, token.index, token.size)
	}
}

console.log(highlighted)
