// const fs = require('fs');
// const path = require('path');

// const dir = 'c:/Users/Dell/Desktop/Rockworx';

// function replaceInFiles(dirPath) {
//   const files = fs.readdirSync(dirPath);
//   files.forEach(file => {
//     const filePath = path.join(dirPath, file);
//     const stat = fs.statSync(filePath);
//     if (stat.isDirectory() && !file.startsWith('.')) {
//       replaceInFiles(filePath);
//     } else if (file.endsWith('.html') || file.endsWith('.css')) {
//       let content = fs.readFileSync(filePath, 'utf8');
//       const updated = content.replace(/Rockworx/g, 'Royalrocx');
//       if (content !== updated) {
//         fs.writeFileSync(filePath, updated, 'utf8');
//         console.log('Updated: ' + file);
//       }
//     }
//   });
// }

// replaceInFiles(dir);
// console.log('Done');
