const express = require('express');
const articles = require('./data/articles');

const app = express();
const port = 3000;

app.use(express.json());


app.get('/articles', (req, res) => {
  res.send(articles);
});

app.get('/articles/statistics', (req, res) => {
  res.send('To implement');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
