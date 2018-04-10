const mongoose = require('mongoose');


// store Schema and Model

<<<<<<< HEAD
const StoreSchema = new Schema({
    Name: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required:[true,'Name field is required']
    }
});

const Store = mongoose.model('store', StoreSchema);
=======
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
>>>>>>> cef8f9ab24dc90195eab7d0a50e91dddf8cbee6c
module.exports = Store;