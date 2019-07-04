const express = require('express');
require('./db/mongoose');
//routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a Word Doc'));
        }

        cb(undefined, true);
    }
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
