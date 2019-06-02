// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } =  require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({ _id: new ObjectID('5cf32769c20b4d98c8da3c62') }, (error, user) => {
        if(error) {
            return console.log('Unable to fetch')
        } 

        console.log(user);
    });

    db.collection('users').find({ age: 36 }).toArray((error, users) => {
        if(error) {
            return console.log('Unable to fetch')
        } 

        console.log(users);
    })

    db.collection('users').find({ age: 36 }).count((error, count) => {
        if(error) {
            return console.log('Unable to fetch')
        } 

        console.log(count);
    })

});
