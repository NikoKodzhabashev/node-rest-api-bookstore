const encryption = require('../utils/encryption');
const User = require('mongoose').model('User');

module.exports = {
    registerPost: (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);

        User.create({
            username: reqUser.username,
            hashedPass,
            salt,
            firstName: reqUser.firstName,
            secondName: reqUser.secondName,
            roles: []
        }).then((data) => {
            req.logIn(data, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.status(400).send(err);
                } else {
                    res.status(200).send(data);
                }
            });
        }).catch((err) => {
            res.locals.globalError = err;
            res.status(400).send('This username has been already used!')
        });
    },
    logout: (req, res) => {
        req.logout();
    },
    loginPost: (req, res) => {
        let reqUser = req.body
        User.findOne({
            username: reqUser.username
        }).then((user) => {
            let userSalt = user.salt;
            let userHashedPwd = user.hashedPass;
            let reqHashedPwd = encryption.generateHashedPassword(userSalt, reqUser.password);
            if (userHashedPwd !== reqHashedPwd) {
                res.status(400).send('Invalid username or password');
            } else {
                req.logIn(user, (err, data) => {
                    if (err) {}
                    res.status(200).send(user);
                });
            }
        }).catch(err => {
            console.log("some Error");
            console.log(err);
        });
    }
};