const { default: mongoose } = require("mongoose");
const users = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

// registration of user

exports.register = async (req, res) => {
  console.log("inside userController register function");
  const { name, mobile, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(406).json("you already have an account!");
    } else {
      const newUser = new users({
        name,
        mobile,
        email,
        password,
        userImage:"",
        userLicence:"",
        dateofbirth:"",
        type: "user"
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`Register API Failed : ${err}`);
  }
};

// login Controller

exports.userLogin = async (req, res) => {
    console.log("inside userController login function");
    const { email, password } = req.body;
    try {
      const existingUser = await users.findOne({ email, password });
      if (existingUser) {
        const token = jwt.sign(
          { type: "user", userId: existingUser._id },
          process.env.JWT_SECRET_CODE
        );
        res.status(200).json({
          existingUser,
          token,
        });
      } else {
        res.status(404).json(`Incorrect Email / Password`);
      }
    } catch (err) {
      res.status(401).json(`Login API Failed , Error : ${err}`);
    }
  };
