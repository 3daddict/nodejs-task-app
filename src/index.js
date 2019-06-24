const express = require('express');
require('./db/mongoose');
//routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

//express middleware
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next();
//     }
// });

//parse json with express
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is running on port', port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5d0f8eed75ae051b01ff0f65');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('5d0f8e94e434011ae933cf8e');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main()