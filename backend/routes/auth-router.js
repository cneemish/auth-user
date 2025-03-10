const { signupValidation } = require('../middlewares/auth-validation');
const { signup } = require('../controllers/auth-controller');

const router = require ('express').Router();
//const express = require('express');

router.post('/login',(req,res)=>{
    res.send('login successfully')
});

router.post('/signup', signupValidation, signup);

module.exports = router;