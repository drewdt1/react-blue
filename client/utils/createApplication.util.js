// creating an index.html and placing at root of file structure

// do we have path setup? appName?
function createIndexHtml(path, appName, zip) {
  const fileName = 'index.html';
  const fileContent = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>SUP</title>
    </head>
    <body>
      <div>Hello World, it's Drew</div>
    </body>
  </html>`;

  zip.file(fileName, fileContent);
}


async function createApplicationUtil() {
  console.log('in createApplicationUtil')
  await createIndexHtml(path, appName, zip);
}

export default createApplicationUtil;