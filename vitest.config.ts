import babelPluginSyntaxTypescript from "@babel/plugin-syntax-typescript"
import { babel } from "@rollup/plugin-babel"
import { babelPluginHere } from "babel-plugin-here"
import type { UserConfig } from "vitest/config"

export default {
	test: { includeSource: [ "packages/**/src/**/*.ts" ] },
	plugins: [
		{
			...babel({
				babelHelpers: "bundled",
				extensions: [ ".ts" ],
				plugins: [ babelPluginSyntaxTypescript, babelPluginHere() ]
			}),
			enforce: "pre"
		}
	]
} satisfies UserConfig
