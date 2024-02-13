//import the path module into the variable
const path = require('path')
//need a file or folder to work with the path module - create f1.txt
//extract the extension of a file to confirm what it is?
let ext = path.extname('D:\The Ultimate nodeJS Course\f1.txt')
//get the file's actual name
let baseName = path.basename('D:\\The Ultimate nodeJS Course\\f1.txt')

console.log(ext)
//you need to put double backward slashes (security measure) to show the full file name using baseName
console.log(baseName)
//show the path of the current file you are working on
console.log(__filename)
//to show the current directory name
console.log(__dirname)