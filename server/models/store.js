const mongoose = require('mongoose');


// store Schema and Model

const StoreSchema = new mongoose.Schema({
    Name: {
        type: String,
        minlength: 1,
        maxlength: 20,
        required:[true,'Name field is required'],
        unique:true
    }
});

const Store = mongoose.model('author', StoreSchema);
module.exports = Store;