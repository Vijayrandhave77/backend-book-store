const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const Contact = require('../Models/ContactSchema')

router.post('/api/user/contact',async (req,res)=>{
    try{
        const bodyData = req.body;
        const newContact = await Contact(bodyData);
        const response = await newContact.save();
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
});


module.exports = router;