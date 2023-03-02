import fs from 'fs-extra';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

import 'colors';

import map from '../templates/map.json';

export interface Options {
  appName: string;
  template: 'javascript' | 'typescript';
  dir: string;
}

const msg = {
  success: 'success'.green,
  $: '$'.gray,
  '>': '>'.red,
};

export function createPrext(opts: Options) {
  console.log('\nCloning Templates...'.cyan);

  fs.copySync(join(__dirname, '../', map[opts.template]), opts.dir);
  fs.copySync(join(__dirname, '../', map.__default), opts.dir);

  const pkgJSON = readFileSync(join(opts.dir, 'package.json')).toString();

  writeFileSync(join(opts.dir, 'package.json'), pkgJSON.replace('custom-name', opts.appName));

  console.log('');
  console.log(`  ${msg.$} cd ${opts.dir}`);
  console.log(`  ${msg.$} npm i`);
  console.log(`  ${msg.$} npm run dev\n`);
  console.log('Happy Hacking!\n'.cyan);
}
