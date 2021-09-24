const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
