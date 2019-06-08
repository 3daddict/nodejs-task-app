//Object Doument Mapper ODM
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

//Model Schema
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         require: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number');
//             }
//         }
//     },
//     password: {
//         type: String,
//         require: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Please enter a more secure password');
//             }
//         }
//     }
// });

// const me = new User({
//     name: "  Mike    ",
//     email: "mike@gmail.com   ",
//     age: 36,
//     password: 'fewhjuiewh123'
// });

// me.save().then(() => {
//     console.log('Me!', me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Eat lunch'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})