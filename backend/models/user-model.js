const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
     firstName: {
        type: String,
        required: true
     },
     lastName:{
        type: String,
        required: true
     },
     email : {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true,
        min: [8, 'Must be at least 6, got {VALUE}'],
        max: [16, 'Exceed max characters of 16, got {VALUE}'],
        match: [
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
            'Password must contain at least one uppercase letter, one number, and one special character (@$!%*?&), and be 8-16 characters long'
        ]  
    
     }
})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;