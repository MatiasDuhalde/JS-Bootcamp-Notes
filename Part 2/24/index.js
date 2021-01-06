#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const targetPath = process.argv[2] || process.cwd();

const lstat = filename => {
    return new Promise((resolve, reject) => {
        fs.lstat(path.join(targetPath, filename), (err, stat) => {
            if (err) {
                reject(err);
            }
            resolve(stat);
        });
    });
}

fs.readdir(targetPath, async (err, files) => {
    if (err) {
        console.log(err);
        return Array();
    }
    
    const statPromises = files.map(filename => {
        return lstat(filename);
    });

    const allStats = await Promise.all(statPromises);

    allStats.forEach((stats, index) => {
        if (stats.isFile()) {
            console.log(files[index]);
        } else {
            console.log(chalk.bold(files[index]));
        }
    });
});
