const express = require('express');
const router = express.Router();
const Book = require('../models/book');

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

module.exports = router;