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
	KeywordAlignEquals: { tokenType: `alignEqualsKeyword` },
	KeywordBlock: { tokenType: `blockKeyword` },
	CommentBlock: { tokenType: `blockComment` },
	KeywordBranch: { tokenType: `branchKeyword` },
	KeywordBranchIf: { tokenType: `branchIfKeyword` },
	KeywordBranchTable: { tokenType: `branchTableKeyword` },
	KeywordCall: { tokenType: `callKeyword` },
	KeywordCallIndirect: { tokenType: `callIndirectKeyword` },
	BracketClose: { tokenType: `bracket` },
	KeywordDataDrop: { tokenType: `instructionKeyword` },
	KeywordDrop: { tokenType: `instructionKeyword` },
	KeywordElementDrop: { tokenType: `instructionKeyword` },
	KeywordElse: { tokenType: `elseKeyword` },
	KeywordEnd: { tokenType: `endKeyword` },
	KeywordExternal: { tokenType: `keywordType` },
	KeywordExternalReference: { tokenType: `keywordType` },
	KeywordFloat32: { tokenType: `keywordType` },
	KeywordFloat32Constant: { tokenType: `instructionKeyword` },
	KeywordFloat32Load: { tokenType: `loadKeyword` },
	KeywordFloat32Store: { tokenType: `storeKeyword` },
	KeywordFloat64: { tokenType: `keywordType` },
	KeywordFloat64Constant: { tokenType: `instructionKeyword` },
	KeywordFloat64Load: { tokenType: `loadKeyword` },
	KeywordFloat64Store: { tokenType: `storeKeyword` },
	KeywordFunction: { tokenType: `functionKeyword` },
	KeywordFunctionReference: { tokenType: `keywordType` },
	KeywordGlobalGet: { tokenType: `globalGetKeyword` },
	KeywordGlobalSet: { tokenType: `globalSetKeyword` },
	Identifier: { tokenType: `identifier` },
	KeywordIf: { tokenType: `ifKeyword` },
	KeywordInteger32: { tokenType: `keywordType` },
	KeywordInteger32Constant: { tokenType: `instructionKeyword` },
	KeywordInteger32Load: { tokenType: `loadKeyword` },
	KeywordInteger32Load16Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32Load16Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32Load8Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32Load8Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32Store: { tokenType: `storeKeyword` },
	KeywordInteger32Store16: { tokenType: `storeKeyword` },
	KeywordInteger32Store8: { tokenType: `storeKeyword` },
	KeywordInteger64: { tokenType: `keywordType` },
	KeywordInteger64Constant: { tokenType: `instructionKeyword` },
	KeywordInteger64Load: { tokenType: `loadKeyword` },
	KeywordInteger64Load16Signed: { tokenType: `loadKeyword` },
	KeywordInteger64Load16Unsigned: { tokenType: `loadKeyword` },
	KeywordInteger64Load32Signed: { tokenType: `loadKeyword` },
	KeywordInteger64Load32Unsigned: { tokenType: `loadKeyword` },
	KeywordInteger64Load8Signed: { tokenType: `loadKeyword` },
	KeywordInteger64Load8Unsigned: { tokenType: `loadKeyword` },
	KeywordInteger64Store: { tokenType: `storeKeyword` },
	KeywordInteger64Store16: { tokenType: `storeKeyword` },
	KeywordInteger64Store32: { tokenType: `storeKeyword` },
	KeywordInteger64Store8: { tokenType: `storeKeyword` },
	UnknownKeyword: { tokenType: `keywordUnknown` },
	CommentLine: { tokenType: `lineComment` },
	KeywordLocalGet: { tokenType: `localGetKeyword` },
	KeywordLocalSet: { tokenType: `localSetKeyword` },
	KeywordLocalTee: { tokenType: `localTeeKeyword` },
	KeywordLoop: { tokenType: `loopKeyword` },
	KeywordMemoryCopy: { tokenType: `memoryCopyKeyword` },
	KeywordMemoryFill: { tokenType: `memoryFillKeyword` },
	KeywordMemoryGrow: { tokenType: `memoryGrowKeyword` },
	KeywordMemoryInitiate: { tokenType: `memoryInitiateKeyword` },
	KeywordMemorySize: { tokenType: `memorySizeKeyword` },
	KeywordMutable: { tokenType: `mutableKeyword` },
	KeywordNoOperation: { tokenType: `instructionKeyword` },
	Number: { tokenType: `number` },
	KeywordOffsetEquals: { tokenType: `offsetEqualsKeyword` },
	BracketOpen: { tokenType: `bracket` },
	KeywordParameter: { tokenType: `parameterKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordReferenceFunction: { tokenType: `keywordType` },
	KeywordReferenceIsNull: { tokenType: `instructionKeyword` },
	KeywordReferenceNull: { tokenType: `instructionKeyword` },
	KeywordResult: { tokenType: `resultKeyword` },
	KeywordReturn: { tokenType: `returnKeyword` },
	KeywordSelect: { tokenType: `instructionKeyword` },
	KeywordTableCopy: { tokenType: `tableCopyKeyword` },
	KeywordTableFill: { tokenType: `tableFillKeyword` },
	KeywordTableGet: { tokenType: `tableGetKeyword` },
	KeywordTableGrow: { tokenType: `tableGrowKeyword` },
	KeywordTableInitiate: { tokenType: `tableInitiateKeyword` },
	KeywordTableSet: { tokenType: `tableSetKeyword` },
	KeywordTableSize: { tokenType: `tableSizeKeyword` },
	KeywordUnreachable: { tokenType: `unreachableKeyword` },
	KeywordVector128: { tokenType: `keywordType` },
	KeywordModule: { tokenType: `moduleKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordData: { tokenType: `dataKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordDeclare: { tokenType: `declareKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordElement: { tokenType: `elementKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordExport: { tokenType: `exportKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordFloat32Absolute: { tokenType: `instructionKeyword` },
	KeywordFloat32Add: { tokenType: `instructionKeyword` },
	KeywordFloat32Ceiling: { tokenType: `instructionKeyword` },
	KeywordFloat32ConvertInteger32Signed: { tokenType: `instructionKeyword` },
	KeywordFloat32ConvertInteger32Unsigned: { tokenType: `instructionKeyword` },
	KeywordFloat32ConvertInteger64Signed: { tokenType: `instructionKeyword` },
	KeywordFloat32ConvertInteger64Unsigned: { tokenType: `instructionKeyword` },
	KeywordFloat32CopySign: { tokenType: `instructionKeyword` },
	KeywordFloat32DemoteFloat64: { tokenType: `instructionKeyword` },
	KeywordFloat32Divide: { tokenType: `instructionKeyword` },
	KeywordFloat32Equals: { tokenType: `instructionKeyword` },
	KeywordFloat32Floor: { tokenType: `instructionKeyword` },
	KeywordFloat32GreaterThan: { tokenType: `instructionKeyword` },
	KeywordFloat32GreaterThanOrEquals: { tokenType: `instructionKeyword` },
	KeywordFloat32LessThan: { tokenType: `instructionKeyword` },
	KeywordFloat32LessThanOrEquals: { tokenType: `instructionKeyword` },
	KeywordFloat32Maximum: { tokenType: `instructionKeyword` },
	KeywordFloat32Minimum: { tokenType: `instructionKeyword` },
	KeywordFloat32Multiply: { tokenType: `instructionKeyword` },
	KeywordFloat32Nearest: { tokenType: `instructionKeyword` },
	KeywordFloat32Negate: { tokenType: `instructionKeyword` },
	KeywordFloat32NotEquals: { tokenType: `instructionKeyword` },
	KeywordFloat32ReinterpretInteger32: { tokenType: `instructionKeyword` },
	KeywordFloat32SquareRoot: { tokenType: `instructionKeyword` },
	KeywordFloat32Subtract: { tokenType: `instructionKeyword` },
	KeywordFloat32Truncate: { tokenType: `instructionKeyword` },
	KeywordFloat64Absolute: { tokenType: `instructionKeyword` },
	KeywordFloat64Add: { tokenType: `instructionKeyword` },
	KeywordFloat64Ceiling: { tokenType: `instructionKeyword` },
	KeywordFloat64ConvertInteger32Signed: { tokenType: `instructionKeyword` },
	KeywordFloat64ConvertInteger32Unsigned: { tokenType: `instructionKeyword` },
	KeywordFloat64ConvertInteger64Signed: { tokenType: `instructionKeyword` },
	KeywordFloat64ConvertInteger64Unsigned: { tokenType: `instructionKeyword` },
	KeywordFloat64CopySign: { tokenType: `instructionKeyword` },
	KeywordFloat64Divide: { tokenType: `instructionKeyword` },
	KeywordFloat64Equals: { tokenType: `instructionKeyword` },
	KeywordFloat64Floor: { tokenType: `instructionKeyword` },
	KeywordFloat64GreaterThan: { tokenType: `instructionKeyword` },
	KeywordFloat64GreaterThanOrEquals: { tokenType: `instructionKeyword` },
	KeywordFloat64LessThan: { tokenType: `instructionKeyword` },
	KeywordFloat64LessThanOrEquals: { tokenType: `instructionKeyword` },
	KeywordFloat64Maximum: { tokenType: `instructionKeyword` },
	KeywordFloat64Minimum: { tokenType: `instructionKeyword` },
	KeywordFloat64Multiply: { tokenType: `instructionKeyword` },
	KeywordFloat64Nearest: { tokenType: `instructionKeyword` },
	KeywordFloat64Negate: { tokenType: `instructionKeyword` },
	KeywordFloat64NotEquals: { tokenType: `instructionKeyword` },
	KeywordFloat64PromoteFloat32: { tokenType: `instructionKeyword` },
	KeywordFloat64ReinterpretInteger64: { tokenType: `instructionKeyword` },
	KeywordFloat64SquareRoot: { tokenType: `instructionKeyword` },
	KeywordFloat64Subtract: { tokenType: `instructionKeyword` },
	KeywordFloat64Truncate: { tokenType: `instructionKeyword` },
	KeywordGlobal: { tokenType: `globalKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordImport: { tokenType: `importKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordInteger32Add: { tokenType: `instructionKeyword` },
	KeywordInteger32And: { tokenType: `instructionKeyword` },
	KeywordInteger32CountLeadingZeros: { tokenType: `instructionKeyword` },
	KeywordInteger32CountTrailingZeros: { tokenType: `instructionKeyword` },
	KeywordInteger32DivideSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32DivideUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32Equals: { tokenType: `instructionKeyword` },
	KeywordInteger32EqualsZero: { tokenType: `instructionKeyword` },
	KeywordInteger32Extend16Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32Extend8Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32GreaterThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32GreaterThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32GreaterThanSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32GreaterThanUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32LessThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32LessThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32LessThanSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32LessThanUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32Multiply: { tokenType: `instructionKeyword` },
	KeywordInteger32NotEqual: { tokenType: `instructionKeyword` },
	KeywordInteger32Or: { tokenType: `instructionKeyword` },
	KeywordInteger32PopCountNonZeros: { tokenType: `instructionKeyword` },
	KeywordInteger32ReinterpretFloat32: { tokenType: `instructionKeyword` },
	KeywordInteger32RemainderSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32RemainderUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32RotateLeft: { tokenType: `instructionKeyword` },
	KeywordInteger32RotateRight: { tokenType: `instructionKeyword` },
	KeywordInteger32ShiftLeft: { tokenType: `instructionKeyword` },
	KeywordInteger32ShiftRightSigned: { tokenType: `instructionKeyword` },
	KeywordInteger32ShiftRightUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32Subtract: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateFloat32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateFloat32Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateFloat64Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateFloat64Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateSaturateFloat32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateSaturateFloat32Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateSaturateFloat64Signed: { tokenType: `instructionKeyword` },
	KeywordInteger32TruncateSaturateFloat64Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger32WrapInteger64: { tokenType: `instructionKeyword` },
	KeywordInteger32Xor: { tokenType: `instructionKeyword` },
	KeywordInteger64Add: { tokenType: `instructionKeyword` },
	KeywordInteger64And: { tokenType: `instructionKeyword` },
	KeywordInteger64CountLeadingZeros: { tokenType: `instructionKeyword` },
	KeywordInteger64CountTrailingZeros: { tokenType: `instructionKeyword` },
	KeywordInteger64DivideSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64DivideUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64Equals: { tokenType: `instructionKeyword` },
	KeywordInteger64EqualsZero: { tokenType: `instructionKeyword` },
	KeywordInteger64Extend16Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64Extend32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64Extend8Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64ExtendInteger32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64ExtendInteger32Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64GreaterThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64GreaterThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64GreaterThanSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64GreaterThanUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64LessThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64LessThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64LessThanSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64LessThanUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64Multiply: { tokenType: `instructionKeyword` },
	KeywordInteger64NotEqual: { tokenType: `instructionKeyword` },
	KeywordInteger64Or: { tokenType: `instructionKeyword` },
	KeywordInteger64PopCountNonZeros: { tokenType: `instructionKeyword` },
	KeywordInteger64ReinterpretFloat64: { tokenType: `instructionKeyword` },
	KeywordInteger64RemainderSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64RemainderUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64RotateLeft: { tokenType: `instructionKeyword` },
	KeywordInteger64RotateRight: { tokenType: `instructionKeyword` },
	KeywordInteger64ShiftLeft: { tokenType: `instructionKeyword` },
	KeywordInteger64ShiftRightSigned: { tokenType: `instructionKeyword` },
	KeywordInteger64ShiftRightUnsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64Subtract: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateFloat32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateFloat32Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateFloat64Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateFloat64Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateSaturateFloat32Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateSaturateFloat32Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateSaturateFloat64Signed: { tokenType: `instructionKeyword` },
	KeywordInteger64TruncateSaturateFloat64Unsigned: { tokenType: `instructionKeyword` },
	KeywordInteger64Xor: { tokenType: `instructionKeyword` },
	KeywordItem: { tokenType: `itemKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordLocal: { tokenType: `localKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordMemory: { tokenType: `memoryKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordOffset: { tokenType: `offsetEqualsKeyword` },
	KeywordStart: { tokenType: `startKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordTable: { tokenType: `tableKeyword`, tokenModifiers: [ `declaration` ] },
	KeywordType: { tokenType: `typeKeyword`, tokenModifiers: [ `declaration` ] },
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
	KeywordFloat32x4: { tokenType: `keywordType` },
	KeywordFloat64x2: { tokenType: `keywordType` },
	KeywordInteger16x8: { tokenType: `keywordType` },
	KeywordInteger16x8Splat: { tokenType: `instructionKeyword` },
	KeywordInteger32x4: { tokenType: `keywordType` },
	KeywordInteger32x4Splat: { tokenType: `instructionKeyword` },
	KeywordInteger64x2: { tokenType: `keywordType` },
	KeywordInteger64x2Splat: { tokenType: `instructionKeyword` },
	KeywordInteger8x16: { tokenType: `keywordType` },
	KeywordInteger8x16Shuffle: { tokenType: `instructionKeyword` },
	KeywordInteger8x16Splat: { tokenType: `instructionKeyword` },
	KeywordInteger8x16Swizzle: { tokenType: `instructionKeyword` },
	ErrorStringInvalidCharacter: { tokenType: `error` },
	ErrorStringUnterminated: { tokenType: `error` },
	KeywordVector128Const: { tokenType: `instructionKeyword` },
	KeywordVector128Load: { tokenType: `loadKeyword` },
	KeywordVector128Load16Lane: { tokenType: `loadKeyword` },
	KeywordVector128Load16Splat: { tokenType: `loadKeyword` },
	KeywordVector128Load16x4Signed: { tokenType: `loadKeyword` },
	KeywordVector128Load16x4Unsigned: { tokenType: `loadKeyword` },
	KeywordVector128Load32Lane: { tokenType: `loadKeyword` },
	KeywordVector128Load32Splat: { tokenType: `loadKeyword` },
	KeywordVector128Load32x2Signed: { tokenType: `loadKeyword` },
	KeywordVector128Load32x2Unsigned: { tokenType: `loadKeyword` },
	KeywordVector128Load32Zero: { tokenType: `loadKeyword` },
	KeywordVector128Load64Lane: { tokenType: `loadKeyword` },
	KeywordVector128Load64Splat: { tokenType: `loadKeyword` },
	KeywordVector128Load64Zero: { tokenType: `loadKeyword` },
	KeywordVector128Load8Lane: { tokenType: `loadKeyword` },
	KeywordVector128Load8Splat: { tokenType: `loadKeyword` },
	KeywordVector128Load8x8Signed: { tokenType: `loadKeyword` },
	KeywordVector128Load8x8Unsigned: { tokenType: `loadKeyword` },
	KeywordVector128Store: { tokenType: `storeKeyword` },
	KeywordVector128Store16Lane: { tokenType: `storeKeyword` },
	KeywordVector128Store32Lane: { tokenType: `storeKeyword` },
	KeywordVector128Store64Lane: { tokenType: `storeKeyword` },
	KeywordVector128Store8Lane: { tokenType: `storeKeyword` },
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
