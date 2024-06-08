import { minify } from 'minify';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

const folderPath = '/Users/yasseraly/sirqels';

// Prettier options
const prettierOptions = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 2,
  singleQuote: true,
};

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(folderPath, file.name);
      const ext = path.extname(file.name);
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
    }
  });
});
