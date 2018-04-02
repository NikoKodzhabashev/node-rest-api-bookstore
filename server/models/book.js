const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// book Schema and Model

const BookSchema = new Schema({
    Name: {
        type: String,
        minlength: 1,
        required: [true, 'Name field is required']
    },
    Author: {
        type: String,
        minlength: 1,
        required: [true, 'Author field is required']
    },
    Price: {
        type: Number,
        minlength: 1,
        maxlength: 200,
        required: [true, 'Price field is required']
    },
    Rating: {
        type: Number,
        maxlength: 5,
        required: [true, 'Rating field is required']
    },
    PictureURL: {
        type: String,
        required: [true, 'PictureURL field is required']
    },
    Description: {
        type: String,
        minlength: 1,
        maxlength: 5000
    }
});
const Book = mongoose.model('book',BookSchema);
module.exports = Book;