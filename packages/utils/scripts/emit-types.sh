#!/bin/sh
node_modules/.bin/tsc --project src --noCheck --declaration --emitDeclarationOnly --noEmit false --outDir dist $@
