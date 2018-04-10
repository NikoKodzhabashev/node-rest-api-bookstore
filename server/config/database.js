const mongoose = require('mongoose');
const User = require('../models/user');
mongoose.Promise = global.Promise;

module.exports = (settings) => {
    mongoose.connect(settings.db)
    const db = mongoose.connection;
    db.once('open', (err) => {
        if (err) throw err;
        User.seedAdminUser();
        console.log('MongoDB ready!');
    })
    db.on('error', (err) => console.log('Database error: ' + err));
}