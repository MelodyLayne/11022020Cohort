const express = require("express");
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

const csrfProtection = csurf({ cookie: true });
app.use(express.urlencoded())
app.use(cookieParser());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create",csrfProtection, async (req, res, next) => {
  res.render("create", {
    title: "Create a User",
    messages: [],
    csrfToken: req.csrfToken()
  });
});

app.get("/create-interesting",csrfProtection, async (req, res) => {
  res.render("create-interesting");
});

const userValidation= (req,res, next) => {
  const {firstName, lastName, email, password} = req.body;

  const errors = [];
  if (!firstName){
    errors.push("Please provide a First Name")
  }
  if (!lastName){
    errors.push("Please provide a Last Name")
  }
  if (!email){
    errors.push("Please provide an email")
  }
  if (!password){
    errors.push("Please provide a password")
  }
  if (errors.length > 0){
    res.render('create',{errors})
    return;
  }

}

app.post("/create", csrfProtection, userValidation, (req, res) => {
  const {firstName, lastName, email, password, confirmedPassword} = req.body;

  if (req.errors.length > 0){
    res.render('create',{
      errors: req.errors,
      firstName,
      lastName,
      email,
      csrfToken: req.csrfToken();
    })
    return;
  }

})

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
