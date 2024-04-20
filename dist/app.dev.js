"use strict";

//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment
var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var path = require('path');

var session = require('express-session');

var passport = require('passport');

var animal = require('./routes/animal.router'); // Load environment variables from .env file


dotenv.config(); // Create Express application

var app = express(); // MongoDB connection

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Use bodyParser middleware to parse JSON and url-encoded requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // Static folder

app.use(express["static"](path.join(__dirname, 'public'))); // Session configuration

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
})); // Passport initialization

app.use(passport.initialize());
app.use(passport.session()); // Set view engine

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Define routes

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
}); // Error handling

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
}); // Set the port and start the server

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
