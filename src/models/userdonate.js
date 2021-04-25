const mongoose=require("mongoose");
const validator=require("validator");
const conn=require('../db/conn')
const donateSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    bloodgrp:{
         type:String,
        required:true,
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
        minLength:1
    },
    date:{
        type:Date,
        default:Date.now

    }
})

// we need to collection

const Donate=conn.volunteer.model("Donate",donateSchema);
module.exports=Donate;
