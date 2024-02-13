//files

const fs = require('fs')
//how can you read,write,delete and update
//reading a file with read file or read file sync
//reading a file
let fileContent = fs.readFileSync('f1.txt')
//read your content in buffer format
console.log('data of file 1-> ', fileContent)
//read in string format
console.log('data of file 1-> ' + fileContent)

//writing inside a file
fs.writeSync('f2.txt', 'This file has been written')

console.log('File has been written')
//append a file
fs.appendFileSync('f3.txt', 'This is updated data')
//does not erase file content
console.log('File has been appended')

//deleting a file
//fs.unlinkSync('f2.txt')

//console.log('This file has been delete')
