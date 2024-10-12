#!/bin/sh
export PATH=$PWD/node_modules/.bin:$PATH
(cd packages/utils && scripts/emit-types.sh)
tsc
tsc --project packages/utils/src
tsc --project packages/vscode-extension/src
vitest run
