const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const todoRoute = require('./routes/todo');
const subtaskRoute = require('./routes/subtask');

app.use('/todo/v1', todoRoute);
app.use('/subtask/v1', subtaskRoute);


const mongo_Url = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
mongoose.connect(mongo_Url)
.then( result => {
    app.listen(3000, () => {
        console.log('Welcome The app is running  on port 3000');
    })
})
.catch(err => { console.log(err);
});
