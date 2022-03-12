const mongoose = require("mongoose");
//  const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile_number:{
      type: Number,
      required: true,
    },
    date_of_birth:{
      type: Date,
      required:true,
    },
    gender:{
      type : String,
      required : true,
    },
    course_name:{
      type :String,
      required : true,
    },
    amount:{
      type:Number,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);

// will encrypt password everytime its saved
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
