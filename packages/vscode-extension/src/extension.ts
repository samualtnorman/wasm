import { tokenise } from "@samual/wasm-utils/dist/tokenise"
import { TokenTag } from "@samual/wasm-utils/dist/TokenTag"
import * as vscode from "vscode"
import { Diagnostic, Range } from "vscode"

const tokenTypes = [
	`namespace`, `class`, `enum`, `interface`, `struct`, `typeParameter`, `type`, `parameter`, `variable`, `property`,
	`enumMember`, `decorator`, `event`, `function`, `method`, `macro`, `label`, `comment`, `string`, `keyword`,
	`number`, `regexp`, `operator`, `punctuation`, `storage.type`, `invalid`
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
	[TokenTag.CloseBracket]: { tokenType: `punctuation` },
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
	[TokenTag.OpenBracket]: { tokenType: `punctuation` },
	[TokenTag.Parameter]: { tokenType: `storage.type`, tokenModifiers: [ `declaration` ] },
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
	[TokenTag.Vector128]: { tokenType: `type` },
	[TokenTag.Module]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Data]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Declare]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Element]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Export]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Float32Absolute]: { tokenType: `keyword` },
	[TokenTag.Float32Add]: { tokenType: `keyword` },
	[TokenTag.Float32Ceiling]: { tokenType: `keyword` },
	[TokenTag.Float32ConvertInteger32Signed]: { tokenType: `keyword` },
	[TokenTag.Float32ConvertInteger32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Float32ConvertInteger64Signed]: { tokenType: `keyword` },
	[TokenTag.Float32ConvertInteger64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Float32CopySign]: { tokenType: `keyword` },
	[TokenTag.Float32DemoteFloat64]: { tokenType: `keyword` },
	[TokenTag.Float32Divide]: { tokenType: `keyword` },
	[TokenTag.Float32Equals]: { tokenType: `keyword` },
	[TokenTag.Float32Floor]: { tokenType: `keyword` },
	[TokenTag.Float32GreaterThan]: { tokenType: `keyword` },
	[TokenTag.Float32GreaterThanOrEquals]: { tokenType: `keyword` },
	[TokenTag.Float32LessThan]: { tokenType: `keyword` },
	[TokenTag.Float32LessThanOrEquals]: { tokenType: `keyword` },
	[TokenTag.Float32Maximum]: { tokenType: `keyword` },
	[TokenTag.Float32Minimum]: { tokenType: `keyword` },
	[TokenTag.Float32Multiply]: { tokenType: `keyword` },
	[TokenTag.Float32Nearest]: { tokenType: `keyword` },
	[TokenTag.Float32Negate]: { tokenType: `keyword` },
	[TokenTag.Float32NotEquals]: { tokenType: `keyword` },
	[TokenTag.Float32ReinterpretInteger32]: { tokenType: `keyword` },
	[TokenTag.Float32SquareRoot]: { tokenType: `keyword` },
	[TokenTag.Float32Subtract]: { tokenType: `keyword` },
	[TokenTag.Float32Truncate]: { tokenType: `keyword` },
	[TokenTag.Float64Absolute]: { tokenType: `keyword` },
	[TokenTag.Float64Add]: { tokenType: `keyword` },
	[TokenTag.Float64Ceiling]: { tokenType: `keyword` },
	[TokenTag.Float64ConvertInteger32Signed]: { tokenType: `keyword` },
	[TokenTag.Float64ConvertInteger32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Float64ConvertInteger64Signed]: { tokenType: `keyword` },
	[TokenTag.Float64ConvertInteger64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Float64CopySign]: { tokenType: `keyword` },
	[TokenTag.Float64Divide]: { tokenType: `keyword` },
	[TokenTag.Float64Equals]: { tokenType: `keyword` },
	[TokenTag.Float64Floor]: { tokenType: `keyword` },
	[TokenTag.Float64GreaterThan]: { tokenType: `keyword` },
	[TokenTag.Float64GreaterThanOrEquals]: { tokenType: `keyword` },
	[TokenTag.Float64LessThan]: { tokenType: `keyword` },
	[TokenTag.Float64LessThanOrEquals]: { tokenType: `keyword` },
	[TokenTag.Float64Maximum]: { tokenType: `keyword` },
	[TokenTag.Float64Minimum]: { tokenType: `keyword` },
	[TokenTag.Float64Multiply]: { tokenType: `keyword` },
	[TokenTag.Float64Nearest]: { tokenType: `keyword` },
	[TokenTag.Float64Negate]: { tokenType: `keyword` },
	[TokenTag.Float64NotEquals]: { tokenType: `keyword` },
	[TokenTag.Float64PromoteFloat32]: { tokenType: `keyword` },
	[TokenTag.Float64ReinterpretInteger64]: { tokenType: `keyword` },
	[TokenTag.Float64SquareRoot]: { tokenType: `keyword` },
	[TokenTag.Float64Subtract]: { tokenType: `keyword` },
	[TokenTag.Float64Truncate]: { tokenType: `keyword` },
	[TokenTag.Global]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Import]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Integer32Add]: { tokenType: `keyword` },
	[TokenTag.Integer32And]: { tokenType: `keyword` },
	[TokenTag.Integer32CountLeadingZeros]: { tokenType: `keyword` },
	[TokenTag.Integer32CountTrailingZeros]: { tokenType: `keyword` },
	[TokenTag.Integer32DivideSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32DivideUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32Equals]: { tokenType: `keyword` },
	[TokenTag.Integer32EqualsZero]: { tokenType: `keyword` },
	[TokenTag.Integer32Extend16Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32Extend8Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32GreaterThanOrEqualsSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32GreaterThanOrEqualsUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32GreaterThanSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32GreaterThanUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32LessThanOrEqualsSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32LessThanOrEqualsUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32LessThanSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32LessThanUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32Multiply]: { tokenType: `keyword` },
	[TokenTag.Integer32NotEqual]: { tokenType: `keyword` },
	[TokenTag.Integer32Or]: { tokenType: `keyword` },
	[TokenTag.Integer32PopCountNonZeros]: { tokenType: `keyword` },
	[TokenTag.Integer32ReinterpretFloat32]: { tokenType: `keyword` },
	[TokenTag.Integer32RemainderSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32RemainderUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32RotateLeft]: { tokenType: `keyword` },
	[TokenTag.Integer32RotateRight]: { tokenType: `keyword` },
	[TokenTag.Integer32ShiftLeft]: { tokenType: `keyword` },
	[TokenTag.Integer32ShiftRightSigned]: { tokenType: `keyword` },
	[TokenTag.Integer32ShiftRightUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32Subtract]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateFloat32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateFloat32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateFloat64Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateFloat64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateSaturateFloat32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateSaturateFloat32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateSaturateFloat64Signed]: { tokenType: `keyword` },
	[TokenTag.Integer32TruncateSaturateFloat64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer32WrapInteger64]: { tokenType: `keyword` },
	[TokenTag.Integer32Xor]: { tokenType: `keyword` },
	[TokenTag.Integer64Add]: { tokenType: `keyword` },
	[TokenTag.Integer64And]: { tokenType: `keyword` },
	[TokenTag.Integer64CountLeadingZeros]: { tokenType: `keyword` },
	[TokenTag.Integer64CountTrailingZeros]: { tokenType: `keyword` },
	[TokenTag.Integer64DivideSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64DivideUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Equals]: { tokenType: `keyword` },
	[TokenTag.Integer64EqualsZero]: { tokenType: `keyword` },
	[TokenTag.Integer64Extend16Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64Extend32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64Extend8Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64ExtendInteger32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64ExtendInteger32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64GreaterThanOrEqualsSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64GreaterThanOrEqualsUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64GreaterThanSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64GreaterThanUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64LessThanOrEqualsSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64LessThanOrEqualsUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64LessThanSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64LessThanUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Multiply]: { tokenType: `keyword` },
	[TokenTag.Integer64NotEqual]: { tokenType: `keyword` },
	[TokenTag.Integer64Or]: { tokenType: `keyword` },
	[TokenTag.Integer64PopCountNonZeros]: { tokenType: `keyword` },
	[TokenTag.Integer64ReinterpretFloat64]: { tokenType: `keyword` },
	[TokenTag.Integer64RemainderSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64RemainderUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64RotateLeft]: { tokenType: `keyword` },
	[TokenTag.Integer64RotateRight]: { tokenType: `keyword` },
	[TokenTag.Integer64ShiftLeft]: { tokenType: `keyword` },
	[TokenTag.Integer64ShiftRightSigned]: { tokenType: `keyword` },
	[TokenTag.Integer64ShiftRightUnsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Subtract]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateFloat32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateFloat32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateFloat64Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateFloat64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateSaturateFloat32Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateSaturateFloat32Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateSaturateFloat64Signed]: { tokenType: `keyword` },
	[TokenTag.Integer64TruncateSaturateFloat64Unsigned]: { tokenType: `keyword` },
	[TokenTag.Integer64Xor]: { tokenType: `keyword` },
	[TokenTag.Item]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Local]: { tokenType: `storage.type`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Memory]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Offset]: { tokenType: `keyword` },
	[TokenTag.Start]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Table]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Type]: { tokenType: `keyword`, tokenModifiers: [ `declaration` ] },
	[TokenTag.Error]: { tokenType: `invalid` }
}

const diagnosticCollection = vscode.languages.createDiagnosticCollection(`wat`)

vscode.languages.registerDocumentSemanticTokensProvider(
	{ language: `wat` },
	{
		provideDocumentSemanticTokens(document) {
			try {
				const tokensBuilder = new vscode.SemanticTokensBuilder(legend)
				const diagnostics: vscode.Diagnostic[] = []

				for (const token of tokenise(document.getText())) {
					try {
						const start = document.positionAt(token.index)
						const end = document.positionAt(token.index + token.size)

						if (token.tag == TokenTag.Error)
							diagnostics.push(new Diagnostic(new Range(start, end), `Syntax Error`))

						if (TOKENS[token.tag]) {
							if (start.line != end.line) {
								pushToken(document.lineAt(start.line).range.with({ start }))

								for (let line = start.line + 1; line < end.line; line++)
									pushToken(document.lineAt(line).range)

								pushToken(document.lineAt(end.line).range.with({ end }))
							} else {
								pushToken(new vscode.Range(start, end))
							}

							function pushToken(range: vscode.Range) {
								tokensBuilder.push(range,
									TOKENS[token.tag]!.tokenType,
									TOKENS[token.tag]!.tokenModifiers
								)
							}
						}
					} catch (error) {
						outputChannel.appendLine(`Caught ${(error instanceof Error && error.stack) || String(error)}`)
					}
				}

				diagnosticCollection.set(document.uri, diagnostics)

				return tokensBuilder.build()
			} catch (error) {
				outputChannel.appendLine(`Caught ${(error instanceof Error && error.stack) || String(error)}`)
			}
		}
	},
	legend
)
