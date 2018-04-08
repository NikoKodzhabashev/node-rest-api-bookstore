const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comment schema and model

const LikesSchema = new Schema({
    count:{
        type:Number
    },
    user:{
        type:Object
    }
});

const Likes = mongoose.model('like', LikesSchema);
module.exports = Likes;