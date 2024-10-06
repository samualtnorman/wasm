#!/bin/sh
rm -rf dist
./rollup.config.js
scripts/emit-package-json.js
pnpm tsc --project src --declaration --emitDeclarationOnly --noEmit false --outDir dist
