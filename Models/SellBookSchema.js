const mongoose = require('mongoose');

const SellSchema = mongoose.Schema({
    img:String,
    brand:String,
    title:String,
    writer:String,
    price:{
        original:String,
        discount:String
    }
});

module.exports = mongoose.model('SellBooks',SellSchema)