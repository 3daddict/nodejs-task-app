const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }
    console.log('Database Connnected!');
    const db = client.db(databaseName);
    
    // db.collection('users').insertOne({
    //     name: 'Mike',
    //     age: 36
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([
        {
            description: 'Walk the Dog',
            completed: false
        },
        {
            description: 'Take out the Trash',
            completed: false
        },
        {
            description: 'Study NodeJS',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert user');
        }
            console.log(result.ops);
    });
});
