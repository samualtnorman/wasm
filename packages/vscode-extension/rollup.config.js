#!node_modules/.bin/rollup --config
import babelPresetTypescript from "@babel/preset-typescript"
import { babel } from "@rollup/plugin-babel"
import json from "@rollup/plugin-json"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import { cpus } from "os"

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
		json({ preferConst: true }),
		terser({
			compress: { passes: Infinity, unsafe: true },
			mangle: false,
			ecma: 2020,
			maxWorkers: Math.floor(cpus().length / 2)
		})
	],
	strictDeprecations: true,
	treeshake: { moduleSideEffects: false }
})
