#!/usr/bin/env node

import inquirer from 'inquirer';
import animaux from 'animaux';
import { createZely } from 'src';

import { version } from '../package.json';

const app = animaux('create-zely');

app.version(version).action(async () => {
  const { name } = await inquirer.prompt({
    name: 'name',
    message: 'Project name:',
    default: 'my-app',
  });
  const { dir } = await inquirer.prompt({
    name: 'dir',
    message: 'Directory:',
    default: name,
  });
  const { template } = await inquirer.prompt({
    name: 'template',
    message: 'Template:',
    type: 'list',
    choices: ['typescript', 'javascript', 'react'],
  });

  createZely({ appName: name, dir, template });
});

app.parse(process.argv);
