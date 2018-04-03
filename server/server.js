const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const sessions = require('client-sessions');
var cors = require('cors');

// set up express app
const app = express();

// middleware for req body
app.use(bodyParser.json());

//session middleware
app.use(sessions({
    cookieName: 'mySession',
    secret: 'testingsecret',
    duration: 24 * 60 * 60 * 1000,
    httpOnly:true,
    ephemeral:true
}));

// use it before all route definitions
app.use(cors());

app.use('/api', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next) => {
    console.log('Error handler');
    res.status(400).send({
        error: err.message
    })
});
//listening for requests
app.listen(process.env.port || 4000, () => {
    console.log('Listen for requests! ');
});



//connect to mongodb
mongoose.connect('mongodb://localhost/bookstore');
mongoose.Promise = global.Promise;
