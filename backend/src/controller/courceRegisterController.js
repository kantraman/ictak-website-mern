const asyncHandler = require("express-async-handler");
const User = require("../model/courceRegisterModel");

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

  // const userExists = await User.findOne({ email });

  // if (userExists) {
  //   res.status(400);
  //   throw new Error("User Already Exists");
  // }

  const user = await User.create({
    name,
    email,
    mobile_number,
    date_of_birth,
    gender,
    course_name,
    amount,
  });

  if (user) {
    return res.status(201).json({
      // _id: user._id,
      name: user.name,
      email: user.email,
      mobile_number: user.mobile_number,
      date_of_birth: user.date_of_birth,
      gender: user.gender,
      course_Name: user.course_Name,
      amount: user.amount,

      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

module.exports = { registerUser };
