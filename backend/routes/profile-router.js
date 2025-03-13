const router = require('express').Router();

const authProfile = require('../middlewares/profile-auth');

router.get('/', authProfile, (req, res) =>{
    res.status(200).json([
        
        {
            message: "User Profile fetched successfully",
            user: req.user // This will display user details 
        }
    ])
});

module.exports = router;

