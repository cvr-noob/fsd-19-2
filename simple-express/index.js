const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Home</h1>');
});

app.get('/json', (req, res) => {
  res.json({ status: "success", data: 100 });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000);
