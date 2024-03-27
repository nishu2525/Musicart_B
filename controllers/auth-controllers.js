const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome To Server Home from Controller");
  } catch (error) {
    console.log(error);
  }
};
// Register
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, phone, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email Already Exist" });
    }
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      name,
      phone,
      email,
      password: hash_password,
    });


    res
    .status(201)
    .json({
       userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const user = await bcrypt.compare(password, userExist.password);
    if (user) {
      res.status(201).json({
        message: "Login Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Password " });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { home, register, login };
