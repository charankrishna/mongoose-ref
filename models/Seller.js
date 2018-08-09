const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    seller:{
        type:mongoose.Schema.type.ObjectId,
        ref:'car'
    }
});

module.exports=mongoose.model("seller",sellerSchema,seller);