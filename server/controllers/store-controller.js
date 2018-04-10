const Store = require('../models/store');

module.exports = {
    getStores: (req, res, next) => {
        Store.find().then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.locals.globalError = err;
            res.status(400).send(err)
        });
    },
    getStore: (req, res, next) => {
        const reqUser = req.body;
        Store.findOne({
            name: reqUser.Name
        }).then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.locals.globalError = err;
            res.status(400).send(err)
        });
    },
    postStore: (req, res, next) => {
        Store.create(req.body).then((data) => {
            res.status(200).send(data);
        }).catch(next);
    },
    putStore: (req, res, next) => {
        const reqUser = req.body;
        Store.findByIdAndUpdate({
            _id: req.params.id
        }, req.body).then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.locals.globalError = err;
            res.status(400).send(err)
        });
    },
    deleteStore: (req, res, next) => {
        Store.findByIdAndRemove({
            _id: req.params.id
        }).then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.locals.globalError = err;
            res.status(400).send(err)
        });
    }
}