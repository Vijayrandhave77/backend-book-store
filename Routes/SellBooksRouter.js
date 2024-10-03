const express = require('express');
const router = express.Router();
const SellBooks = require('../Models/SellBookSchema')

 

router.get('/api/user/SellBooks',async(req,res)=>{
    try{
    const response = await SellBooks.find();
    res.status(200).json(response);
    
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }     
});

module.exports = router;