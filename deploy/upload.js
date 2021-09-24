const s3 = require('./s3.js');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const mimeTypes = {
  'css': 'text/css',
  'html': 'text/html',
  'js': 'text/javascript',
  'map': 'text/plain',
  'txt': 'text/plain',
};

const encodings = {
  'gz': 'gzip',
};

const getFileKeys = async dir => {
  const absolutePath = path.resolve(dir);

  const getFileKeysHelper = async (dir, keys = []) => {
    const files = await fsPromises.readdir(dir);
    for (const file of files) {
      const filePath = path.resolve(dir, file);
      const stat = await fsPromises.stat(filePath);
      if (stat.isDirectory()) {
        await getFileKeysHelper(filePath, keys);
      } else {
        const absolutePathRegex = new RegExp(`^${absolutePath}/`);
        const key = filePath.replace(absolutePathRegex, '');
        keys.push(key);
      }
    }
    return keys;
  };

  return await getFileKeysHelper(absolutePath);
};

const uploadFile = async (key, data) => {
  const keyParts = key.split('.');
  let extension = keyParts.pop();
  const encoding = encodings[extension] ? encodings[extension] : '';
  if (encoding !== '') {
    extension = keyParts.pop();
  }
  s3.uploadToS3(key, data, mimeTypes[extension], encoding);
};

const uploadFolder = async dir => {
  const absolutePath = path.resolve(dir);
  const keys = await getFileKeys(dir);
  for (const key of keys) {
    const data = fs.createReadStream(`${absolutePath}/${key}`);
    data.on('error', err => {
      console.log(`File error: ${err}`);
    });
    await uploadFile(key, data);
  }
};

const run = async () => {
  await s3.createBucket();
  await uploadFolder('./dist');
  process.exit;
};

run();

