const { minify } = require('minify');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

cd /Users/yasseraly/Vaza/Archive/Sirqels

// Prettier options
const prettierOptions = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 2,
  singleQuote: true,
};

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const ext = path.extname(file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = prettier.format(content, prettierOptions);

    switch (ext) {
      case '.html':
        minify(content, { html: true })
          .then((minifiedContent) => {
            fs.writeFileSync(filePath, minifiedContent);
            console.log(`${filePath} minified and formatted successfully!`);
          })
          .catch((error) => {
            console.error(`Error minifying ${filePath}:`, error);
          });
        break;
      case '.css':
        minify(content, { css: true })
          .then((minifiedContent) => {
            fs.writeFileSync(filePath, minifiedContent);
            console.log(`${filePath} minified and formatted successfully!`);
          })
          .catch((error) => {
            console.error(`Error minifying ${filePath}:`, error);
          });
        break;
      case '.js':
        minify(content, { js: true })
          .then((minifiedContent) => {
            fs.writeFileSync(filePath, minifiedContent);
            console.log(`${filePath} minified and formatted successfully!`);
          })
          .catch((error) => {
            console.error(`Error minifying ${filePath}:`, error);
          });
        break;
    }
  });
});