const express = require('express');
const { saveContactDetails, getContactDetails } = require('../controllers/contactController');
const {saveBookingDetails,getBookinDetails } =  require('../controllers/bookingController');
const { retriveLoginDetails } = require('../controllers/loginControlers');
const route = express.Router();

route.get("/", (req,res)=>{
    res.json({"Status" : "working"});
});
// route.get("/contact", getContactDetails); //back end route for pass data to frontend
route.post("/contact", saveContactDetails);  // insert data route
route.post("/booking",saveBookingDetails);
route.post("/admin", retriveLoginDetails);


module.exports = route;