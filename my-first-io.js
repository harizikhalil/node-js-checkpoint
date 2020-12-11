const fs = require('fs')
const newfile=fs.readFileSync(process.argv[2])
console.log(newfile.toString().match(/\n/g).length)