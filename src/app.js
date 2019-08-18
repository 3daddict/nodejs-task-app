const express = require('express');
require('./db/mongoose');
//routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

//parse json with express
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app