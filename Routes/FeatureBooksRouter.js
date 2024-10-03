const express = require('express');
const router = express.Router();
const FeatureBooks = require('../Models/FeatureBookSchema')


router.get('/api/user/FeatureBooks',async(req,res)=>{
    try{
    const response = await FeatureBooks.find();
    res.status(200).json(response);
    
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }     
});

module.exports = router;