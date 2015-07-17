var Delivery = require('./lib/deliveries.js');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var stylus = require('stylus');
var util = require('util');
var session = require('express-session');
var passport = require('passport');
var auth = require('./routes/auth');
var usersRouter = require('./routes/users');
var session = require('express-session');
var cors = require('cors');
var stripeRouter = require('./routes/stripe.js');
var postmatesRouter = require('./routes/postmates.js')


//Setup
var app = express();
var jsonParser = bodyParser.json();
mongoose.connect('mongodb://localhost/delivr');
var corsOptions = {
  methods: ['GET', 'PUT', 'POST'],
  origin: 'http://localhost:9000',
  credentials: true
};

//Middleware
app.use(logger('dev'));

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'SESSION_KEY',
  resave: false,
  saveUninitialized: true
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

var User = require('./lib/users');
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//all routes
app.use('/auth', auth);
app.use('/users', usersRouter);
app.use('/stripe', stripeRouter);
app.use('/postmates', postmatesRouter);

var server = app.listen(3000, function() {

  var host = 'localhost';
  var port = 3000;

  console.log('The server is up and listening at http://%s:%s', host, port);
});
