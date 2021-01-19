const path = require('path')
const jsdom = require('jsdom');
const { rejects } = require('assert');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>`);

const render = async filename => {
    const filePath = path.join(process.cwd(), filename);
    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable'
    })

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            resolve(dom);
        });
    });
};

module.exports = render;
