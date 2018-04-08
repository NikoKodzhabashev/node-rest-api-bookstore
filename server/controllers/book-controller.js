const Book = require('../models/book');

module.exports = {
    getBooks: (req, res, next) => {
        Book.find().then((data) => {
            res.status(200).send(data);
        });
    },
    getBook: (req, res, next) => {
        Book.findById({
            _id: req.params.id
        }).then((data) => {
            res.status(200).send(data);
        });
    },
    postBook: (req, res, next) => {
        Book.create(req.body).then((data) => {
            res.status(200).send(data);
        }).catch(next);
    },
    putBook: (req, res, next) => {
        Book.findByIdAndUpdate({
            _id: req.params.id
        }, req.body).then((data) => {
            Book.findOne({
                _id: req.params.id
            }).then((book) => {
                res.status(200).send(book);
            });
        });
    },
    deleteBook: (req, res, next) => {
        Book.findByIdAndRemove({
            _id: req.params.id
        }).then((data) => {
            res.status(200).send(data);
        });
    }
}