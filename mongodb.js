// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } =  require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Billy',
    //     age: 19
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert into database');
    //     }
    //     console.log(result.ops);
    // });

    //Create an item inside a collection
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Walk the Dog',
    //         completed: false
    //     },
    //     {
    //         description: 'Take out the Trash',
    //         completed: false
    //     },
    //     {
    //         description: 'Study NodeJS',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }
    //         console.log(result.ops);
    // });



});
