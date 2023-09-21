const booking = require('../models/bookingModel');

module.exports.saveBookingDetails = async(req,res) =>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const selectedPackage  = req.body.selectedPackage;
    const amount = req.body.amount;


    const bookingData = new booking({

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
        res.json({bookings : bookingData});
    })
}