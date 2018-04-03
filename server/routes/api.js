const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const User = require('../models/user');

//book routes
router.get('/books', (req, res,next) => {
    Book.find().then((data)=>{
        res.send(data);
    });
});
router.post('/books', (req, res,next) => {
    Book.create(req.body).then((data)=>{
        res.send(data);
    }).catch(next);
});
router.put('/books/:id', (req, res,next) => {
    Book.findByIdAndUpdate({_id: req.params.id},req.body).then((data)=>{
        res.send(data);
    },{
        new:true
    });
});
router.delete('/books/:id', (req, res,next) => {
    Book.findByIdAndRemove({_id: req.params.id}).then((data)=>{
        res.send(data);
    });
});

//store routes
router.get('/store',(req,res,next)=>{
    res.send({type:'GET'})
});
router.post('/store',(req,res,next)=>{
    res.send({type:'POST'})
});
router.put('/store/:id',(req,res,next)=>{
    res.send({type:'PUT'})
});
router.delete('/store/:id',(req,res,next)=>{
    res.send({type:'DELETE'})
});

//user routes
router.post('/register',(req,res,next)=>{
User.create(req.body)
    .then((user)=>{
    res.send(user);
    }).catch((e)=>{
        let error = 'Something bad happened, please try again!!'
        if(e.code===11000){
            error = 'That email is already taken, please try another!'
            res.status(400).send(error);
        }else{
            res.status(400).send(error)
        }
    });
});

router.post('/login',(req,res,next)=>{
    User.findOne({ email: req.body.email }, ((err, user) => {
        if(err || !user || req.body.password !== user.password){
            let error = 'Incorect password / email !';
            return res.send(error);
        }
        req.mySession.userId = user._id;
        res.send(user);
    }));
});

module.exports = router;