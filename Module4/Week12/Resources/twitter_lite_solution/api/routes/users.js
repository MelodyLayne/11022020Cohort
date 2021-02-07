const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

const { User, Tweet } = db;

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

//Following restful conventions, route to sign up a new user
// thumbs up) POST /users
// yes) PUT /users
// no) POST /signup
// thumbs up
router.post(
  "/",
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username"),
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    // What express built-in middleware allows us to 
    // access json attached to the body of the request?
    // thumbs up) express.urlencoded()
    // yes) express-bearer-token
    // no) express.json() *
    const { username, email, password } = req.body;
    // How to create a hashed password?
    // thumbs up) const hashedPassword = bcrypt.hash(password, 10);
    // yes) const hashedPassword = await bcrypt.hash(password, 10);
    // no) const hashedPassword = bcrypt.hashPassword(password, 10);

    const hashedPassword = await bcrypt.hash(password, 10);
    // don't forget to import User model
    const user = await User.create({ username, email, hashedPassword });

    const token = getUserToken(user);
    // Take a detour and walk-through getUserToken inside auth.js at root level
    // don't forget to require it
    res.status(201).json({
      user: { id: user.id },
      token,
    });
    // test it with postman
  })
);

router.post(
  "/token",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // user.validatePassword is in the User model
    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
  })
);

router.get(
  "/:id/tweets",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const tweets = await Tweet.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json({ tweets });
  })
);

module.exports = router;
