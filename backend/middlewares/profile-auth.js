const jwt = require('jsonwebtoken');

const authProfile =  (req, res, next ) =>{
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

module.exports = authProfile;