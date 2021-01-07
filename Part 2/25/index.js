#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const prog = require('caporal');
const chalk = require('chalk');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

prog
    .version('0.0.1')
    // .command()
    .argument('[filename]', 'Name of a file to execute')
    // .option()
    .action(async ({ filename }) => {
        const targetPath = filename || 'index.js';

        try {
            await fs.promises.access(targetPath);
        } catch (err) {
            throw new Error(`Could not find the file ${targetPath}`)
        }

        let child;
        const start = debounce(() => {
            if (child) child.kill('SIGTERM');
            console.log(chalk.green('>>>> Starting process...'));
            child = spawn('node', [targetPath], { stdio: 'inherit' })
        }, 200);

        chokidar.watch(targetPath)
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
    });

prog.parse(process.argv);
