const mongoose = require('mongoose');

const mostSchema = mongoose.Schema({
    img:String,
    brand:String,
    title:String,
    writer:String,
    price:{
        original:String,
        discount:String
    }
});

module.exports = mongoose.model('MostBooks',mostSchema)