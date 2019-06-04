//Object Doument Mapper ODM
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

//Model Schema
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
});

const me = new User({
    name: "  Mike    ",
    email: "mike@gmail.com   ",

});

me.save().then(() => {
    console.log('Me!', me);
}).catch((error) => {
    console.log('Error!', error);
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

// const newTask = new Task({
//     description: "yakity yak don't talk back",
//     completed: false
// });

// newTask.save().then(() => {
//     console.log('Task:', newTask);
// }).catch((error) => {
//     console.log('Error!', error);
// })