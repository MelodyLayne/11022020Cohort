const express = require('express');

const app = express(); // Initializing the Express application

app.set('view engine', 'pug');
// app.set('views', process.cwd() + '/views'); // default

app.all('*', (req, res) => {
  console.log('Request method:', req.method);
  console.log('Request path:', req.path);

  res.render('layout', { title: 'Welcome', heading: 'Home' });
});

const port = 3000;

app.listen(port, () => console.log('Server is listening on port', port));
