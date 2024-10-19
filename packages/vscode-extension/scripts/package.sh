#!/bin/sh
./rollup.config.js
scripts/emit-package-json.js
cp ../../licence language-configuration.json wat.tmLanguage.json dist/licence
