const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// const MONGOURL = process.env.MONGOURL
const MONGOURL = process.env.ONLINEURL

 
mongoose.connect(MONGOURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("mongodb server is running");
});

db.on('error',(err)=>{
    console.log(err);
});

db.on('disconnected',()=>{
    console.log("mongodb server is Disconnected");   
});

module.exports=db;