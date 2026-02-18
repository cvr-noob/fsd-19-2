const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
  ];

  res.render('index', { userList: users });
});

app.listen(3000);
