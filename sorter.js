const fs = require('fs');
const path = require('path');
const gradient = require("gradient-string")


function cleanTextFiles() {
console.clear()
  fs.readdir('./', (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    files.forEach((file) => {
      if (file.startsWith('valid') && file.endsWith('.txt')) {
        const filePath = path.join('./', file);
        console.log(gradient.rainbow('Processing file: ' + file));

        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading the file:', err);
            return;
          }

          const lines = data.split('\n');
          const uniqueLines = [...new Set(lines)];

          const cleanedData = uniqueLines.join('\n');
          fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
            if (err) {
              console.error('Error writing the file:', err);
            } else {
              console.log(gradient.passion('Removed duplicate numbers and updated the file.'));
            }
          });
        });
      }
    });
  });
}

module.exports = {
  cleanTextFiles
};
