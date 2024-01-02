const mongoose = require('mongoose')
const validator  = require ('validator')
const vehicleSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    modelname:{
        type:String,
        require:true
    },
    regnumber:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    mode:{
        type:String,
        require:true
    },
    engine:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    vehicletype:{
        type:String
    }
})
const vehicles = mongoose.model("vehicles",vehicleSchema)
module.exports = vehicles  