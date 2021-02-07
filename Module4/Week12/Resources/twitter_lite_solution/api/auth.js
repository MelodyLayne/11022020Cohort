const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { User } = require("./db/models");
// Ask this after setting signup
// Middleware that will extract a bearer token from a request
// thumbs up) express.urlencoded()
// yes) express.json()
// no) express-bearer-token
const bearerToken = require("express-bearer-token");

const { secret, expiresIn } = jwtConfig;

// Code this method on its entierity
// What is the input?
const getUserToken = (user) => {
  // Don't store the user's hashed password
  // in the token data.
  // What data do we want in the token's payload?
  const userDataForToken = {
    id: user.id,
    email: user.email,
  };

  // Create the token.
  // What arguments does jwt.sign take?
  // thumps up) payload, secret, options 
  // yes) header, payload, signature
  // no) signature, payload, header
  // secret and expiresIn come from jwtConfig inside config.js
  // Show documentation for jwt.sign
  const token = jwt.sign(
    { data: userDataForToken },
    secret,
    // why do we need to parseInt expiresIn?
    { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
  );

  return token;
  // go back to the signup route
};

// Walk-through this function after signup, the bearerToken is in the bottom of the file
// show documentation
const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    // Send a "401 Unauthorized" response status code
    // along with an "WWW-Authenticate" header value of "Bearer".
    // "WWW-Authenticate" defines the authentication method that should be used
    // Show documentation for WWW-Authenticate
    return res.set("WWW-Authenticate", "Bearer").status(401).end();
  }
  // jwt method to return the decoded signature if the signature is valid
  // thumbs up) jwt.verify()
  // yes) jwt.sign()
  // no) jwt.decode()
  // the callback is called either with an error or the decoded payload
  // show documentation for jwt.verify
  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      // this will call the global error handler
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      // Attach the user to every request
      // Don't forget to require User model on top
      req.user = await User.findByPk(id);
    } catch (e) {
      return next(e);
    }

    if (!req.user) {
      // Send a "401 Unauthorized" response status code
      // along with an "WWW-Authenticate" header value of "Bearer".
      return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return next();
  });
};

// Don't forget to apply these middleware to the tweets router
// Show the documentation for bearerToken()
const requireAuth = [bearerToken(), restoreUser];

module.exports = { getUserToken, requireAuth };
