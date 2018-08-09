const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name:{
        type:String
    },
    year:{
        type:Number
    },
    seller:{
        type:mongoose.Schema.type.ObjectId,
        ref:'seller'
    }
});

module.exports=mongoose.model("car",carSchema,seller);