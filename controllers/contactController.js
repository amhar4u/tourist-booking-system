const contact = require('../models/contactModel');

module.exports.saveContactDetails = async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const contactData = new contact({
        name : name,
        email : email,
        message : message,
    });

    contactData.save().then(()=>{
        res.json({result : "success"});
    })
}

module.exports.getContactDetails = async (req, res)=>{
    contact.find({}).then(contactData=>{
        res.json({contacts : contactData});
    })
}