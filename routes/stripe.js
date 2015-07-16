var passport = require('passport');
var User = require('../lib/users');
var express = require('express');

var router = express.Router();

router.post('/cardSubmit', function(req, res) {

  console.log(req.body.stripeToken);

  var stripe = require("stripe")("sk_test_gWerCzqU93BcpgpLn2RlIg0p");

  // (Assuming you're using express - expressjs.com)
  // Get the credit card details submitted by the form
  var stripeToken = req.body.stripeToken;

  var charge = stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      console.log(err);
    }
  });
  console.log(charge);
});

module.exports = router;
