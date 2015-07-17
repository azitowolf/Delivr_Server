var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var User = require('./../lib/users.js');
require('dotenv').load();
var Postmates = require('postmates');

var router = express.Router();

var postmates = new Postmates(process.env.POSTMATES_USER_ID, process.env.POSTMATES_KEY);

router.put('/getProposal', function(req, res) {

  var delivery = {
    pickup_address: req.body.pickup,
    dropoff_address: req.body.dropoff
  };

  console.log(req.body);

  postmates.quote(delivery, function(err, response) {
    console.log(response.body);
    User.update({
        'deliveries._id': req.body.deliveryid
      }, {
        $set: {
          'deliveries.$.postmatesProposal': response.body,
        }
      },
      function(error, user) {
        if (error) {
          console.log(error);
        } else {

        }
      });
    res.json(response.body);
  });

});

module.exports = router;
