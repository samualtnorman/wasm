import { assert } from "@samual/lib/assert"
import type { AstNode } from "./AstNode"
import { AstNodeTag } from "./AstNodeTag"
import { MAX_LOOP_COUNT } from "./common"
import { getNextAstNode } from "./getNextAstNode"
import { Token, tokenise } from "./tokenise"

export function parse(code: string, tokens: Token[]): AstNode[] {
	const tokenIndex = { $: 0 }
	const astNodes: AstNode[] = []
	const unfinishedAstNodes: AstNode[] = []
	let loopsLeft = MAX_LOOP_COUNT

	do {
		assert(loopsLeft--, HERE)

		const currentAstNode = unfinishedAstNodes.at(-1)
		const astNode = getNextAstNode(code, tokens, tokenIndex, astNodes.length, currentAstNode)

		if (currentAstNode && currentAstNode.size != -1)
			unfinishedAstNodes.pop()

		if (astNode) {
			astNodes.push(astNode)

			if (astNode.size == -1)
				unfinishedAstNodes.push(astNode)
		}
	} while (unfinishedAstNodes.length)

	return astNodes
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest
	const expectAstNodes = (code: string) => expect(parse(code, [ ...tokenise(code) ]))

	test(`empty module`, () => expectAstNodes(`(module)`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [] }
	] as const satisfies Partial<AstNode>[]))

	test(`module with empty function type`, () => expectAstNodes(`(module (type (func)))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [] }
	] as const satisfies Partial<AstNode>[]))

	test(`empty module with identifier`, () => expectAstNodes(`(module $a)`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: 1, moduleFields: [] },
		{ tag: AstNodeTag.Identifier }
	] as const satisfies Partial<AstNode>[]))

	test(`module with empty function type with identifier`, () => expectAstNodes(`(module (type $a (func)))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: 2, functionType: 3 },
		{ tag: AstNodeTag.Identifier },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [] }
	] as const satisfies Partial<AstNode>[]))

	test(`module with function type with param`, () => expectAstNodes(`(module (type (func (param i32))))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [ 3 ], results: [] },
		{ tag: AstNodeTag.Parameter, identifier: undefined, valueTypes: [ 4 ] },
		{ tag: AstNodeTag.Integer32Type }
	] as const satisfies Partial<AstNode>[]))

	test(`module with function type with result`, () => expectAstNodes(`(module (type (func (result i32))))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [ 3 ] },
		{ tag: AstNodeTag.Result, valueTypes: [ 4 ] },
		{ tag: AstNodeTag.Integer32Type }
	] as const satisfies Partial<AstNode>[]))

	test(`module with function type with param and result`, () => expectAstNodes(`(module (type (func (param i32) (result i32))))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [ 3 ], results: [ 5 ] },
		{ tag: AstNodeTag.Parameter, identifier: undefined, valueTypes: [ 4 ] },
		{ tag: AstNodeTag.Integer32Type },
		{ tag: AstNodeTag.Result, valueTypes: [ 6 ] },
		{ tag: AstNodeTag.Integer32Type }
	] as const satisfies Partial<AstNode>[]))

	test(`module with function type with multiple params and result`, () => expectAstNodes(`(module (type (func (param i32 i32) (result i32))))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [ 3 ], results: [ 6 ] },
		{ tag: AstNodeTag.Parameter, identifier: undefined, valueTypes: [ 4, 5 ] },
		{ tag: AstNodeTag.Integer32Type },
		{ tag: AstNodeTag.Integer32Type },
		{ tag: AstNodeTag.Result, valueTypes: [ 7 ] },
		{ tag: AstNodeTag.Integer32Type }
	] as const satisfies Partial<AstNode>[]))

	test(`module with function type with multiple seperate params and result`, () => expectAstNodes(`(module (type (func (param i32) (param i32) (result i32))))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [ 3, 5 ], results: [ 7 ] },
		{ tag: AstNodeTag.Parameter, identifier: undefined, valueTypes: [ 4 ] },
		{ tag: AstNodeTag.Integer32Type },
		{ tag: AstNodeTag.Parameter, identifier: undefined, valueTypes: [ 6 ] },
		{ tag: AstNodeTag.Integer32Type },
		{ tag: AstNodeTag.Result, valueTypes: [ 8 ] },
		{ tag: AstNodeTag.Integer32Type }
	] as const satisfies Partial<AstNode>[]))

	test(`module with multiple types`, () => expectAstNodes(`(module (type (func)) (type (func)))`).toMatchObject([
		{ tag: AstNodeTag.Module, identifier: undefined, moduleFields: [ 1, 3 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 4 },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [] }
	] as const satisfies Partial<AstNode>[]))

	test(`implicit module`, () => expectAstNodes(`(type (func))`).toMatchObject([
		{ tag: AstNodeTag.ImplicitModule, moduleFields: [ 1 ] },
		{ tag: AstNodeTag.Type, identifier: undefined, functionType: 2 },
		{ tag: AstNodeTag.FunctionType, parameters: [], results: [] }
	] as const satisfies Partial<AstNode>[]))

	test(`import`, () => {
		expectAstNodes(`(import "a" "b" (func $c (type 1)))`).toMatchObject([
			{ tag: AstNodeTag.Import, module: 1, name: 2, description: 3 },
			{ tag: AstNodeTag.StringLiteral },
			{ tag: AstNodeTag.StringLiteral },
			{ tag: AstNodeTag.ImportDescriptionFunction, identifier: 4, typeUse: 5 },
			{ tag: AstNodeTag.Identifier },
			{ tag: AstNodeTag.TypeUse, typeIndex: 6 },
			{ tag: AstNodeTag.NumberLiteral }
		] as const satisfies Partial<AstNode>[])
	})
}
