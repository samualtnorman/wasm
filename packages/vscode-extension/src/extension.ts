import { Token, tokenise } from "@samual/wasm-utils/dist/tokenise"
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
	AlignEquals: { tokenType: `alignEqualsKeyword` },
	Block: { tokenType: `blockKeyword` },
	BlockComment: { tokenType: `blockComment` },
	Branch: { tokenType: `branchKeyword` },
	BranchIf: { tokenType: `branchIfKeyword` },
	BranchTable: { tokenType: `branchTableKeyword` },
	Call: { tokenType: `callKeyword` },
	CallIndirect: { tokenType: `callIndirectKeyword` },
	CloseBracket: { tokenType: `bracket` },
	DataDrop: { tokenType: `instructionKeyword` },
	Drop: { tokenType: `instructionKeyword` },
	ElementDrop: { tokenType: `instructionKeyword` },
	Else: { tokenType: `elseKeyword` },
	End: { tokenType: `endKeyword` },
	External: { tokenType: `keywordType` },
	ExternalReference: { tokenType: `keywordType` },
	Float32: { tokenType: `keywordType` },
	Float32Constant: { tokenType: `instructionKeyword` },
	Float32Load: { tokenType: `loadKeyword` },
	Float32Store: { tokenType: `storeKeyword` },
	Float64: { tokenType: `keywordType` },
	Float64Constant: { tokenType: `instructionKeyword` },
	Float64Load: { tokenType: `loadKeyword` },
	Float64Store: { tokenType: `storeKeyword` },
	Function: { tokenType: `functionKeyword` },
	FunctionReference: { tokenType: `keywordType` },
	GlobalGet: { tokenType: `globalGetKeyword` },
	GlobalSet: { tokenType: `globalSetKeyword` },
	Identifier: { tokenType: `identifier` },
	If: { tokenType: `ifKeyword` },
	Integer32: { tokenType: `keywordType` },
	Integer32Constant: { tokenType: `instructionKeyword` },
	Integer32Load: { tokenType: `loadKeyword` },
	Integer32Load16Signed: { tokenType: `instructionKeyword` },
	Integer32Load16Unsigned: { tokenType: `instructionKeyword` },
	Integer32Load8Signed: { tokenType: `instructionKeyword` },
	Integer32Load8Unsigned: { tokenType: `instructionKeyword` },
	Integer32Store: { tokenType: `storeKeyword` },
	Integer32Store16: { tokenType: `storeKeyword` },
	Integer32Store8: { tokenType: `storeKeyword` },
	Integer64: { tokenType: `keywordType` },
	Integer64Constant: { tokenType: `instructionKeyword` },
	Integer64Load: { tokenType: `loadKeyword` },
	Integer64Load16Signed: { tokenType: `loadKeyword` },
	Integer64Load16Unsigned: { tokenType: `loadKeyword` },
	Integer64Load32Signed: { tokenType: `loadKeyword` },
	Integer64Load32Unsigned: { tokenType: `loadKeyword` },
	Integer64Load8Signed: { tokenType: `loadKeyword` },
	Integer64Load8Unsigned: { tokenType: `loadKeyword` },
	Integer64Store: { tokenType: `storeKeyword` },
	Integer64Store16: { tokenType: `storeKeyword` },
	Integer64Store32: { tokenType: `storeKeyword` },
	Integer64Store8: { tokenType: `storeKeyword` },
	Keyword: { tokenType: `keywordUnknown` },
	LineComment: { tokenType: `lineComment` },
	LocalGet: { tokenType: `localGetKeyword` },
	LocalSet: { tokenType: `localSetKeyword` },
	LocalTee: { tokenType: `localTeeKeyword` },
	Loop: { tokenType: `loopKeyword` },
	MemoryCopy: { tokenType: `memoryCopyKeyword` },
	MemoryFill: { tokenType: `memoryFillKeyword` },
	MemoryGrow: { tokenType: `memoryGrowKeyword` },
	MemoryInitiate: { tokenType: `memoryInitiateKeyword` },
	MemorySize: { tokenType: `memorySizeKeyword` },
	Mutable: { tokenType: `mutableKeyword` },
	NoOperation: { tokenType: `instructionKeyword` },
	Number: { tokenType: `number` },
	OffsetEquals: { tokenType: `offsetEqualsKeyword` },
	OpenBracket: { tokenType: `bracket` },
	Parameter: { tokenType: `parameterKeyword`, tokenModifiers: [ `declaration` ] },
	ReferenceFunction: { tokenType: `keywordType` },
	ReferenceIsNull: { tokenType: `instructionKeyword` },
	ReferenceNull: { tokenType: `instructionKeyword` },
	Result: { tokenType: `resultKeyword` },
	Return: { tokenType: `returnKeyword` },
	Select: { tokenType: `instructionKeyword` },
	TableCopy: { tokenType: `tableCopyKeyword` },
	TableFill: { tokenType: `tableFillKeyword` },
	TableGet: { tokenType: `tableGetKeyword` },
	TableGrow: { tokenType: `tableGrowKeyword` },
	TableInitiate: { tokenType: `tableInitiateKeyword` },
	TableSet: { tokenType: `tableSetKeyword` },
	TableSize: { tokenType: `tableSizeKeyword` },
	Unreachable: { tokenType: `unreachableKeyword` },
	Vector128: { tokenType: `keywordType` },
	Module: { tokenType: `moduleKeyword`, tokenModifiers: [ `declaration` ] },
	Data: { tokenType: `dataKeyword`, tokenModifiers: [ `declaration` ] },
	Declare: { tokenType: `declareKeyword`, tokenModifiers: [ `declaration` ] },
	Element: { tokenType: `elementKeyword`, tokenModifiers: [ `declaration` ] },
	Export: { tokenType: `exportKeyword`, tokenModifiers: [ `declaration` ] },
	Float32Absolute: { tokenType: `instructionKeyword` },
	Float32Add: { tokenType: `instructionKeyword` },
	Float32Ceiling: { tokenType: `instructionKeyword` },
	Float32ConvertInteger32Signed: { tokenType: `instructionKeyword` },
	Float32ConvertInteger32Unsigned: { tokenType: `instructionKeyword` },
	Float32ConvertInteger64Signed: { tokenType: `instructionKeyword` },
	Float32ConvertInteger64Unsigned: { tokenType: `instructionKeyword` },
	Float32CopySign: { tokenType: `instructionKeyword` },
	Float32DemoteFloat64: { tokenType: `instructionKeyword` },
	Float32Divide: { tokenType: `instructionKeyword` },
	Float32Equals: { tokenType: `instructionKeyword` },
	Float32Floor: { tokenType: `instructionKeyword` },
	Float32GreaterThan: { tokenType: `instructionKeyword` },
	Float32GreaterThanOrEquals: { tokenType: `instructionKeyword` },
	Float32LessThan: { tokenType: `instructionKeyword` },
	Float32LessThanOrEquals: { tokenType: `instructionKeyword` },
	Float32Maximum: { tokenType: `instructionKeyword` },
	Float32Minimum: { tokenType: `instructionKeyword` },
	Float32Multiply: { tokenType: `instructionKeyword` },
	Float32Nearest: { tokenType: `instructionKeyword` },
	Float32Negate: { tokenType: `instructionKeyword` },
	Float32NotEquals: { tokenType: `instructionKeyword` },
	Float32ReinterpretInteger32: { tokenType: `instructionKeyword` },
	Float32SquareRoot: { tokenType: `instructionKeyword` },
	Float32Subtract: { tokenType: `instructionKeyword` },
	Float32Truncate: { tokenType: `instructionKeyword` },
	Float64Absolute: { tokenType: `instructionKeyword` },
	Float64Add: { tokenType: `instructionKeyword` },
	Float64Ceiling: { tokenType: `instructionKeyword` },
	Float64ConvertInteger32Signed: { tokenType: `instructionKeyword` },
	Float64ConvertInteger32Unsigned: { tokenType: `instructionKeyword` },
	Float64ConvertInteger64Signed: { tokenType: `instructionKeyword` },
	Float64ConvertInteger64Unsigned: { tokenType: `instructionKeyword` },
	Float64CopySign: { tokenType: `instructionKeyword` },
	Float64Divide: { tokenType: `instructionKeyword` },
	Float64Equals: { tokenType: `instructionKeyword` },
	Float64Floor: { tokenType: `instructionKeyword` },
	Float64GreaterThan: { tokenType: `instructionKeyword` },
	Float64GreaterThanOrEquals: { tokenType: `instructionKeyword` },
	Float64LessThan: { tokenType: `instructionKeyword` },
	Float64LessThanOrEquals: { tokenType: `instructionKeyword` },
	Float64Maximum: { tokenType: `instructionKeyword` },
	Float64Minimum: { tokenType: `instructionKeyword` },
	Float64Multiply: { tokenType: `instructionKeyword` },
	Float64Nearest: { tokenType: `instructionKeyword` },
	Float64Negate: { tokenType: `instructionKeyword` },
	Float64NotEquals: { tokenType: `instructionKeyword` },
	Float64PromoteFloat32: { tokenType: `instructionKeyword` },
	Float64ReinterpretInteger64: { tokenType: `instructionKeyword` },
	Float64SquareRoot: { tokenType: `instructionKeyword` },
	Float64Subtract: { tokenType: `instructionKeyword` },
	Float64Truncate: { tokenType: `instructionKeyword` },
	Global: { tokenType: `globalKeyword`, tokenModifiers: [ `declaration` ] },
	Import: { tokenType: `importKeyword`, tokenModifiers: [ `declaration` ] },
	Integer32Add: { tokenType: `instructionKeyword` },
	Integer32And: { tokenType: `instructionKeyword` },
	Integer32CountLeadingZeros: { tokenType: `instructionKeyword` },
	Integer32CountTrailingZeros: { tokenType: `instructionKeyword` },
	Integer32DivideSigned: { tokenType: `instructionKeyword` },
	Integer32DivideUnsigned: { tokenType: `instructionKeyword` },
	Integer32Equals: { tokenType: `instructionKeyword` },
	Integer32EqualsZero: { tokenType: `instructionKeyword` },
	Integer32Extend16Signed: { tokenType: `instructionKeyword` },
	Integer32Extend8Signed: { tokenType: `instructionKeyword` },
	Integer32GreaterThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	Integer32GreaterThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	Integer32GreaterThanSigned: { tokenType: `instructionKeyword` },
	Integer32GreaterThanUnsigned: { tokenType: `instructionKeyword` },
	Integer32LessThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	Integer32LessThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	Integer32LessThanSigned: { tokenType: `instructionKeyword` },
	Integer32LessThanUnsigned: { tokenType: `instructionKeyword` },
	Integer32Multiply: { tokenType: `instructionKeyword` },
	Integer32NotEqual: { tokenType: `instructionKeyword` },
	Integer32Or: { tokenType: `instructionKeyword` },
	Integer32PopCountNonZeros: { tokenType: `instructionKeyword` },
	Integer32ReinterpretFloat32: { tokenType: `instructionKeyword` },
	Integer32RemainderSigned: { tokenType: `instructionKeyword` },
	Integer32RemainderUnsigned: { tokenType: `instructionKeyword` },
	Integer32RotateLeft: { tokenType: `instructionKeyword` },
	Integer32RotateRight: { tokenType: `instructionKeyword` },
	Integer32ShiftLeft: { tokenType: `instructionKeyword` },
	Integer32ShiftRightSigned: { tokenType: `instructionKeyword` },
	Integer32ShiftRightUnsigned: { tokenType: `instructionKeyword` },
	Integer32Subtract: { tokenType: `instructionKeyword` },
	Integer32TruncateFloat32Signed: { tokenType: `instructionKeyword` },
	Integer32TruncateFloat32Unsigned: { tokenType: `instructionKeyword` },
	Integer32TruncateFloat64Signed: { tokenType: `instructionKeyword` },
	Integer32TruncateFloat64Unsigned: { tokenType: `instructionKeyword` },
	Integer32TruncateSaturateFloat32Signed: { tokenType: `instructionKeyword` },
	Integer32TruncateSaturateFloat32Unsigned: { tokenType: `instructionKeyword` },
	Integer32TruncateSaturateFloat64Signed: { tokenType: `instructionKeyword` },
	Integer32TruncateSaturateFloat64Unsigned: { tokenType: `instructionKeyword` },
	Integer32WrapInteger64: { tokenType: `instructionKeyword` },
	Integer32Xor: { tokenType: `instructionKeyword` },
	Integer64Add: { tokenType: `instructionKeyword` },
	Integer64And: { tokenType: `instructionKeyword` },
	Integer64CountLeadingZeros: { tokenType: `instructionKeyword` },
	Integer64CountTrailingZeros: { tokenType: `instructionKeyword` },
	Integer64DivideSigned: { tokenType: `instructionKeyword` },
	Integer64DivideUnsigned: { tokenType: `instructionKeyword` },
	Integer64Equals: { tokenType: `instructionKeyword` },
	Integer64EqualsZero: { tokenType: `instructionKeyword` },
	Integer64Extend16Signed: { tokenType: `instructionKeyword` },
	Integer64Extend32Signed: { tokenType: `instructionKeyword` },
	Integer64Extend8Signed: { tokenType: `instructionKeyword` },
	Integer64ExtendInteger32Signed: { tokenType: `instructionKeyword` },
	Integer64ExtendInteger32Unsigned: { tokenType: `instructionKeyword` },
	Integer64GreaterThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	Integer64GreaterThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	Integer64GreaterThanSigned: { tokenType: `instructionKeyword` },
	Integer64GreaterThanUnsigned: { tokenType: `instructionKeyword` },
	Integer64LessThanOrEqualsSigned: { tokenType: `instructionKeyword` },
	Integer64LessThanOrEqualsUnsigned: { tokenType: `instructionKeyword` },
	Integer64LessThanSigned: { tokenType: `instructionKeyword` },
	Integer64LessThanUnsigned: { tokenType: `instructionKeyword` },
	Integer64Multiply: { tokenType: `instructionKeyword` },
	Integer64NotEqual: { tokenType: `instructionKeyword` },
	Integer64Or: { tokenType: `instructionKeyword` },
	Integer64PopCountNonZeros: { tokenType: `instructionKeyword` },
	Integer64ReinterpretFloat64: { tokenType: `instructionKeyword` },
	Integer64RemainderSigned: { tokenType: `instructionKeyword` },
	Integer64RemainderUnsigned: { tokenType: `instructionKeyword` },
	Integer64RotateLeft: { tokenType: `instructionKeyword` },
	Integer64RotateRight: { tokenType: `instructionKeyword` },
	Integer64ShiftLeft: { tokenType: `instructionKeyword` },
	Integer64ShiftRightSigned: { tokenType: `instructionKeyword` },
	Integer64ShiftRightUnsigned: { tokenType: `instructionKeyword` },
	Integer64Subtract: { tokenType: `instructionKeyword` },
	Integer64TruncateFloat32Signed: { tokenType: `instructionKeyword` },
	Integer64TruncateFloat32Unsigned: { tokenType: `instructionKeyword` },
	Integer64TruncateFloat64Signed: { tokenType: `instructionKeyword` },
	Integer64TruncateFloat64Unsigned: { tokenType: `instructionKeyword` },
	Integer64TruncateSaturateFloat32Signed: { tokenType: `instructionKeyword` },
	Integer64TruncateSaturateFloat32Unsigned: { tokenType: `instructionKeyword` },
	Integer64TruncateSaturateFloat64Signed: { tokenType: `instructionKeyword` },
	Integer64TruncateSaturateFloat64Unsigned: { tokenType: `instructionKeyword` },
	Integer64Xor: { tokenType: `instructionKeyword` },
	Item: { tokenType: `itemKeyword`, tokenModifiers: [ `declaration` ] },
	Local: { tokenType: `localKeyword`, tokenModifiers: [ `declaration` ] },
	Memory: { tokenType: `memoryKeyword`, tokenModifiers: [ `declaration` ] },
	Offset: { tokenType: `offsetEqualsKeyword` },
	Start: { tokenType: `startKeyword`, tokenModifiers: [ `declaration` ] },
	Table: { tokenType: `tableKeyword`, tokenModifiers: [ `declaration` ] },
	Type: { tokenType: `typeKeyword`, tokenModifiers: [ `declaration` ] },
	Error: { tokenType: `error` },
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
	Float32x4: { tokenType: `keywordType` },
	Float64x2: { tokenType: `keywordType` },
	Integer16x8: { tokenType: `keywordType` },
	Integer16x8Splat: { tokenType: `instructionKeyword` },
	Integer32x4: { tokenType: `keywordType` },
	Integer32x4Splat: { tokenType: `instructionKeyword` },
	Integer64x2: { tokenType: `keywordType` },
	Integer64x2Splat: { tokenType: `instructionKeyword` },
	Integer8x16: { tokenType: `keywordType` },
	Integer8x16Shuffle: { tokenType: `instructionKeyword` },
	Integer8x16Splat: { tokenType: `instructionKeyword` },
	Integer8x16Swizzle: { tokenType: `instructionKeyword` },
	StringInvalidCharacterError: { tokenType: `error` },
	UnterminatedStringError: { tokenType: `error` },
	Vector128Const: { tokenType: `instructionKeyword` },
	Vector128Load: { tokenType: `loadKeyword` },
	Vector128Load16Lane: { tokenType: `loadKeyword` },
	Vector128Load16Splat: { tokenType: `loadKeyword` },
	Vector128Load16x4Signed: { tokenType: `loadKeyword` },
	Vector128Load16x4Unsigned: { tokenType: `loadKeyword` },
	Vector128Load32Lane: { tokenType: `loadKeyword` },
	Vector128Load32Splat: { tokenType: `loadKeyword` },
	Vector128Load32x2Signed: { tokenType: `loadKeyword` },
	Vector128Load32x2Unsigned: { tokenType: `loadKeyword` },
	Vector128Load32Zero: { tokenType: `loadKeyword` },
	Vector128Load64Lane: { tokenType: `loadKeyword` },
	Vector128Load64Splat: { tokenType: `loadKeyword` },
	Vector128Load64Zero: { tokenType: `loadKeyword` },
	Vector128Load8Lane: { tokenType: `loadKeyword` },
	Vector128Load8Splat: { tokenType: `loadKeyword` },
	Vector128Load8x8Signed: { tokenType: `loadKeyword` },
	Vector128Load8x8Unsigned: { tokenType: `loadKeyword` },
	Vector128Store: { tokenType: `storeKeyword` },
	Vector128Store16Lane: { tokenType: `storeKeyword` },
	Vector128Store32Lane: { tokenType: `storeKeyword` },
	Vector128Store64Lane: { tokenType: `storeKeyword` },
	Vector128Store8Lane: { tokenType: `storeKeyword` }
} satisfies Record<
	keyof typeof TokenTag,
	{ tokenType: keyof typeof contributes.semanticTokenScopes[0]["scopes"], tokenModifiers?: typeof tokenModifiers[number][] } | undefined
>).map(([ name, value ]) => [ TokenTag[name as keyof typeof TokenTag], value ]))

const diagnosticCollection = languages.createDiagnosticCollection(`wat`)

const printError = (error: unknown) =>
	outputChannel.appendLine(`Caught ${(error instanceof Error && error.stack) || String(error)}`)

let tokens: Token[] | undefined

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

					if (token.tag == TokenTag.Error)
						addDiagnostic(`Invalid character${token.size > 1 ? `s` : ``}.`)
					else if (token.tag == TokenTag.UnterminatedStringError)
						addDiagnostic(`Unterminated string literal.`)
					else if (token.tag == TokenTag.StringInvalidCharacterError)
						addDiagnostic(`Invalid string character.`)

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
}, legend)

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
		languages.registerHoverProvider({ language: `wat` }, {
			provideHover(document, position) {
				const code = document.getText()
				const index = document.offsetAt(position)

				tokens ||= [ ...tokenise(code) ]

				const token = tokens.find(token => index < token.index + token.size)

				if (token && index >= token.index)
					return new Hover(`${index} ${tokenToDebugString(token, code)}`)
			}
		})
	)
}
