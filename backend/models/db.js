const mongoose = require('mongoose');

const mongo_url = process.env.DB_CONNECTION;

mongoose.connect(mongo_url)
.then(() => {
    console.log(`Connected to database`);
}) .catch((err)=>{
    console.log(`Error connecting to database: ${err}`);
} )