// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) return console.log('Unable to connect to Mongodb');
    console.log('Connected to Mongodb server!');

    const db = client.db('TestApp');
    db.collection('TestCollection2').deleteMany({name:'Vladi'}).then((result)=>{
        console.log(result);
    });
});