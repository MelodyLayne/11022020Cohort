const express = require('express');

const app = express(); // Initializing the Express application

app.set('view engine', 'pug');
// app.set('views', process.cwd() + '/views'); // default

app.get('/', (req, res) => {
  const productPaths = [
    `/product/1`,
    `/product/2`,
    `/product/asdf`
  ];

  const productsPaths = [
    `/products`,
    `/our-products`,
    `/product`,
    `/prodcts`,
    `/productts`,
    `/productos`
  ];

  res.render('index', { productPaths, productsPaths });
  // res.render('index', { productPaths: productPaths, productsPaths: productsPaths });
});

const port = 3000;

app.listen(port, () => console.log('Server is listening on port', port));
