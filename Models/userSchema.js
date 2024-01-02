const mongoose = require('mongoose')
const validator  = require ('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    userImage:{
        type:String
    },
    userLicence:{
        type:String
    },
    dateofbirth:{
        type:String
    },
    type:{
        type:String
    }
})
const users = mongoose.model("users",userSchema)
module.exports = users  