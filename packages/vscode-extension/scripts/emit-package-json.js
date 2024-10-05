#!/usr/bin/env node
import { mkdirSync as makeDirectorySync, writeFileSync } from "fs"
import packageJson_ from "../package.json" with { type: "json" }

const { private: _, type, devDependencies, scripts, engines: { pnpm, ...engines }, ...packageJson } = packageJson_

makeDirectorySync("dist", { recursive: true })
writeFileSync("dist/package.json", JSON.stringify({ ...packageJson, engines }, undefined, "\t"))
process.exit()
