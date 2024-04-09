#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import parseFile from './parser.js';
import genDiff from './genDif.js';

const program = new Command();

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);

    const data1 = parseFile(absolutePath1);
    const data2 = parseFile(absolutePath2);
    const diff = genDiff(data1, data2);

    console.log(diff);
  });

program.parse(process.argv);
