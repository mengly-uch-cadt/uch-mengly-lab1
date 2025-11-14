const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions! Update for CI/CD deployment step.');
});

module.exports = app;
