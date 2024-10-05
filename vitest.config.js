import { babelPluginHere } from "babel-plugin-here"
import { babel } from "@rollup/plugin-babel"
import babelPluginSyntaxTypescript from "@babel/plugin-syntax-typescript"

export default /** @satisfies {import("vitest/config").UserConfig} */ ({
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
})
