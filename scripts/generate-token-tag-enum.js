#!/usr/bin/env node
import Braces from "braces"
import { readFileSync, writeFileSync } from "fs"

const members =
	readFileSync("src/TokenTag.txt", { encoding: "utf8" }).trim().split("\n").flatMap(name => Braces.expand(name))

const code = `\
export const TokenTag = {
${members.map((name, index) =>
	`\t${name}: ${index + 1} as number & { [K in { readonly opaque: unique symbol }["opaque"]]: "TokenTag.${name}" },`
).join(`\n`)}
}

export type TokenTag = typeof TokenTag[keyof typeof TokenTag]

export namespace TokenTag {
${members.map(name =>
	`\texport type ${name} = typeof TokenTag.${name}`
).join(`\n`)}
}
`

writeFileSync("src/TokenTag.ts", code)

process.exit()
