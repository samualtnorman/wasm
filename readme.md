# WASM VSCode Extension
![image](https://github.com/user-attachments/assets/3b24d6b7-5dec-40d8-ae4d-d0639fc35410)

## How To Run
1. Install [Node.JS](https://nodejs.org/en/download) and [PNPM](https://pnpm.io/installation)
2. Run `pnpm install`
3. Go to "Run and Debug" in VScode and click the play button next to "Run Extension"

# WASM tokeniser
This is just a project where I play around with trying to write a WASM parser.
I got as far as writing a tokeniser (and a syntax highlighter that uses the tokeniser).

To build and run this yourself, you'll need [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) installed.

1. Run `pnpm install`
2. Run `cd packages/utils`
3. Run `pnpm rollup --config`
4. Run `node dist/playground`

You should then see something like this:

![image](https://github.com/user-attachments/assets/e1e3c8e1-499f-4330-b7af-8142d7acf03e)
