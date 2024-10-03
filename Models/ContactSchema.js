const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    userEmail:{
        type:String,
        require:true,
    },
    userSubject:{
        type:String,
        require:true
    },
    userText:{
        type:String
    }
});

module.exports = mongoose.model('Contact',contactSchema);