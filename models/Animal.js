const mongoose = require('mongoose');
require('dotenv').config();

// Improved connection setup with auto-reconnect
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
    mongoose.disconnect();
});
mongoose.connection.on('disconnected', () => {
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
    }).then(() => {
        console.log('MongoDB is connected');
    }).catch(err => {
        console.error('MongoDB initial connection error:', err);
    });
}

// Invoke initial connection
connectWithRetry();

// Define an enhanced schema with indexes for faster query performance
const AnimalSchema = new mongoose.Schema({
    zoo: { type: String, required: true, index: true },
    scientificName: { type: String, required: true, index: true },
    commonName: { type: String, required: true },
    givenName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    isTransportable: { type: Boolean, required: true }
}, {
    collection: 'animals',
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Create model and export
const Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;
