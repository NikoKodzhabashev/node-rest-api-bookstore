const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const app = express();

module.exports = (app) => {

    app.use(cors({
        origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
        credentials: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(session({
        secret: 'somesecret!@#$%',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
        if (req.user) {
            res.locals.currentUser = req.user;
        }
        next();
    });
    app.use('/api', require('../controllers/routes'));


    app.use((err, req, res, next) => {
        res.status(400).send({
            error: err.message
        });
    });

};