const booking = require('../models/bookingModel');

module.exports.saveBookingDetails = async(req,res) =>{

    const name=body.req.name;
    const email=body.req.email;
    const phone=body.req.phone;
    const selectedPackage=body.req.selectedPackage;
    const amount=body.req.amount;


    const bookingData=new booking({

        name:name,
        email:email,
        phone:phone,
        selectedPackage:selectedPackage,
        amount:amount,

    });

    bookingData.save().then(()=>{
        res.json({result : "success"});
    })  
}

module.exports.bookingData = async (req,res)=>{

    booking.find({}).then(bookingData =>{
        res.json({booking : bookingData});
    })
}