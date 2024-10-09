#!/bin/sh
./rollup.config.js
scripts/emit-package-json.js
cp ../../licence dist/licence
