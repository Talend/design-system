#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const dist = path.join(__dirname, './dist/');
mkdirp.sync(path.join(dist, 'svg-bundle'));



function createAllInOneBundle() {
    const iconsPath = fs.readdirSync('src/icons');
	const buff = iconsPath.map(p => p.replace('.svg', '')).map(id => `<symbol id="icon-${id}">${fs.readFileSync(`src/icons/${id}.svg`)}</symbol>`);
	buff.unshift('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" class="sr-only">');
	buff.push('</svg>');
	fs.writeFileSync(path.join(dist, './svg-bundle/design-system.svg'), buff.join(''));
}

createAllInOneBundle();

