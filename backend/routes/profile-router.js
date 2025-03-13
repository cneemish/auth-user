const router = require('express').Router();

const authProfile = require('../middlewares/profile-auth');

router.get('/', authProfile, (req, res) =>{
    res.status(200).json([
        console.log(req.user),
        {
            name: "test"
        }
    ])
});

module.exports = router;

