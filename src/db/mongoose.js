//Object Doument Mapper ODM
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

//Model Schema
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const me = new User({
    name: "Mike",
    age: "Andrew"
});

me.save().then(() => {
    console.log('Me!', me);
}).catch((error) => {
    console.log('Error!', error);
});