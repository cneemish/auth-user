const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

/* const authProfile =  (req, res, next ) =>{
    const auth = req.headers['authtoken'];
    if (!auth){
        return res.status(403)
        .json({
            message: "Unauthorized Access, Please pass auth token"
        });
        }
        try {
            const decoded = jwt.verify(auth, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(401)
            .json({ message: "Invalid Token or token expried"});
        }
}
 */

const authProfile = async(req, res, next ) => {
    try{
        const auth = req.headers['authtoken'];
        if (!auth){
            return res.status(403)
            .json({
                message: "Unauthorized Access, Please pass auth token"
            });
            }

            const decoded = jwt.verify(auth, process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded._id).select('-password');

            if (!req.user){
                return res.status(404)
                .json({
                    message: "User not found!"
                });
            }
            next();

    }catch(err){
        return res.status(401)
            .json({ message: "Invalid Token or token expried"});
    }
}
module.exports = authProfile;