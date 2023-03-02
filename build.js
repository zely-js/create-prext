const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',

  platform: 'node',

  bundle: true,
  minify: true,

  plugins: [nodeExternalsPlugin()],
});

esbuild.build({
  entryPoints: ['./src/bin.ts'],
  outfile: './dist/bin.js',

  platform: 'node',

  bundle: true,
  minify: true,

  plugins: [nodeExternalsPlugin()],
});
