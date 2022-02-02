require('./env.js');
const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

if (process.env.ENV === 'LOCAL') {
  const credentials = {
    key: fs.readFileSync(path.join(__dirname, './key.pem'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, './cert.pem'), 'utf8'),
  };

  const server = https.createServer(credentials, app);

  server.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
