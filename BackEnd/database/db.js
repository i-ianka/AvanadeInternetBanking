const mongoose = require('mongoose');
const dotenv = require('../dotenv');
const fawn = require('fawn');

const connection = process.env.DB_CONNECTION;
const db = mongoose.connection;
mongoose.set('useCreateIndex', true);
mongoose.connect(connection, { useNewUrlParser: true });
fawn.init(mongoose);


db.on('error', (err) => {
    console.log('connection error', err);
});

db.on('open', () => {
    console.log('Connection to DB sucessful');
});

db.on('disconnected', () => {
    console.log('Disconnected from DB sucessful');
});

async function connect () {
    try {
        return await mongoose.connect(connection, { useNewUrlParser: true });
    }
    catch (err) {
        return false;
    }
}

async function disconnect() {
    try {
        return await mongoose.connection.close();
    }
    catch (err) {
        return false;
    }
}

module.exports = { db, fawn };