const User = require("../model/courceRegisterModel");
const sendMail = require("../helpers/sendmail");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    mobile_number,
    date_of_birth,
    gender,
    course_name,
    amount,
  } = req.body;

  
  if (name !== "" && email !== "" && mobile_number !== "" && date_of_birth !== "" && gender !== "" && course_name !== "" && amount !== "") {
    const user = await User.create({
      name,
      email,
      mobile_number,
      date_of_birth,
      gender,
      course_name,
      amount,
    })
   
    if (user) {
      sendMail(email,
        "ICTAK Course Registration Confirmation - " + course_name,
        "This email message is a computer generated message to confirm that " +
        "you have successfully registered for the course " + course_name +
        " Please download our course brochure at " +
        "<a href='https://ictkerala.org'>Course Brochure</a>" +
        "<br/><br/> Thanks & Regards, <br/> <b>ICT Academy of Kerala</b>"
      );
      return res.status(201).json({
        name: user.name,
        email: user.email,
        mobile_number: user.mobile_number,
        date_of_birth: user.date_of_birth,
        gender: user.gender,
        course_Name: user.course_Name,
        amount: user.amount,
      });
  
    } else {
      res.status(400).send("Unexpected error.");
    }
  } else {
    res.status(400).send("Enter all fields");
  }
});

module.exports = { registerUser };
