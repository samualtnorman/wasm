#!/bin/sh
rm -rf dist
./rollup.config.js
scripts/emit-package-json.js
scripts/emit-types.sh
