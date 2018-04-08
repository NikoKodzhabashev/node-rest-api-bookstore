const mongoose = require('mongoose')
const encryption = require('../utils/encryption')
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        unique: true
    },
    firstName: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    secondName: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    salt: String,
    hashedPass: String,
    roles: [String]
});
userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);
module.exports.seedAdminUser = () => {
    User.find().then((users) => {
        if (users.length > 0) return
        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, 'Niko');
        User.create({
            username: 'niko.georgiev',
            firstName: 'Niko',
            secondName: 'Georgiev',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        });
    });
}