const mongoose= require('mongoose');
require('../database/connection');

const bookingSchema=new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type:String,
        required:true,
    },
    phone :{
        type:String,
        required:true,
    },
    selectedPackage:{
        type: String ,
        required: true,
    },
    amount:{
        type:String,
        required: true,
    }

});

const booking = mongoose.model("Booking",bookingSchema);
module.exports=booking;