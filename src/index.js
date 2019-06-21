const express = require('express');
require('./db/mongoose');
//routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

//express middleware
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('GET requests are disabled')
    } else {
        next();
    }
});

//parse json with express
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is running on port', port);
});

const jwt = require('jsonwebtoken');

const myFuntion = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'secretOrPrivateKey', { expiresIn: '7 days' });
    console.log(token);

    const data = jwt.verify(token, 'secretOrPrivateKey');
    console.log(data);
}

myFuntion();