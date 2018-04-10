const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const controllers = require('../controllers/index');
const auth = require('../config/auth');

//book routes
router.get('/books', controllers.books.getBooks);
router.get('/books/:id', controllers.books.getBook);
router.post('/books', controllers.books.postBook);
router.put('/books/:id', controllers.books.putBook);
router.delete('/books/:id', controllers.books.deleteBook);

//store routes
router.get('/stores', controllers.stores.getStores);
router.get('/store/:id', auth.isAuthenticated, controllers.stores.getStore);
router.post('/store', auth.isAuthenticated, controllers.stores.postStore);
router.delete('/store/:id', auth.isAuthenticated, controllers.stores.deleteStore);

//user routes
router.post('/register', controllers.users.registerPost);
router.get('/logout', auth.isAuthenticated, controllers.users.logout);
router.post('/login', controllers.users.loginPost);
router.get('/user/:username', auth.isAuthenticated, controllers.users.getUser)

module.exports = router;