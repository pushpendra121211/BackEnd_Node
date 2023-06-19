const {writeFileSync,readFileSync} = require('fs');
const fs = require('fs');

writeFileSync("./content/subfolder/text.txt", "hi, good morning all");

const first = readFileSync("./content/subfolder/text.txt","utf-8");

console.log(first)




// 1. Read the existing content from the file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const existingContent = data;

  // 2. Append the new content to the existing content
  const newContent = existingContent + ' This is the new content.';

  // 3. Write the combined content back to the file
  fs.writeFile('file.txt', newContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Content written successfully.');
  });
});
