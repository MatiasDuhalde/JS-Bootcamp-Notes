const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const render = require('./render');

const forbiddenDirs = ['node_modules'];

class Runner {
    constructor() {
        this.testFiles = [];
    }

    async runTests() {
        for (let file of this.testFiles) {
            console.log(chalk.gray(`---- ${file.shortName}`));
            global.render = render;
            const beforeEaches = [];
            global.beforeEach = fn => {
                beforeEaches.push(fn);
            };
            global.it = async (desc, fn) => {
                beforeEaches.forEach(func => func());
                try {
                    await fn();
                    console.log(chalk.green(`\tOK - ${desc}`));
                } catch (err) {
                    const message = err.message.replace(/\n/g, '\n\t\t');
                    console.log(chalk.red(`\tX - ${desc}`));
                    console.log('\t', message);
                }
            };
            try {
                require(file.name);
            } catch (err) {
                console.log(chalk.red(`\tX - Error loading file ${file.shortName}`));
                console.log(err);
            }
        }
    }

    async collectFiles(targetPath) {
        // find *.tests.js files
        // exclude node_modules folder
        const files = await fs.promises.readdir(targetPath);
        for (let file of files) {
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.includes('.test.js')) {
                this.testFiles.push({
                    name: filepath,
                    shortName: file
                });
            } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
                await this.collectFiles(filepath);
            }
        }
    }
}

module.exports = Runner;
