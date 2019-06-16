require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5cf5ec73044a04d9b1b0a698').then((task) => {
    console.log('Deleted:', task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})