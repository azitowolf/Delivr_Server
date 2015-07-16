var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var User = require('./../lib/users.js');
require('dotenv').load();
var Postmates = require('postmates');

var router = express.Router();

var postmates = new Postmates(process.env.POSTMATES_USER_ID, process.env.POSTMATES_KEY);

console.log(process.env.POSTMATES_USER_ID);

router.post('/getProposal', function(req, res) {

  var delivery = {
    pickup_address: "20 McAllister St, San Francisco, CA",
    dropoff_address: "101 Market St, San Francisco, CA"
  };

  postmates.quote(delivery, function(err, response) {
    console.log(response.body.fee);
    res.json(response.body);
  });

});





module.exports = router;