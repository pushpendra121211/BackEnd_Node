const path = require('path')

console.log(path.sep)

const filePath = path.join("/content/", "subfolder", "text.txt")

console.log(filePath)

const base = path.basename(filePath)
console.log(base)
const absolutePath = path.resolve(__dirname);
console.log("current directory path",absolutePath)
const perticularFolderPath = path.resolve(__dirname,'content',"subfolder", "text.txt");
console.log("folderPath",perticularFolderPath)