const express = require('express');
const router = express.Router();
const BsellingBooks = require('../Models/BsellingBookSchema')
const {jwtAuthMiddleware,generateToken} = require('../jwt')

router.get('/api/user/BestsellingBooks',jwtAuthMiddleware,async(req,res)=>{
    try{
    const response = await BsellingBooks.find();
    res.status(200).json(response);
    
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }     
});

module.exports = router;