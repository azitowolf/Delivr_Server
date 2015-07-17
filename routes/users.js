var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var User = require('./../lib/users.js');
var jsonParser = bodyParser.json();

var router = express.Router();

router.get('/api', function(req, res) {
  User.find({}, function(error, userList) {
    res.json(userList);
  });
});

router.get('/api/:id', function(req, res) {
  User.find({
    _id: req.params.id
  }, function(error, user) {
    res.json(user);
  });
});

//Add a delivery to a users array
router.put('/api/:id', jsonParser);
router.put('/api/:id', function(req, res) {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, {
    $push: {
      deliveries: req.body
    }
  }, function(error, user) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/api/:id', function(req, res) {
  User.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;
