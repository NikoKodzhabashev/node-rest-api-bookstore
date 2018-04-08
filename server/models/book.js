const mongoose = require('mongoose');
const Comments = require('./comment');
const Likes = require('./likes');
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

// book Schema and Model

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        trim: true,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    author: {
        type: String,
        minlength: 1,
        trim: true,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    price: {
        type: Number,
        minlength: 1,
        trim: true,
        maxlength: 200,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    rating: {
        type: Number,
        maxlength: 5,
        trim: true,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    pictureURL: {
        type: String,
        trim: true,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    // comments: [Comments],
    // likes: [Likes],
    description: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 5000
    }
});
const Book = mongoose.model('book', BookSchema);
module.exports = Book;