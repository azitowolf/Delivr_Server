var passport = require('passport');
var User = require('../lib/users');
var express = require('express');

var router = express.Router();

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

var isAuthenticated = function(req, res, next) {

  if (req.isAuthenticated()) {
    console.log(req.user);
    return next();
  }

};

router.get('/login', isAuthenticated, function(req, res) {
  res.json({
    user: req.user
  });
});

// Login user, passport authenticate
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json({
    user: req.user
  });
});


router.all('/logout', function(req, res, next) {
  req.logout();
  res.json({
    message: "signed out"
  });
});


router.get('/', isAuthenticated, function(req, res) {
  res.json('successfully logged in');
});

router.get('/pay', function(req, res) {
  res.render('stripe');
});


router.post('/cardSubmit', function(req, res) {

  console.log(req.body.stripeToken);

  var stripe = require("stripe")("sk_test_gWerCzqU93BcpgpLn2RlIg0p");

  // (Assuming you're using express - expressjs.com)
  // Get the credit card details submitted by the form
  var stripeToken = req.body.stripeToken;

  var charge = stripe.charges.create({
    amount: req.session.cart.total,
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      console.log('we talked to the server');
    }
  });
  console.log(charge);
});

module.exports = router;
