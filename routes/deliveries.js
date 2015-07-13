//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var Delivery = require('../lib/deliveries.js'); //Model

var jsonParser = bodyParser.json();

var router = express.Router();

//Routes for Deliveries
router.get('/api', function(req, res) {
  Delivery.find({}, function(error, itemList) {
    res.json(itemList);
  });
});

router.get('/api/:id', function(req, res) {
  Delivery.find({
    _id: req.params.id
  }, function(error, item) {
    res.json(item);
  });
});

router.post('/api', jsonParser);
router.post('/api', function(req, res) {
  Delivery.create(req.body, function(error, item) {
    console.log(req.body);
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

router.patch('/api/:id', jsonParser);
router.patch('/api/:id', function(req, res) {
  Delivery.findByIdAndUpdate(req.params.id, req.body, {
    overwrite: false
  }, function(error, item) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    }
    console.log('Changed');
    res.sendStatus(200);
  });
});

router.delete('/api/:id', function(req, res) {
  Delivery.remove({
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
