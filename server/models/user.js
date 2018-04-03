const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

// user Schema and Model
const UserSchema = new Schema({

    email: {
        type: String,
        trim: true,
        required: [true, 'email field is required'],
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                validator.isEmail(value)
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 30,
        trim: true,
        required: [true, 'password field is required']
    // },
    // tokens: [{
    //     access: {
    //         type: String,
    //         required: true
    //     },
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;