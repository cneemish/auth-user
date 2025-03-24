const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const profileRouter = require('./routes/profile-router');
require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 3000 ;

app.get('/test',(req, res) => {
    res.send('Test Completed');
});

app.use(bodyParser.json());
app.use(cors()); // we can specify the origin here or where we can accept the request from 
app.use('/auth',authRouter);
app.use('/profile', profileRouter);

app.listen (PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})