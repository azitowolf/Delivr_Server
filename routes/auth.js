var passport = require('passport');
var User = require('../lib/users');
var express = require('express');
require('dotenv').load();
var Postmates = require('postmates');
var router = express.Router();

// Authenticate a user and pass the request
var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    return next();
  }
};

// Register a user
router.post('/register', function(req, res, next) {
  User.register({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    }, req.body.password,

    function(err, user) {
      if (err) {
        console.log(err);
        return err;
      }
      req.login(user, function(err) {
        res.json({
          user: user
        });
      });
    });
});

// Confirm req.user and send back to client
router.get('/login', isAuthenticated, function(req, res) {
  res.json({
    user: req.user
  });
});

// Authenticate user, log them in
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json({
    user: req.user
  });
});

// Log out User
router.all('/logout', function(req, res, next) {
  req.logout();
  res.json({
    message: "signed out"
  });
});

module.exports = router;
