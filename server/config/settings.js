module.exports = {
    development: {
        db: 'mongodb://localhost/bookstore',
        port: process.env.port || 4000
    },
    production: {}
};