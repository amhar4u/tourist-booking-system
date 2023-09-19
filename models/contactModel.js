const mongoose = require('mongoose');
require('../database/connection');

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    message : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now,
    }
});

const contact = mongoose.model("Contact", contactSchema);
module.exports = contact;