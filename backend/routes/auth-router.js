const router = require ('express').Router();
//const express = require('express');

router.post('/login',(req,res)=>{
    res.send('login successfully')
});

router.post('/signup', (req, res)=>{
    res.send('sigup successfully')
});

module.exports = router;