# WASM tokeniser
This is just a project where I play around with trying to write a WASM parser.
I got as far as writing a tokeniser that can tokenise basic syntax (and a syntax highlighter that uses the tokeniser). I then discovered that WebAssembly Text Format block
comments can be nested and discovered I need to rethink my approach to this parser.

To build and run this yourself, you'll need [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) installed.

1. Run `pnpm install`
2. Run `pnpm rollup --config`
3. Run `node dist/playground`

You should then see something like this:

![Demo of running `node dist/playground`](node-dist-playground-demo.webp)
