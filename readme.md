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

# VSCode Extension
![image](https://github.com/user-attachments/assets/a8311e01-0643-4526-ad16-d85253fb5ed0)

## How To Run
1. Run `pnpm install`
2. Run `cd packages/utils`
3. Run `pnpm rollup --config`
4. Run `node scripts/emit-package-json.js`
5. Go to "Run and Debug" in VScode and click the play button next to "Run Extension"
