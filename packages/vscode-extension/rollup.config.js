#!node_modules/.bin/rollup --config
import babelPresetTypescript from "@babel/preset-typescript"
import { babel } from "@rollup/plugin-babel"
import terser from "@rollup/plugin-terser"
import { cpus } from "os"
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default /** @satisfies {import("rollup").RollupOptions} */ ({
	input: `src/extension.ts`,
	output: { dir: `dist`, format: `cjs` },
	external: [ `vscode` ],
	plugins: [
		babel({
			babelHelpers: "bundled",
			extensions: [ ".ts" ],
			presets: [
				[ babelPresetTypescript, { allowDeclareFields: true, optimizeConstEnums: true } ]
			]
		}),
		nodeResolve({ extensions: [ ".ts", ".js" ], exportConditions: [ "node" ] }),
		terser({ compress: { passes: Infinity }, maxWorkers: Math.floor(cpus().length / 2), ecma: 2020 })
	],
	strictDeprecations: true,
	treeshake: { moduleSideEffects: false }
})
