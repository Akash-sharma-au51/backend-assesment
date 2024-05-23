const User = require("../model/userModel");//user model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config(); 

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Login success
    const tokenData = {
      id: user._id,
    };

    const secretKey = process.env.TOKEN_SECRET_KEY

    const token = jwt.sign(tokenData, secretKey, { expiresIn: "1h" });
    res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome back ${user.fullname}`,
        success: true,
      });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.status(200).clearCookie("token").json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
