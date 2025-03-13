const { signupValidation, loginValidation } = require('../middlewares/auth-validation');
const { signup, login } = require('../controllers/auth-controller');

const router = require ('express').Router();
//const express = require('express');

/* router.post('/login',(req,res)=>{
    res.send('login successfully')
});
 */

// Adding Login to routes 

router.post('/login', loginValidation, login); 

// Adding Signup to routes 

router.post('/signup', signupValidation, signup);

module.exports = router;