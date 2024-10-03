const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const Signin = require('../Models/SiginSchema')
const {jwtAuthMiddleware,generateToken} = require('../jwt');


router.post('/api/user/login',async(req,res)=>{
    try{
    const {userEmail,userPwd} = req.body;
    // console.log(userEmail,userPwd)
    const user = await Signin.findOne({userEmail:userEmail});

    if(!user || !(await user.comparePassword(userPwd))){
        return res.status(401).json({error:"invalid email or password"});
    }
    const payload = {
        id:user.id,
        userEmail:user.userEmail
    }
    const token = generateToken(payload);
    res.cookie('jwtToken',token);
    res.json({token});

    }catch(err){
        res.status(500).json({error:"internal server error"})
    }     
});

module.exports = router;