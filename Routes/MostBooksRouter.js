const express = require('express');
const router = express.Router();
const MostBooks = require('../Models/MostBookSchema')
 
 

router.get('/api/user/MostBooks',async(req,res)=>{
    try{
    const response = await MostBooks.find();
    res.status(200).json(response);
    
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }     
});

module.exports = router;