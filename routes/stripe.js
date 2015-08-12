var passport = require('passport');
var User = require('../lib/users');
var express = require('express');
var stripe = require('stripe');

var router = express.Router();

var stripe = require("stripe")("sk_test_gWerCzqU93BcpgpLn2RlIg0p");

router.post('/createUserToken', function(req, res) {

  console.log(req.body);
  stripe.tokens.create({
    card: {
      "number": req.body.number,
      "exp_month": req.body.exp_month,
      "exp_year": req.body.exp_year,
      "cvc": req.body.cvc
    }
  }, function(err, token) {
    res.json(token);
  });

});


router.post('/createUser', function(req, res) {
  stripe.customers.create({
    description: 'alex@az.com',
    source: req.body.token
  }, function(err, customer) {
    if (err) {
      console.log(err);
    }
    User.update({
        _id: req.user._id
      }, {
        $set: {
          stripeID: customer.id
        }
      },
      function(err) {
        console.log("success");
      });
    res.json(customer);
  });
});

module.exports = router;
