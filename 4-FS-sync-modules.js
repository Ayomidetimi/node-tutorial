//non blocking approach

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

const newFile = writeFileSync('./content/third.txt', 'third: how is you idan', {flag: 'a'})

console.log(newFile)