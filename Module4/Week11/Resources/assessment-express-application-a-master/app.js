/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */
const express = require("express");
const app = express();
const { Entree, EntreeType } = require('./models')

app.set('view engine', 'pug');

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

const csrfProtection = require("csurf")({cookie:true});
app.use(csrfProtection);

app.get('/entrees/new', async (req,res) => {
  const entreeTypes = await EntreeType.findAll();
  res.render('create', {entreeTypes, csrfToken: req.csrfToken()});
});

app.post('/entrees', async (req, res, next) => {
  try {
    const entree =
    await Entree.create(req.body)
    //   name: entree.name,
    //   description: entree.description,
    //   price: entree.price,
    //   entreeTypeId: entree.entreeTypeId
    // }
    res.redirect('/')
  } catch (error ) {
    next(error)
  }
})


app.get('/', async (req, res) => {
  const entrees = await Entree.findAll({
    include:EntreeType
  });
  res.render('index', {entrees});
});



const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






























/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
