import { tokenise, type Token } from "@samual/wasm-utils/dist/tokenise"
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

const TOKENS = Object.fromEntries(Object.entries({
	KeywordAlignEquals: { tokenType: `keywordAlignEquals` },
	KeywordBlock: { tokenType: `keywordBlock` },
	CommentBlock: { tokenType: `commentBlock` },
	KeywordBranch: { tokenType: `keywordBranch` },
	KeywordBranchIf: { tokenType: `keywordBranchIf` },
	KeywordBranchTable: { tokenType: `keywordBranchTable` },
	KeywordCall: { tokenType: `keywordCall` },
	KeywordCallIndirect: { tokenType: `keywordCallIndirect` },
	BracketClose: { tokenType: `bracket` },
	KeywordDataDrop: { tokenType: `keywordInstruction` },
	KeywordDrop: { tokenType: `keywordInstruction` },
	KeywordElementDrop: { tokenType: `keywordInstruction` },
	KeywordElse: { tokenType: `keywordElse` },
	KeywordEnd: { tokenType: `keywordEnd` },
	KeywordExternal: { tokenType: `typeKeyword` },
	KeywordExternalReference: { tokenType: `typeKeyword` },
	KeywordFloat32: { tokenType: `typeKeyword` },
	KeywordFloat32Constant: { tokenType: `keywordInstruction` },
	KeywordFloat32Load: { tokenType: `keywordLoad` },
	KeywordFloat32Store: { tokenType: `keywordStore` },
	KeywordFloat64: { tokenType: `typeKeyword` },
	KeywordFloat64Constant: { tokenType: `keywordInstruction` },
	KeywordFloat64Load: { tokenType: `keywordLoad` },
	KeywordFloat64Store: { tokenType: `keywordStore` },
	KeywordFunction: { tokenType: `keywordFunction` },
	KeywordFunctionReference: { tokenType: `typeKeyword` },
	KeywordGlobalGet: { tokenType: `keywordGlobalGet` },
	KeywordGlobalSet: { tokenType: `keywordGlobalSet` },
	Identifier: { tokenType: `identifier` },
	KeywordIf: { tokenType: `keywordIf` },
	KeywordInteger32: { tokenType: `typeKeyword` },
	KeywordInteger32Constant: { tokenType: `keywordInstruction` },
	KeywordInteger32Load: { tokenType: `keywordLoad` },
	KeywordInteger32Load16Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32Load16Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32Load8Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32Load8Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32Store: { tokenType: `keywordStore` },
	KeywordInteger32Store16: { tokenType: `keywordStore` },
	KeywordInteger32Store8: { tokenType: `keywordStore` },
	KeywordInteger64: { tokenType: `typeKeyword` },
	KeywordInteger64Constant: { tokenType: `keywordInstruction` },
	KeywordInteger64Load: { tokenType: `keywordLoad` },
	KeywordInteger64Load16Signed: { tokenType: `keywordLoad` },
	KeywordInteger64Load16Unsigned: { tokenType: `keywordLoad` },
	KeywordInteger64Load32Signed: { tokenType: `keywordLoad` },
	KeywordInteger64Load32Unsigned: { tokenType: `keywordLoad` },
	KeywordInteger64Load8Signed: { tokenType: `keywordLoad` },
	KeywordInteger64Load8Unsigned: { tokenType: `keywordLoad` },
	KeywordInteger64Store: { tokenType: `keywordStore` },
	KeywordInteger64Store16: { tokenType: `keywordStore` },
	KeywordInteger64Store32: { tokenType: `keywordStore` },
	KeywordInteger64Store8: { tokenType: `keywordStore` },
	UnknownKeyword: { tokenType: `unknownKeyword` },
	CommentLine: { tokenType: `commentLine` },
	KeywordLocalGet: { tokenType: `keywordLocalGet` },
	KeywordLocalSet: { tokenType: `keywordLocalSet` },
	KeywordLocalTee: { tokenType: `keywordLocalTee` },
	KeywordLoop: { tokenType: `keywordLoop` },
	KeywordMemoryCopy: { tokenType: `keywordMemoryCopy` },
	KeywordMemoryFill: { tokenType: `keywordMemoryFill` },
	KeywordMemoryGrow: { tokenType: `keywordMemoryGrow` },
	KeywordMemoryInitiate: { tokenType: `keywordMemoryInitiate` },
	KeywordMemorySize: { tokenType: `keywordMemorySize` },
	KeywordMutable: { tokenType: `keywordMutable` },
	KeywordNoOperation: { tokenType: `keywordInstruction` },
	Number: { tokenType: `number` },
	KeywordOffsetEquals: { tokenType: `keywordOffsetEquals` },
	BracketOpen: { tokenType: `bracket` },
	KeywordParameter: { tokenType: `keywordParameter`, tokenModifiers: [ `declaration` ] },
	KeywordReferenceFunction: { tokenType: `typeKeyword` },
	KeywordReferenceIsNull: { tokenType: `keywordInstruction` },
	KeywordReferenceNull: { tokenType: `keywordInstruction` },
	KeywordResult: { tokenType: `keywordResult` },
	KeywordReturn: { tokenType: `keywordReturn` },
	KeywordSelect: { tokenType: `keywordInstruction` },
	KeywordTableCopy: { tokenType: `keywordTableCopy` },
	KeywordTableFill: { tokenType: `keywordTableFill` },
	KeywordTableGet: { tokenType: `keywordTableGet` },
	KeywordTableGrow: { tokenType: `keywordTableGrow` },
	KeywordTableInitiate: { tokenType: `keywordTableInitiate` },
	KeywordTableSet: { tokenType: `keywordTableSet` },
	KeywordTableSize: { tokenType: `keywordTableSize` },
	KeywordUnreachable: { tokenType: `keywordUnreachable` },
	KeywordVector128: { tokenType: `typeKeyword` },
	KeywordModule: { tokenType: `keywordModule`, tokenModifiers: [ `declaration` ] },
	KeywordData: { tokenType: `keywordData`, tokenModifiers: [ `declaration` ] },
	KeywordDeclare: { tokenType: `keywordDeclare`, tokenModifiers: [ `declaration` ] },
	KeywordElement: { tokenType: `keywordElement`, tokenModifiers: [ `declaration` ] },
	KeywordExport: { tokenType: `keywordExport`, tokenModifiers: [ `declaration` ] },
	KeywordFloat32Absolute: { tokenType: `keywordInstruction` },
	KeywordFloat32Add: { tokenType: `keywordInstruction` },
	KeywordFloat32Ceiling: { tokenType: `keywordInstruction` },
	KeywordFloat32ConvertInteger32Signed: { tokenType: `keywordInstruction` },
	KeywordFloat32ConvertInteger32Unsigned: { tokenType: `keywordInstruction` },
	KeywordFloat32ConvertInteger64Signed: { tokenType: `keywordInstruction` },
	KeywordFloat32ConvertInteger64Unsigned: { tokenType: `keywordInstruction` },
	KeywordFloat32CopySign: { tokenType: `keywordInstruction` },
	KeywordFloat32DemoteFloat64: { tokenType: `keywordInstruction` },
	KeywordFloat32Divide: { tokenType: `keywordInstruction` },
	KeywordFloat32Equals: { tokenType: `keywordInstruction` },
	KeywordFloat32Floor: { tokenType: `keywordInstruction` },
	KeywordFloat32GreaterThan: { tokenType: `keywordInstruction` },
	KeywordFloat32GreaterThanOrEquals: { tokenType: `keywordInstruction` },
	KeywordFloat32LessThan: { tokenType: `keywordInstruction` },
	KeywordFloat32LessThanOrEquals: { tokenType: `keywordInstruction` },
	KeywordFloat32Maximum: { tokenType: `keywordInstruction` },
	KeywordFloat32Minimum: { tokenType: `keywordInstruction` },
	KeywordFloat32Multiply: { tokenType: `keywordInstruction` },
	KeywordFloat32Nearest: { tokenType: `keywordInstruction` },
	KeywordFloat32Negate: { tokenType: `keywordInstruction` },
	KeywordFloat32NotEquals: { tokenType: `keywordInstruction` },
	KeywordFloat32ReinterpretInteger32: { tokenType: `keywordInstruction` },
	KeywordFloat32SquareRoot: { tokenType: `keywordInstruction` },
	KeywordFloat32Subtract: { tokenType: `keywordInstruction` },
	KeywordFloat32Truncate: { tokenType: `keywordInstruction` },
	KeywordFloat64Absolute: { tokenType: `keywordInstruction` },
	KeywordFloat64Add: { tokenType: `keywordInstruction` },
	KeywordFloat64Ceiling: { tokenType: `keywordInstruction` },
	KeywordFloat64ConvertInteger32Signed: { tokenType: `keywordInstruction` },
	KeywordFloat64ConvertInteger32Unsigned: { tokenType: `keywordInstruction` },
	KeywordFloat64ConvertInteger64Signed: { tokenType: `keywordInstruction` },
	KeywordFloat64ConvertInteger64Unsigned: { tokenType: `keywordInstruction` },
	KeywordFloat64CopySign: { tokenType: `keywordInstruction` },
	KeywordFloat64Divide: { tokenType: `keywordInstruction` },
	KeywordFloat64Equals: { tokenType: `keywordInstruction` },
	KeywordFloat64Floor: { tokenType: `keywordInstruction` },
	KeywordFloat64GreaterThan: { tokenType: `keywordInstruction` },
	KeywordFloat64GreaterThanOrEquals: { tokenType: `keywordInstruction` },
	KeywordFloat64LessThan: { tokenType: `keywordInstruction` },
	KeywordFloat64LessThanOrEquals: { tokenType: `keywordInstruction` },
	KeywordFloat64Maximum: { tokenType: `keywordInstruction` },
	KeywordFloat64Minimum: { tokenType: `keywordInstruction` },
	KeywordFloat64Multiply: { tokenType: `keywordInstruction` },
	KeywordFloat64Nearest: { tokenType: `keywordInstruction` },
	KeywordFloat64Negate: { tokenType: `keywordInstruction` },
	KeywordFloat64NotEquals: { tokenType: `keywordInstruction` },
	KeywordFloat64PromoteFloat32: { tokenType: `keywordInstruction` },
	KeywordFloat64ReinterpretInteger64: { tokenType: `keywordInstruction` },
	KeywordFloat64SquareRoot: { tokenType: `keywordInstruction` },
	KeywordFloat64Subtract: { tokenType: `keywordInstruction` },
	KeywordFloat64Truncate: { tokenType: `keywordInstruction` },
	KeywordGlobal: { tokenType: `keywordGlobal`, tokenModifiers: [ `declaration` ] },
	KeywordImport: { tokenType: `keywordImport`, tokenModifiers: [ `declaration` ] },
	KeywordInteger32Add: { tokenType: `keywordInstruction` },
	KeywordInteger32And: { tokenType: `keywordInstruction` },
	KeywordInteger32CountLeadingZeros: { tokenType: `keywordInstruction` },
	KeywordInteger32CountTrailingZeros: { tokenType: `keywordInstruction` },
	KeywordInteger32DivideSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32DivideUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32Equals: { tokenType: `keywordInstruction` },
	KeywordInteger32EqualsZero: { tokenType: `keywordInstruction` },
	KeywordInteger32Extend16Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32Extend8Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32GreaterThanOrEqualsSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32GreaterThanOrEqualsUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32GreaterThanSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32GreaterThanUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32LessThanOrEqualsSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32LessThanOrEqualsUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32LessThanSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32LessThanUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32Multiply: { tokenType: `keywordInstruction` },
	KeywordInteger32NotEqual: { tokenType: `keywordInstruction` },
	KeywordInteger32Or: { tokenType: `keywordInstruction` },
	KeywordInteger32PopCountNonZeros: { tokenType: `keywordInstruction` },
	KeywordInteger32ReinterpretFloat32: { tokenType: `keywordInstruction` },
	KeywordInteger32RemainderSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32RemainderUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32RotateLeft: { tokenType: `keywordInstruction` },
	KeywordInteger32RotateRight: { tokenType: `keywordInstruction` },
	KeywordInteger32ShiftLeft: { tokenType: `keywordInstruction` },
	KeywordInteger32ShiftRightSigned: { tokenType: `keywordInstruction` },
	KeywordInteger32ShiftRightUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32Subtract: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateFloat32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateFloat32Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateFloat64Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateFloat64Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateSaturateFloat32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateSaturateFloat32Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateSaturateFloat64Signed: { tokenType: `keywordInstruction` },
	KeywordInteger32TruncateSaturateFloat64Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger32WrapInteger64: { tokenType: `keywordInstruction` },
	KeywordInteger32Xor: { tokenType: `keywordInstruction` },
	KeywordInteger64Add: { tokenType: `keywordInstruction` },
	KeywordInteger64And: { tokenType: `keywordInstruction` },
	KeywordInteger64CountLeadingZeros: { tokenType: `keywordInstruction` },
	KeywordInteger64CountTrailingZeros: { tokenType: `keywordInstruction` },
	KeywordInteger64DivideSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64DivideUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64Equals: { tokenType: `keywordInstruction` },
	KeywordInteger64EqualsZero: { tokenType: `keywordInstruction` },
	KeywordInteger64Extend16Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64Extend32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64Extend8Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64ExtendInteger32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64ExtendInteger32Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64GreaterThanOrEqualsSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64GreaterThanOrEqualsUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64GreaterThanSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64GreaterThanUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64LessThanOrEqualsSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64LessThanOrEqualsUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64LessThanSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64LessThanUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64Multiply: { tokenType: `keywordInstruction` },
	KeywordInteger64NotEqual: { tokenType: `keywordInstruction` },
	KeywordInteger64Or: { tokenType: `keywordInstruction` },
	KeywordInteger64PopCountNonZeros: { tokenType: `keywordInstruction` },
	KeywordInteger64ReinterpretFloat64: { tokenType: `keywordInstruction` },
	KeywordInteger64RemainderSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64RemainderUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64RotateLeft: { tokenType: `keywordInstruction` },
	KeywordInteger64RotateRight: { tokenType: `keywordInstruction` },
	KeywordInteger64ShiftLeft: { tokenType: `keywordInstruction` },
	KeywordInteger64ShiftRightSigned: { tokenType: `keywordInstruction` },
	KeywordInteger64ShiftRightUnsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64Subtract: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateFloat32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateFloat32Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateFloat64Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateFloat64Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateSaturateFloat32Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateSaturateFloat32Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateSaturateFloat64Signed: { tokenType: `keywordInstruction` },
	KeywordInteger64TruncateSaturateFloat64Unsigned: { tokenType: `keywordInstruction` },
	KeywordInteger64Xor: { tokenType: `keywordInstruction` },
	KeywordItem: { tokenType: `keywordItem`, tokenModifiers: [ `declaration` ] },
	KeywordLocal: { tokenType: `keywordLocal`, tokenModifiers: [ `declaration` ] },
	KeywordMemory: { tokenType: `keywordMemory`, tokenModifiers: [ `declaration` ] },
	KeywordOffset: { tokenType: `keywordOffsetEquals` },
	KeywordStart: { tokenType: `keywordStart`, tokenModifiers: [ `declaration` ] },
	KeywordTable: { tokenType: `keywordTable`, tokenModifiers: [ `declaration` ] },
	KeywordType: { tokenType: `keywordType`, tokenModifiers: [ `declaration` ] },
	ErrorInvalidCharacter: { tokenType: `error` },
	StringHexEscape: { tokenType: `stringEscape` },
	StringTabEscape: { tokenType: `stringEscape` },
	StringQuoteEscape: { tokenType: `stringEscape` },
	StringReturnEscape: { tokenType: `stringEscape` },
	StringNewlineEscape: { tokenType: `stringEscape` },
	StringBackslashEscape: { tokenType: `stringEscape` },
	StringUnicodeEscape: { tokenType: `stringEscape` },
	StringApostropheEscape: { tokenType: `stringEscape` },
	StringStartQuote: { tokenType: `stringStartQuote` },
	StringEndQuote: { tokenType: `stringEndQuote` },
	StringNonEscape: { tokenType: `string` },
	KeywordFloat32x4: { tokenType: `typeKeyword` },
	KeywordFloat64x2: { tokenType: `typeKeyword` },
	KeywordInteger16x8: { tokenType: `typeKeyword` },
	KeywordInteger16x8Splat: { tokenType: `keywordInstruction` },
	KeywordInteger32x4: { tokenType: `typeKeyword` },
	KeywordInteger32x4Splat: { tokenType: `keywordInstruction` },
	KeywordInteger64x2: { tokenType: `typeKeyword` },
	KeywordInteger64x2Splat: { tokenType: `keywordInstruction` },
	KeywordInteger8x16: { tokenType: `typeKeyword` },
	KeywordInteger8x16Shuffle: { tokenType: `keywordInstruction` },
	KeywordInteger8x16Splat: { tokenType: `keywordInstruction` },
	KeywordInteger8x16Swizzle: { tokenType: `keywordInstruction` },
	ErrorStringInvalidCharacter: { tokenType: `error` },
	ErrorStringUnterminated: { tokenType: `error` },
	KeywordVector128Const: { tokenType: `keywordInstruction` },
	KeywordVector128Load: { tokenType: `keywordLoad` },
	KeywordVector128Load16Lane: { tokenType: `keywordLoad` },
	KeywordVector128Load16Splat: { tokenType: `keywordLoad` },
	KeywordVector128Load16x4Signed: { tokenType: `keywordLoad` },
	KeywordVector128Load16x4Unsigned: { tokenType: `keywordLoad` },
	KeywordVector128Load32Lane: { tokenType: `keywordLoad` },
	KeywordVector128Load32Splat: { tokenType: `keywordLoad` },
	KeywordVector128Load32x2Signed: { tokenType: `keywordLoad` },
	KeywordVector128Load32x2Unsigned: { tokenType: `keywordLoad` },
	KeywordVector128Load32Zero: { tokenType: `keywordLoad` },
	KeywordVector128Load64Lane: { tokenType: `keywordLoad` },
	KeywordVector128Load64Splat: { tokenType: `keywordLoad` },
	KeywordVector128Load64Zero: { tokenType: `keywordLoad` },
	KeywordVector128Load8Lane: { tokenType: `keywordLoad` },
	KeywordVector128Load8Splat: { tokenType: `keywordLoad` },
	KeywordVector128Load8x8Signed: { tokenType: `keywordLoad` },
	KeywordVector128Load8x8Unsigned: { tokenType: `keywordLoad` },
	KeywordVector128Store: { tokenType: `keywordStore` },
	KeywordVector128Store16Lane: { tokenType: `keywordStore` },
	KeywordVector128Store32Lane: { tokenType: `keywordStore` },
	KeywordVector128Store64Lane: { tokenType: `keywordStore` },
	KeywordVector128Store8Lane: { tokenType: `keywordStore` },
	ErrorStringInvalidEscape: { tokenType: `error` },
	ErrorStringInvalidUnicodeEscape: { tokenType: `error` }
} satisfies Record<
	keyof typeof TokenTag,
	{ tokenType: keyof typeof contributes.semanticTokenScopes[0]["scopes"], tokenModifiers?: typeof tokenModifiers[number][] } | undefined
>).map(([ name, value ]) => [ TokenTag[name as keyof typeof TokenTag], value ]))

const diagnosticCollection = languages.createDiagnosticCollection(`wat`)

const printError = (error: unknown) =>
	outputChannel.appendLine(`Caught ${(error instanceof Error && error.stack) || String(error)}`)

let tokens: Token[] | undefined

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

				tokens ||= [ ...tokenise(code) ]

				for (const token of tokens)
					outputChannel.appendLine(tokenToDebugString(token, code))
			} catch (error) {
				printError(error)
			}
		}),
		workspace.onDidChangeTextDocument(() => tokens = undefined),
		languages.registerDocumentSemanticTokensProvider({ language: `wat` }, {
			provideDocumentSemanticTokens(document) {
				try {
					const tokensBuilder = new SemanticTokensBuilder(legend)
					const diagnostics: Diagnostic[] = []

					tokens ||= [ ...tokenise(document.getText()) ]

					for (const token of tokens) {
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

							if (TOKENS[token.tag]) {
								const pushToken = (range: Range) =>
									tokensBuilder.push(range, TOKENS[token.tag]!.tokenType, TOKENS[token.tag]!.tokenModifiers)

								if (start.line != end.line) {
									pushToken(document.lineAt(start.line).range.with({ start }))

									for (let line = start.line + 1; line < end.line; line++)
										pushToken(document.lineAt(line).range)

									pushToken(document.lineAt(end.line).range.with({ end }))
								} else
									pushToken(new Range(start, end))
							}
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
				const code = document.getText()
				const index = document.offsetAt(position)

				tokens ||= [ ...tokenise(code) ]

				const token = tokens.find(token => index < token.index + token.size)

				if (token && index >= token.index)
					return new Hover(`${index} ${tokenToDebugString(token, code)}`)
			}
		}),
		outputChannel,
		diagnosticCollection
	)
}
