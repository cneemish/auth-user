const Joi = require('joi');

const signupValidation = (req, res, next) =>{
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(100).required(),
        lastName: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required()
    })
    const {error} = schema.validate (req.body); // to validate the request body object 
    if (error){
        return res.status(400)
        .json({
            message: "Invalid Request", error
        })
    }
    next();

}

const loginValidation = (req, res, next) =>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({
            message: "Invalid Password or email", error
        })

    }
    next();
}
module.exports ={
    signupValidation,
    loginValidation
}