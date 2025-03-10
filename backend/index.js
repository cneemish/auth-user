const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 4000 ;

app.get('/test',(req, res) => {
    res.send('Test Completed');
});

app.listen (PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})