#!/usr/bin/env node
import Braces from "braces"
import { readFileSync, writeFileSync } from "fs"
import * as Path from "path"

const target = process.argv[2]
const extensionLength = Path.extname(target).length
const enumName = Path.basename(target).slice(0, -extensionLength)

const members = readFileSync(target, { encoding: "utf8" })
	.trim()
	.replace(/\n\t+/g, ``)
	.replace(/\n\t*}/g, `}`)
	.replace(/\n\n+/g, `\n`)
	.split("\n")
	.flatMap(name => Braces.expand(name))
	.filter(Boolean)
	.sort()

const code = `\
declare enum ${enumName}Enum { ${members.join(`, `)} }

export const ${enumName} = {
${members.map((name, index) =>
	`\t${name}: ${index + 1} as ${enumName}Enum.${name},`
).join(`\n`)}
}

export type ${enumName} = ${enumName}Enum

export namespace ${enumName} {
${members.map(name =>
	`\texport type ${name} = typeof ${enumName}.${name}`
).join(`\n`)}
}
`

const outFile = `${target.slice(0, -extensionLength)}.ts`

writeFileSync(outFile, code)
console.log(`Wrote ${members.length} enum members to ${outFile}`)
process.exit()
