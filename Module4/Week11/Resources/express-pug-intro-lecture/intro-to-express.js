const express = require('express');

const app = express(); // Initializing the Express application

app.get(`/`, (req, res) => {
  res.send('<h1>Hello from GET /</h1>');
});

app.get(`/`, (req, res) => { // will never be called
  res.send('<h1>COPY</h1>');
});

const port = 3000;

app.listen(port, () => console.log('Server is listening on port', port));
