import { Token, tokenise } from "@samual/wasm-utils/dist/tokenise"
import { TokenTag } from "@samual/wasm-utils/dist/TokenTag"
import { tokenToDebugString } from "@samual/wasm-utils/dist/tokenToDebugString"
import { commands, Diagnostic, Hover, languages, Range, SemanticTokensBuilder, SemanticTokensLegend, window, workspace, type ExtensionContext } from "vscode"

const tokenTypes = [
	`namespace`, `class`, `enum`, `interface`, `struct`, `typeParameter`, `type`, `parameter`, `variable`, `property`,
	`enumMember`, `decorator`, `event`, `function`, `method`, `macro`, `label`, `comment`, `string`, `keyword`,
	`number`, `regexp`, `operator`, `punctuation`, `storage.type`, `invalid`, `stringEscape`
] as const satisfies string[]

const tokenModifiers = [
	`declaration`, `definition`, `readonly`, `static`, `deprecated`, `abstract`, `async`, `modification`,
	`documentation`, `defaultLibrary`
] as const satisfies string[]

const legend = new SemanticTokensLegend(tokenTypes, tokenModifiers)
const outputChannel = window.createOutputChannel(`WebAssembly IDE`)

const TOKENS = Object.fromEntries(Object.entries({
	AlignEquals: { tokenType: `property` },
	Block: { tokenType: `keyword` },
	BlockComment: { tokenType: `comment` },
	Branch: { tokenType: `keyword` },
	BranchIf: { tokenType: `keyword` },
	BranchTable: { tokenType: `keyword` },
	Call: { tokenType: `keyword` },
	CallIndirect: { tokenType: `keyword` },
	CloseBracket: { tokenType: `punctuation` },
	DataDrop: { tokenType: `keyword` },
	Drop: { tokenType: `keyword` },
	ElementDrop: { tokenType: `keyword` },
	Else: { tokenType: `keyword` },
	End: { tokenType: `keyword` },
	External: { tokenType: `type` },
	ExternalReference: { tokenType: `type` },
	Float32: { tokenType: `type` },
	Float32Constant: { tokenType: `keyword` },
	Float32Load: { tokenType: `keyword` },
	Float32Store: { tokenType: `keyword` },
	Float64: { tokenType: `type` },
	Float64Constant: { tokenType: `keyword` },
	Float64Load: { tokenType: `keyword` },
	Float64Store: { tokenType: `keyword` },
	Function: { tokenType: `keyword` },
	FunctionReference: { tokenType: `type` },
	GlobalGet: { tokenType: `keyword` },
	GlobalSet: { tokenType: `keyword` },
	Identifier: { tokenType: `variable` },
	If: { tokenType: `keyword` },
	Integer32: { tokenType: `type` },
	Integer32Constant: { tokenType: `keyword` },
	Integer32Load: { tokenType: `keyword` },
	Integer32Load16Signed: { tokenType: `keyword` },
	Integer32Load16Unsigned: { tokenType: `keyword` },
	Integer32Load8Signed: { tokenType: `keyword` },
	Integer32Load8Unsigned: { tokenType: `keyword` },
	Integer32Store: { tokenType: `keyword` },
	Integer32Store16: { tokenType: `keyword` },
	Integer32Store8: { tokenType: `keyword` },
	Integer64: { tokenType: `type` },
	Integer64Constant: { tokenType: `keyword` },
	Integer64Load: { tokenType: `keyword` },
	Integer64Load16Signed: { tokenType: `keyword` },
	Integer64Load16Unsigned: { tokenType: `keyword` },
	Integer64Load32Signed: { tokenType: `keyword` },
	Integer64Load32Unsigned: { tokenType: `keyword` },
	Integer64Load8Signed: { tokenType: `keyword` },
	Integer64Load8Unsigned: { tokenType: `keyword` },
	Integer64Store: { tokenType: `keyword` },
	Integer64Store16: { tokenType: `keyword` },
	Integer64Store32: { tokenType: `keyword` },
	Integer64Store8: { tokenType: `keyword` },
	Keyword: { tokenType: `keyword` },
	LineComment: { tokenType: `comment` },
	LocalGet: { tokenType: `keyword` },
	LocalSet: { tokenType: `keyword` },
	LocalTee: { tokenType: `keyword` },
	Loop: { tokenType: `keyword` },
	MemoryCopy: { tokenType: `keyword` },
	MemoryFill: { tokenType: `keyword` },
	MemoryGrow: { tokenType: `keyword` },
	MemoryInitiate: { tokenType: `keyword` },
	MemorySize: { tokenType: `keyword` },
	Mutable: { tokenType: `keyword` },
	NoOperation: { tokenType: `keyword` },
	Number: { tokenType: `number` },
	OffsetEquals: { tokenType: `property` },
	OpenBracket: { tokenType: `punctuation` },
	Parameter: { tokenType: `storage.type`, tokenModifiers: [ `declaration` ] },
	ReferenceFunction: { tokenType: `type` },
	ReferenceIsNull: { tokenType: `keyword` },
	ReferenceNull: { tokenType: `keyword` },
	Result: { tokenType: `keyword` },
	Return: { tokenType: `keyword` },
	Select: { tokenType: `keyword` },
	TableCopy: { tokenType: `keyword` },
	TableFill: { tokenType: `keyword` },
	TableGet: { tokenType: `keyword` },
	TableGrow: { tokenType: `keyword` },
	TableInitiate: { tokenType: `keyword` },
	TableSet: { tokenType: `keyword` },
	TableSize: { tokenType: `keyword` },
	Unreachable: { tokenType: `keyword` },
	Vector128: { tokenType: `type` },
	Module: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Data: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Declare: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Element: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Export: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Float32Absolute: { tokenType: `keyword` },
	Float32Add: { tokenType: `keyword` },
	Float32Ceiling: { tokenType: `keyword` },
	Float32ConvertInteger32Signed: { tokenType: `keyword` },
	Float32ConvertInteger32Unsigned: { tokenType: `keyword` },
	Float32ConvertInteger64Signed: { tokenType: `keyword` },
	Float32ConvertInteger64Unsigned: { tokenType: `keyword` },
	Float32CopySign: { tokenType: `keyword` },
	Float32DemoteFloat64: { tokenType: `keyword` },
	Float32Divide: { tokenType: `keyword` },
	Float32Equals: { tokenType: `keyword` },
	Float32Floor: { tokenType: `keyword` },
	Float32GreaterThan: { tokenType: `keyword` },
	Float32GreaterThanOrEquals: { tokenType: `keyword` },
	Float32LessThan: { tokenType: `keyword` },
	Float32LessThanOrEquals: { tokenType: `keyword` },
	Float32Maximum: { tokenType: `keyword` },
	Float32Minimum: { tokenType: `keyword` },
	Float32Multiply: { tokenType: `keyword` },
	Float32Nearest: { tokenType: `keyword` },
	Float32Negate: { tokenType: `keyword` },
	Float32NotEquals: { tokenType: `keyword` },
	Float32ReinterpretInteger32: { tokenType: `keyword` },
	Float32SquareRoot: { tokenType: `keyword` },
	Float32Subtract: { tokenType: `keyword` },
	Float32Truncate: { tokenType: `keyword` },
	Float64Absolute: { tokenType: `keyword` },
	Float64Add: { tokenType: `keyword` },
	Float64Ceiling: { tokenType: `keyword` },
	Float64ConvertInteger32Signed: { tokenType: `keyword` },
	Float64ConvertInteger32Unsigned: { tokenType: `keyword` },
	Float64ConvertInteger64Signed: { tokenType: `keyword` },
	Float64ConvertInteger64Unsigned: { tokenType: `keyword` },
	Float64CopySign: { tokenType: `keyword` },
	Float64Divide: { tokenType: `keyword` },
	Float64Equals: { tokenType: `keyword` },
	Float64Floor: { tokenType: `keyword` },
	Float64GreaterThan: { tokenType: `keyword` },
	Float64GreaterThanOrEquals: { tokenType: `keyword` },
	Float64LessThan: { tokenType: `keyword` },
	Float64LessThanOrEquals: { tokenType: `keyword` },
	Float64Maximum: { tokenType: `keyword` },
	Float64Minimum: { tokenType: `keyword` },
	Float64Multiply: { tokenType: `keyword` },
	Float64Nearest: { tokenType: `keyword` },
	Float64Negate: { tokenType: `keyword` },
	Float64NotEquals: { tokenType: `keyword` },
	Float64PromoteFloat32: { tokenType: `keyword` },
	Float64ReinterpretInteger64: { tokenType: `keyword` },
	Float64SquareRoot: { tokenType: `keyword` },
	Float64Subtract: { tokenType: `keyword` },
	Float64Truncate: { tokenType: `keyword` },
	Global: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Import: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Integer32Add: { tokenType: `keyword` },
	Integer32And: { tokenType: `keyword` },
	Integer32CountLeadingZeros: { tokenType: `keyword` },
	Integer32CountTrailingZeros: { tokenType: `keyword` },
	Integer32DivideSigned: { tokenType: `keyword` },
	Integer32DivideUnsigned: { tokenType: `keyword` },
	Integer32Equals: { tokenType: `keyword` },
	Integer32EqualsZero: { tokenType: `keyword` },
	Integer32Extend16Signed: { tokenType: `keyword` },
	Integer32Extend8Signed: { tokenType: `keyword` },
	Integer32GreaterThanOrEqualsSigned: { tokenType: `keyword` },
	Integer32GreaterThanOrEqualsUnsigned: { tokenType: `keyword` },
	Integer32GreaterThanSigned: { tokenType: `keyword` },
	Integer32GreaterThanUnsigned: { tokenType: `keyword` },
	Integer32LessThanOrEqualsSigned: { tokenType: `keyword` },
	Integer32LessThanOrEqualsUnsigned: { tokenType: `keyword` },
	Integer32LessThanSigned: { tokenType: `keyword` },
	Integer32LessThanUnsigned: { tokenType: `keyword` },
	Integer32Multiply: { tokenType: `keyword` },
	Integer32NotEqual: { tokenType: `keyword` },
	Integer32Or: { tokenType: `keyword` },
	Integer32PopCountNonZeros: { tokenType: `keyword` },
	Integer32ReinterpretFloat32: { tokenType: `keyword` },
	Integer32RemainderSigned: { tokenType: `keyword` },
	Integer32RemainderUnsigned: { tokenType: `keyword` },
	Integer32RotateLeft: { tokenType: `keyword` },
	Integer32RotateRight: { tokenType: `keyword` },
	Integer32ShiftLeft: { tokenType: `keyword` },
	Integer32ShiftRightSigned: { tokenType: `keyword` },
	Integer32ShiftRightUnsigned: { tokenType: `keyword` },
	Integer32Subtract: { tokenType: `keyword` },
	Integer32TruncateFloat32Signed: { tokenType: `keyword` },
	Integer32TruncateFloat32Unsigned: { tokenType: `keyword` },
	Integer32TruncateFloat64Signed: { tokenType: `keyword` },
	Integer32TruncateFloat64Unsigned: { tokenType: `keyword` },
	Integer32TruncateSaturateFloat32Signed: { tokenType: `keyword` },
	Integer32TruncateSaturateFloat32Unsigned: { tokenType: `keyword` },
	Integer32TruncateSaturateFloat64Signed: { tokenType: `keyword` },
	Integer32TruncateSaturateFloat64Unsigned: { tokenType: `keyword` },
	Integer32WrapInteger64: { tokenType: `keyword` },
	Integer32Xor: { tokenType: `keyword` },
	Integer64Add: { tokenType: `keyword` },
	Integer64And: { tokenType: `keyword` },
	Integer64CountLeadingZeros: { tokenType: `keyword` },
	Integer64CountTrailingZeros: { tokenType: `keyword` },
	Integer64DivideSigned: { tokenType: `keyword` },
	Integer64DivideUnsigned: { tokenType: `keyword` },
	Integer64Equals: { tokenType: `keyword` },
	Integer64EqualsZero: { tokenType: `keyword` },
	Integer64Extend16Signed: { tokenType: `keyword` },
	Integer64Extend32Signed: { tokenType: `keyword` },
	Integer64Extend8Signed: { tokenType: `keyword` },
	Integer64ExtendInteger32Signed: { tokenType: `keyword` },
	Integer64ExtendInteger32Unsigned: { tokenType: `keyword` },
	Integer64GreaterThanOrEqualsSigned: { tokenType: `keyword` },
	Integer64GreaterThanOrEqualsUnsigned: { tokenType: `keyword` },
	Integer64GreaterThanSigned: { tokenType: `keyword` },
	Integer64GreaterThanUnsigned: { tokenType: `keyword` },
	Integer64LessThanOrEqualsSigned: { tokenType: `keyword` },
	Integer64LessThanOrEqualsUnsigned: { tokenType: `keyword` },
	Integer64LessThanSigned: { tokenType: `keyword` },
	Integer64LessThanUnsigned: { tokenType: `keyword` },
	Integer64Multiply: { tokenType: `keyword` },
	Integer64NotEqual: { tokenType: `keyword` },
	Integer64Or: { tokenType: `keyword` },
	Integer64PopCountNonZeros: { tokenType: `keyword` },
	Integer64ReinterpretFloat64: { tokenType: `keyword` },
	Integer64RemainderSigned: { tokenType: `keyword` },
	Integer64RemainderUnsigned: { tokenType: `keyword` },
	Integer64RotateLeft: { tokenType: `keyword` },
	Integer64RotateRight: { tokenType: `keyword` },
	Integer64ShiftLeft: { tokenType: `keyword` },
	Integer64ShiftRightSigned: { tokenType: `keyword` },
	Integer64ShiftRightUnsigned: { tokenType: `keyword` },
	Integer64Subtract: { tokenType: `keyword` },
	Integer64TruncateFloat32Signed: { tokenType: `keyword` },
	Integer64TruncateFloat32Unsigned: { tokenType: `keyword` },
	Integer64TruncateFloat64Signed: { tokenType: `keyword` },
	Integer64TruncateFloat64Unsigned: { tokenType: `keyword` },
	Integer64TruncateSaturateFloat32Signed: { tokenType: `keyword` },
	Integer64TruncateSaturateFloat32Unsigned: { tokenType: `keyword` },
	Integer64TruncateSaturateFloat64Signed: { tokenType: `keyword` },
	Integer64TruncateSaturateFloat64Unsigned: { tokenType: `keyword` },
	Integer64Xor: { tokenType: `keyword` },
	Item: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Local: { tokenType: `storage.type`, tokenModifiers: [ `declaration` ] },
	Memory: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Offset: { tokenType: `keyword` },
	Start: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Table: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Type: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	Error: { tokenType: `invalid` },
	StringHexEscape: { tokenType: `stringEscape` },
	StringTabEscape: { tokenType: `stringEscape` },
	StringQuoteEscape: { tokenType: `stringEscape` },
	StringReturnEscape: { tokenType: `stringEscape` },
	StringNewlineEscape: { tokenType: `stringEscape` },
	StringBackslashEscape: { tokenType: `stringEscape` },
	StringUnicodeEscape: { tokenType: `stringEscape` },
	StringApostropheEscape: { tokenType: `stringEscape` },
	StringStartQuote: { tokenType: `string` },
	StringEndQuote: { tokenType: `string` },
	StringNonEscape: { tokenType: `string` },
	Float32x4: { tokenType: `keyword` },
	Float64x2: { tokenType: `keyword` },
	Integer16x8: { tokenType: `keyword` },
	Integer16x8Splat: { tokenType: `keyword` },
	Integer32x4: { tokenType: `keyword` },
	Integer32x4Splat: { tokenType: `keyword` },
	Integer64x2: { tokenType: `keyword` },
	Integer64x2Splat: { tokenType: `keyword` },
	Integer8x16: { tokenType: `keyword` },
	Integer8x16Shuffle: { tokenType: `keyword` },
	Integer8x16Splat: { tokenType: `keyword` },
	Integer8x16Swizzle: { tokenType: `keyword` },
	StringInvalidCharacterError: { tokenType: `keyword` },
	UnterminatedStringError: { tokenType: `keyword` },
	Vector128Const: { tokenType: `keyword` },
	Vector128Load: { tokenType: `keyword` },
	Vector128Load16Lane: { tokenType: `keyword` },
	Vector128Load16Splat: { tokenType: `keyword` },
	Vector128Load16x4Signed: { tokenType: `keyword` },
	Vector128Load16x4Unsigned: { tokenType: `keyword` },
	Vector128Load32Lane: { tokenType: `keyword` },
	Vector128Load32Splat: { tokenType: `keyword` },
	Vector128Load32x2Signed: { tokenType: `keyword` },
	Vector128Load32x2Unsigned: { tokenType: `keyword` },
	Vector128Load32Zero: { tokenType: `keyword` },
	Vector128Load64Lane: { tokenType: `keyword` },
	Vector128Load64Splat: { tokenType: `keyword` },
	Vector128Load64Zero: { tokenType: `keyword` },
	Vector128Load8Lane: { tokenType: `keyword` },
	Vector128Load8Splat: { tokenType: `keyword` },
	Vector128Load8x8Signed: { tokenType: `keyword` },
	Vector128Load8x8Unsigned: { tokenType: `keyword` },
	Vector128Store: { tokenType: `keyword` },
	Vector128Store16Lane: { tokenType: `keyword` },
	Vector128Store32Lane: { tokenType: `keyword` },
	Vector128Store64Lane: { tokenType: `keyword` },
	Vector128Store8Lane: { tokenType: `keyword` }
} satisfies Record<
	keyof typeof TokenTag,
	{ tokenType: typeof tokenTypes[number], tokenModifiers?: typeof tokenModifiers[number][] } | undefined
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
