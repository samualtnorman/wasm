import * as vscode from "vscode"
import { tokenise } from "@samual/wasm-utils/dist/tokenise"
import { TokenTag } from "@samual/wasm-utils/dist/TokenTag"

const tokenTypes = [
	`namespace`, `class`, `enum`, `interface`, `struct`, `typeParameter`, `type`, `parameter`, `variable`, `property`,
	`enumMember`, `decorator`, `event`, `function`, `method`, `macro`, `label`, `comment`, `string`, `keyword`,
	`number`, `regexp`, `operator`
] as const satisfies string[]

const tokenModifiers = [
	`declaration`, `definition`, `readonly`, `static`, `deprecated`, `abstract`, `async`, `modification`,
	`documentation`, `defaultLibrary`
] as const satisfies string[]

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers)

const outputChannel = vscode.window.createOutputChannel(`WAT`)

const TOKENS: Record<
	TokenTag,
	{ tokenType: typeof tokenTypes[number], tokenModifiers?: typeof tokenModifiers[number][] } | undefined
> = {
	[TokenTag.AlignEquals]: { tokenType: `property` },
	[TokenTag.Block]: { tokenType: `keyword` },
	[TokenTag.BlockComment]: { tokenType: `comment` },
	[TokenTag.Branch]: { tokenType: `keyword` },
	[TokenTag.BranchIf]: { tokenType: `keyword` },
	[TokenTag.BranchTable]: { tokenType: `keyword` },
	[TokenTag.Call]: { tokenType: `keyword` },
	[TokenTag.CallIndirect]: { tokenType: `keyword` },
	[TokenTag.CloseBracket]: undefined,
	[TokenTag.DataDrop]: { tokenType: `keyword` },
	[TokenTag.Drop]: { tokenType: `keyword` },
	[TokenTag.ElementDrop]: { tokenType: `keyword` },
	[TokenTag.Else]: { tokenType: `keyword` },
	[TokenTag.End]: { tokenType: `keyword` },
	[TokenTag.External]: { tokenType: `type` },
	[TokenTag.ExternalReference]: { tokenType: `type` },
	[TokenTag.Float32]: { tokenType: `type` },
	[TokenTag.Float32Constant]: { tokenType: `keyword` },
	[TokenTag.Float32Load]: { tokenType: `keyword` },
	[TokenTag.Float32Store]: { tokenType: `keyword` },
	[TokenTag.Float64]: { tokenType: `type` },
	[TokenTag.Float64Constant]: { tokenType: `keyword` },
	[TokenTag.Float64Load]: { tokenType: `keyword` },
	[TokenTag.Float64Store]: { tokenType: `keyword` },
	[TokenTag.Function]: { tokenType: `keyword` },
	[TokenTag.FunctionReference]: { tokenType: `type` },
	[TokenTag.GlobalGet]: { tokenType: `keyword` },
	[TokenTag.GlobalSet]: { tokenType: `keyword` },
	[TokenTag.Identifier]: { tokenType: `variable` },
	[TokenTag.If]: { tokenType: `keyword` },
	[TokenTag.Integer32]: { tokenType: `type` },
	[TokenTag.Integer32Constant]: { tokenType: `keyword` },
	[TokenTag.Integer32Load]: { tokenType: `keyword` },
	[TokenTag.Integer32Load16Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32Load16Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32Load8Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32Load8Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32Store]: { tokenType: `keyword` },
	[TokenTag.Integer32Store16]: { tokenType: `keyword` },
	[TokenTag.Integer32Store8]: { tokenType: `keyword` },
	[TokenTag.Integer64]: { tokenType: `type` },
	[TokenTag.Integer64Constant]: { tokenType: `keyword` },
	[TokenTag.Integer64Load]: { tokenType: `keyword` },
	[TokenTag.Integer64Load16Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64Load16Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Load32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64Load32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Load8Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64Load8Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Store]: { tokenType: `keyword` },
	[TokenTag.Integer64Store16]: { tokenType: `keyword` },
	[TokenTag.Integer64Store32]: { tokenType: `keyword` },
	[TokenTag.Integer64Store8]: { tokenType: `keyword` },
	[TokenTag.Keyword]: { tokenType: `keyword` },
	[TokenTag.LineComment]: { tokenType: `comment` },
	[TokenTag.LocalGet]: { tokenType: `keyword` },
	[TokenTag.LocalSet]: { tokenType: `keyword` },
	[TokenTag.LocalTee]: { tokenType: `keyword` },
	[TokenTag.Loop]: { tokenType: `keyword` },
	[TokenTag.MemoryCopy]: { tokenType: `keyword` },
	[TokenTag.MemoryFill]: { tokenType: `keyword` },
	[TokenTag.MemoryGrow]: { tokenType: `keyword` },
	[TokenTag.MemoryInitiate]: { tokenType: `keyword` },
	[TokenTag.MemorySize]: { tokenType: `keyword` },
	[TokenTag.Mutable]: { tokenType: `keyword` },
	[TokenTag.NoOperation]: { tokenType: `keyword` },
	[TokenTag.Number]: { tokenType: `number` },
	[TokenTag.OffsetEquals]: { tokenType: `property` },
	[TokenTag.OpenBracket]: undefined,
	[TokenTag.Parameter]: { tokenType: `keyword` },
	[TokenTag.ReferenceFunction]: { tokenType: `type` },
	[TokenTag.ReferenceIsNull]: { tokenType: `keyword` },
	[TokenTag.ReferenceNull]: { tokenType: `keyword` },
	[TokenTag.Result]: { tokenType: `keyword` },
	[TokenTag.Return]: { tokenType: `keyword` },
	[TokenTag.Select]: { tokenType: `keyword` },
	[TokenTag.String]: { tokenType: `string` },
	[TokenTag.TableCopy]: { tokenType: `keyword` },
	[TokenTag.TableFill]: { tokenType: `keyword` },
	[TokenTag.TableGet]: { tokenType: `keyword` },
	[TokenTag.TableGrow]: { tokenType: `keyword` },
	[TokenTag.TableInitiate]: { tokenType: `keyword` },
	[TokenTag.TableSet]: { tokenType: `keyword` },
	[TokenTag.TableSize]: { tokenType: `keyword` },
	[TokenTag.Unreachable]: { tokenType: `keyword` },
	[TokenTag.Vector128]: { tokenType: `type` }
}

vscode.languages.registerDocumentSemanticTokensProvider(
	{ language: `wat` },
	{
		provideDocumentSemanticTokens(document) {
			const tokensBuilder = new vscode.SemanticTokensBuilder(legend)

			try {
				for (const token of tokenise(document.getText())) {
					try {
						if (TOKENS[token.tag]) {
							const start = document.positionAt(token.index)
							const end = document.positionAt(token.index + token.size)

							if (start.line != end.line) {
								tokensBuilder.push(
									document.lineAt(start.line).range.with({ start }),
									TOKENS[token.tag]!.tokenType,
									TOKENS[token.tag]!.tokenModifiers
								)

								for (let line = start.line + 1; line < end.line; line++) {
									tokensBuilder.push(
										document.lineAt(line).range,
										TOKENS[token.tag]!.tokenType,
										TOKENS[token.tag]!.tokenModifiers
									)
								}

								tokensBuilder.push(
									document.lineAt(end.line).range.with({ end }),
									TOKENS[token.tag]!.tokenType,
									TOKENS[token.tag]!.tokenModifiers
								)
							} else {
								tokensBuilder.push(
									new vscode.Range(start, end),
									TOKENS[token.tag]!.tokenType,
									TOKENS[token.tag]!.tokenModifiers
								)
							}
						}
					} catch (error) {
						outputChannel.appendLine((error instanceof Error && error.stack) || String(error))
					}
				}
			} catch (error) {
				outputChannel.appendLine((error instanceof Error && error.stack) || String(error))
			}

			return tokensBuilder.build()
		}
	},
	legend
)

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	outputChannel.appendLine(`Congratulations, your extension "baz" is now active!`);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand(`baz.helloWorld`, () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage(`Hello World from baz!`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
