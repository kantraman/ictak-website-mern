const express = require("express");
const contactRouter = express.Router();
const sendEmail = require("../helpers/sendmail");
const Contact = require("../model/ContactUs");
const auth = require("../helpers/auth")
const export2xls = require("../helpers/convertToExcel");
const convertJsonToExcel = require("../helpers/convertToExcel");

contactRouter.post("/contact-us", (req, res) => {
    try {
        var item = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        }
        if (item.name !== "" && item.email !== "" && item.message !== "") {
            const message = new Contact(item);
            message.save()
                .then(() => {
                    res.json({ status: "Success" });
                    sendEmail(item.email,
                        "Thank you for contacting ICT Academy of Kerala",
                        "This email message is a computer generated message to confirm the receipt of your message." +
                        "Someone will get back to you as soon as possible." +
                        "<br/><br/> Thanks & Regards, <br/> <b>ICT Academy of Kerala</b>"
                    );
                })
                .catch((er) => {
                    console.log(er);
                    if(!res.headersSent)
                        res.sendStatus(500).json({ status: "Error" });
                });
        } else {
            res.json({ status: "Error", message: "Invalid inputs" });
        }
    } catch (error) {
        if(!res.headersSent)
            res.json({ status: "Error", message: error.message });
    }
   
})

//Get all contact messages as xls
contactRouter.get("/messages", auth, async (req, res) => {
    try {
        let filter = { respondedBack: false };
        let projection = {
            _id: 0,
            name: 1,
            email: 1,
            message: 1
        };
        let messages = await Contact.find(filter, projection);
        convertJsonToExcel(messages, "Contact Messages", res);
    } catch (err) {
        console.log(err);
    }
})

module.exports = contactRouter;