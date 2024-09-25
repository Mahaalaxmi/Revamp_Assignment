const bcrypt = require("bcryptjs");
const asyncHAndler = require("express-async-handler");
const User = require("../model/User");

const usersCtrl = {
  //register
  register: async (req, res) => {
    const { username, email, password } = req.body;
    //validate
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }
    //check  if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    //Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create the user
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    //send the response
    res.json(userCreated);
  },
};

module.exports = usersCtrl;
