const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comment schema and model

const CommentSchema = new Schema({

    content: {
        type: String,
        required: [true, 'Content field is required'],
        minlength: 1
    },
    user: {
        type: Object,
        required: [true, 'User field is required']
    }
});

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;