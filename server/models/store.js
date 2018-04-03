const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// author Schema and Model

const AuthorSchema = new Schema({
    Name: {
        type: String,
        minlength: 1,
        maxlength: 20,
        required:[true,'Name field is required']
    }
});

const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;