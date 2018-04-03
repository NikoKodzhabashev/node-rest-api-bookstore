const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// store Schema and Model

const StoreSchema = new Schema({
    Name: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required:[true,'Name field is required']
    }
});

const Store = mongoose.model('store', StoreSchema);
module.exports = Store;