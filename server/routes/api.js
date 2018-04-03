const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Store = require('../models/store');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

//book routes
router.get('/books', (req, res,next) => {
    Book.find().then((data)=>{
        res.send(data);
    });
});
router.get('/books/:id',(req,res,next)=>{
    Book.findById({_id: req.params.id}).then((data)=>{
        console.log(data);
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
       Book.findOne({_id: req.params.id}).then((ninja)=>{
           console.log(ninja);
        res.send(ninja);
       });
    });
});

router.delete('/books/:id', (req, res,next) => {
    Book.findByIdAndRemove({_id: req.params.id}).then((data)=>{
        res.send(data);
    });
});

//store routes
router.get('/store',(req,res,next)=>{
    Store.find().then((data)=>{
        res.send(data);
    })
});
router.get('/store/:id',(req,res,next)=>{
    Store.findById({_id: req.params.id}).then((data)=>{
        res.send(data);
    });
});
router.post('/store',(req,res,next)=>{
    User.findById(req.mySession.userId, (err,user)=>{
        if(err || !user){
           return res.status(401).send('Sorry man but you have to be registered!')
        }
        Store.create(req.body).then((data)=>{
            res.send(data);
        }).catch(next);
   });
});
router.put('/store/:id',(req,res,next)=>{
    User.findById(req.mySession.userId, (err,user)=>{
        if(err || !user){
            return res.status(401).send('Sorry man but you have to be registered!')
        }
        Store.findByIdAndUpdate({_id: req.params.id},req.body).then((data)=>{
            res.send(data);
        });
   });
});
router.delete('/store/:id',(req,res,next)=>{
    User.findById(req.mySession.userId, (err,user)=>{
        if(err || !user){
            return res.status(401).send('Sorry man but you have to be registered!')
        }
        Store.findByIdAndRemove({_id: req.params.id}).then((data)=>{
            res.send(data);
        });
   });
});

//user routes
router.post('/register',(req,res,next)=>{
    // hashing password
    let hash = bcrypt.hashSync(req.body.password,8);
    req.body.password = hash;
    User.create(req.body)
        .then((user)=>{res.send(user);})
        .catch((e)=>{
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
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user || !bcrypt.compareSync(req.body.password,user.password)){
            let error = 'Incorect password / email !';
            return res.send(error);
        }
        req.mySession.userId = user._id;
        res.send(user);
    });
});

router.get('/user/:id',(req,res,next)=>{
    User.findById({_id: req.params._id}).then((user)=>{

    });

});

module.exports = router;