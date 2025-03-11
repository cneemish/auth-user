const UserModel = require ("../models/user-model");
const bcrypt = require('bcrypt');
const signup = async (req, res) => { 
    try{
        const{firstName, lastName, email, password} = req.body;
        const user = await UserModel.findOne({email});
            if (user){
                return res.status(409)
                .json({
                    message: 'User already exists, Please login', success:false
                });
            }
        const userModel = new UserModel({firstName, lastName, email, password});
        userModel.password = await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
        .json({
            message:"User created successfully",
            success: true
        })
    } catch(err){
        res.status(500)
        .json({
            message:"User creation failed",
            success: false
        })
    }
}

module.exports = {
    signup
}

















































     
