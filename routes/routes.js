const express = require('express');
const { saveContactDetails, getContactDetails } = require('../controllers/contactController');
const route = express.Router();

route.get("/", (req,res)=>{
    res.json({"Status" : "working"});
});
// route.get("/contact", getContactDetails); //back end route for pass data to frontend
route.post("/contact", saveContactDetails);  // insert data route

module.exports = route;