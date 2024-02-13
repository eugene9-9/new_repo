//Directories
//create a directory called myDirectory

const fs = require('fs')

//fs.mkdirSync('myDirectory')
//fs.mkdirSync('myDirector')

//check the contents inside myDirectory
//locate the path to the directory first
let folderPath = 'D:\\The Ultimate nodeJS Course\\myDirectory'
//pass the path into the fs - catch inside the variable as well and see the content
let folderContent = fs.readdirSync(folderPath)

console.log('Folder Content', folderContent)

//Check whether the Directory exists or not

//create a variable to call
let doesExist = fs.existsSync('myDirctory')

console.log(doesExist)

//how to delete directory
fs.rmdirSync('myDirector')

console.log('Directory has been deleted')


