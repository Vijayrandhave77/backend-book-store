const mongoose = require('mongoose');

const BsellingSchema = mongoose.Schema({
    img:String,
    brand:String,
    title:String,
    writer:String,
    price:{
        original:String,
        discount:String
    }
});

module.exports = mongoose.model('BestSellingBooks',BsellingSchema)