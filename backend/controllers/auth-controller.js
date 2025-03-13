const UserModel = require ("../models/user-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup function 

const signup = async (req, res) => { 
    try{
        const{firstName, lastName, email, password} = req.body;
        const user = await UserModel.findOne({email});  // validating the user email by findone method and if exist return message or create a new user 
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

//login function 
 
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email}); // validating the user email by findone method 
        const errorMsg ='Invalid email';
        if (!user){
            return res.status(404)
            .json({
                message: errorMsg , success: false
            });
        }

        //comparing the user password with the hashed DB password

        const isPwdEqual = await bcrypt.compare(password, user.password);
        const errorMsgPwd = 'Invalid Password';
        if (!isPwdEqual){
            return res.status(403)
            .json({
                message: errorMsgPwd, success: false
            })
        }
        // creating a jwt token for the user
        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
        )
        res.status(200)
        .json({
            message: 'Login Successfully',
            success: true,
            jwtToken,
            email,
            name: `${user.firstName} ${user.lastName}`
        })
    } catch (error) {
        res.status(500)
        .json({
            message:"Login Failed",
            success: false
        })
        
    }
}

module.exports = {
    signup,
    login
}

















































     
