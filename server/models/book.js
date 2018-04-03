const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// book Schema and Model

const BookSchema = new Schema({
    Name: {
        type: String,
        minlength: 1,
        trim: true,
        required: [true, 'Name field is required']
    },
    Author: {
        type: String,
        minlength: 1,
        trim: true,
        required: [true, 'Author field is required']
    },
    Price: {
        type: Number,
        minlength: 1,
        trim: true,
        maxlength: 200,
        required: [true, 'Price field is required']
    },
    Rating: {
        type: Number,
        maxlength: 5,
        trim: true,
        required: [true, 'Rating field is required']
    },
    PictureURL: {
        type: String,
        trim: true,
        required: [true, 'PictureURL field is required']
    },
    description: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 5000
    }
});
const Book = mongoose.model('book', BookSchema);
module.exports = Book;