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
var mongoose = require('mongoose');

require('dotenv').config(); // Improved connection setup with auto-reconnect


mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error:', err);
  mongoose.disconnect();
});
mongoose.connection.on('disconnected', function () {
  console.log('MongoDB disconnected; attempting to reconnect...');
  connectWithRetry();
});

function connectWithRetry() {
  mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  }).then(function () {
    console.log('MongoDB is connected');
  })["catch"](function (err) {
    console.error('MongoDB initial connection error:', err);
  });
} // Invoke initial connection


connectWithRetry(); // Define an enhanced schema with indexes for faster query performance

var AnimalSchema = new mongoose.Schema({
  zoo: {
    type: String,
    required: true,
    index: true
  },
  scientificName: {
    type: String,
    required: true,
    index: true
  },
  commonName: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isTransportable: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'animals',
  timestamps: true // Automatically adds createdAt and updatedAt timestamps

}); // Create model and export

var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;
//# sourceMappingURL=Animal.dev.js.map
