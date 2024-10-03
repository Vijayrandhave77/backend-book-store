const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const signinSchama = mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    userEmail:{
        type:String,
        require:true,
        uniqe:true
    },
    userPwd:{
        type:String,
        require:true
    }
});


signinSchama.pre('save',async function(next){
    const  user = this;
    if(!user.isModified('userPwd')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.userPwd,salt);
        user.userPwd = hashPassword;
        next();
    }catch(err){
        return next(err);
    }
})

signinSchama.methods.comparePassword = async function(candidatePassword){
    try{{}
        const isMatch = await bcrypt.compare(candidatePassword,this.userPwd);
        return isMatch;
    }catch(err){  
        throw err;
    }
}

module.exports = mongoose.model('Signin',signinSchama);