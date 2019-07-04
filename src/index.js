const express = require('express');
require('./db/mongoose');
//routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'images'
});

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
});

//parse json with express
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is running on port', port);
});
