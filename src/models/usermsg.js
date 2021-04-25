const mongoose=require("mongoose");
const validator=require("validator");
const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    address:{
        type:String,
        required:true,
        minLength:6
    },
    phone:{
        type:Number,
        required:true,
       min:10,
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now

    }
})

// we need to collection

const User=mongoose.model("User",userSchema);
module.exports=User;
