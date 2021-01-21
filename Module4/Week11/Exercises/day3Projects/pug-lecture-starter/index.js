const express = require('express');
const app = express();
const { Pet, Owner, PetType } = require('./models');

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/pets', async (req, res) => {
  const data = {};

  res.render('pets', data);
});

app.get('/owners', async (req, res) => {
  const data = {};

  res.render('owners', data);
});

app.post('/pets', async (req, res) => {

});

app.post('/owners', async (req, res) => {
  
});

app.get('/', (_, res) => res.redirect('/pets'));
app.use(express.static('./assets'));

const port = 8081;
app.listen(port, () => {
  console.log(`Server accepting connections on ${port}`);
});
