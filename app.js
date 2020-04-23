const express = require('express');
const mongoose     = require('mongoose');

/** Models */
require('./src/models');

require('dotenv').config({});

let MONGO_URI = process.env.MONGO_URI;

/** MongoDB Config */
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    //bufferCommands: false,
    connectTimeoutMS: 600000,
    socketTimeoutMS: 600000,
    useUnifiedTopology: true
});

/** Configs */
const app = express()

// Conecta com o banco de dados MongoDB
mongoose.connection
    .once('open', function () {
        if (process.env.NODE_ENV != 'test')
            console.log('MongoDB database connection established successfully');
    })
    .catch(e => console.log(e));

module.exports = app;