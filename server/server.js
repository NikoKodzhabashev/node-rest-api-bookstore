const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// set up express app
const app = express();
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

//listening for requests
app.listen(process.env.port || 4000, () => {
    console.log('Listen for requests! ');
});

//error handling middleware
app.use((err, req, res, next)=>{
    res.status(400).send({error: err.message})
});

//connect to mongodb
mongoose.connect('mongodb://localhost/bookstore');
mongoose.Promise = global.Promise;

//set storage engine
