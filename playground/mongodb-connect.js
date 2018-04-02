// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) return console.log('Unable to connect to Mongodb');
    console.log('Connected to Mongodb server!');

    const db = client.db('TestApp');
    db.collection('TestCollection').insertOne({
        name: 'Niko',
        age: 23,
        location: 'Bulgaria'
    }, (err, result) => {
        if (err) return console.log('Unable to insert new document into collection');
        console.log(JSON.stringify(result.ops));
    });

    db.collection('TestCollection2').insertOne({
        name: 'Vladi',
        age: 20,
        location: 'Bulgaria'
    }, (err, result) => {
        if (err) return console.log('Unable to insert new document into collection');
        console.log(JSON.stringify(result.ops));
    });
});