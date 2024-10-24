import { MAX_LOOP_COUNT } from "@samual/wasm-utils/dist/common"
import { getNextToken } from "@samual/wasm-utils/dist/getNextToken"
import { offsetToTokenIndex } from "@samual/wasm-utils/dist/offsetToTokenIndex"
import { type Token } from "@samual/wasm-utils/dist/tokenise"
import { TokenTag } from "@samual/wasm-utils/dist/TokenTag"
import { tokenToDebugString } from "@samual/wasm-utils/dist/tokenToDebugString"
import { commands, Diagnostic, Hover, languages, Range, SemanticTokensBuilder, SemanticTokensLegend, window, workspace, type ExtensionContext } from "vscode"
import { contributes } from "../package.json"

const tokenTypes = Object.keys(contributes.semanticTokenScopes[0]!.scopes)

const tokenModifiers = [
	`declaration`, `definition`, `readonly`, `static`, `deprecated`, `abstract`, `async`, `modification`,
	`documentation`, `defaultLibrary`
] as const satisfies string[]

const legend = new SemanticTokensLegend(tokenTypes, tokenModifiers)
const outputChannel = window.createOutputChannel(`WebAssembly IDE`)

const diagnosticCollection = languages.createDiagnosticCollection(`wat`)

const tokens: Token[] = []
let needReparsing = true

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		commands.registerCommand(`webassembly-ide.debug-print-tokens`, () => {
			try {
				if (!window.activeTextEditor) {
					outputChannel.appendLine(`No active text editor`)
					return
				}

				outputChannel.show()
				outputChannel.appendLine(`Printing tokens for ${window.activeTextEditor.document.fileName}:`)

				const code = window.activeTextEditor.document.getText()

				for (const token of getTokens(code))
					outputChannel.appendLine(tokenToDebugString(token, code))
			} catch (error) {
				printError(error)
			}
		}),
		commands.registerCommand(`webassembly-ide.debug-reparse`, () => {
			try {
				tokens.length = 0
			} catch (error) {
				printError(error)
			}
		}),
		workspace.onDidChangeTextDocument(({ document, contentChanges }) => {
			try {
				if (!contentChanges.length || document.languageId != `wat`)
					return

				outputChannel.appendLine(`workspace.onDidChangeTextDocument() callback`)

				if (tokens.length) {
					const firstChange = contentChanges
						.reduce((lowest, current) => current.rangeOffset < lowest.rangeOffset ? current : lowest)

					if (firstChange.rangeOffset + firstChange.rangeLength + 1 == document.getText().length)
						tokens.length = Math.max(tokens.length - 2, 0)
					else {
						const index = offsetToTokenIndex(tokens, firstChange.rangeOffset)
						outputChannel.appendLine(`Change token index: ${index}`)
						tokens.length = Math.max(index - 1, 0)
					}
				}

				needReparsing = true
			} catch (error) {
				printError(error)
			}
		}),
		languages.registerDocumentSemanticTokensProvider({ language: `wat` }, {
			provideDocumentSemanticTokens(document) {
				try {
					const tokensBuilder = new SemanticTokensBuilder(legend)
					const diagnostics: Diagnostic[] = []

					for (const token of getTokens(document.getText())) {
						try {
							const start = document.positionAt(token.index)
							const end = document.positionAt(token.index + token.size)

							const addDiagnostic = (message: string) =>
								diagnostics.push(new Diagnostic(new Range(start, end), message))

							if (token.tag == TokenTag.ErrorInvalidCharacter)
								addDiagnostic(`Invalid character${token.size > 1 ? `s` : ``}.`)
							else if (token.tag == TokenTag.ErrorStringUnterminated)
								addDiagnostic(`Unterminated string literal.`)
							else if (token.tag == TokenTag.ErrorStringInvalidCharacter)
								addDiagnostic(`Invalid string character.`)
							else if (token.tag == TokenTag.ErrorStringInvalidEscape)
								addDiagnostic(`Invalid string escape.`)
							else if (token.tag == TokenTag.ErrorStringInvalidUnicodeEscape)
								addDiagnostic(`Invalid string unicode escape.`)
							else if (token.tag == TokenTag.ErrorUnterminatedCommentBlock)
								addDiagnostic(`Unterminated block comment.`)
						} catch (error) {
							printError(error)
						}
					}

					diagnosticCollection.set(document.uri, diagnostics)

					return tokensBuilder.build()
				} catch (error) {
					printError(error)
				}
			}
		}, legend),
		languages.registerHoverProvider({ language: `wat` }, {
			provideHover(document, position) {
				try {
					const code = document.getText()
					const offset = document.offsetAt(position)
					const tokens = getTokens(code)
					const token = tokens[offsetToTokenIndex(tokens, offset)]

					if (token && offset >= token.index) {
						return new Hover(
							`${offset} ${tokenToDebugString(token, code)}`,
							new Range(document.positionAt(token.index), document.positionAt(token.index + token.size))
						)
					}
				} catch (error) {
					printError(error)
				}
			}
		}),
		outputChannel,
		diagnosticCollection
	)
}

function printError(error: unknown) {
	outputChannel.show()
	outputChannel.appendLine(`Caught ${(error instanceof Error && error.stack) || String(error)}`)
}

function getTokens(code: string): Token[] {
	if (needReparsing) {
		needReparsing = false
		outputChannel.appendLine(`Skipping reparsing the first ${tokens.length} tokens`)

		let token = tokens.at(-1)
		let count = 0
		let loopsLeft = MAX_LOOP_COUNT

		while ((token = getNextToken(code, token))) {
			if (!loopsLeft--)
				throw Error(`Reached MAX_LOOP_COUNT`)

			count++
			tokens.push(token)
		}

		outputChannel.appendLine(`Parsed ${count} tokens`)
	}

	return tokens
}
