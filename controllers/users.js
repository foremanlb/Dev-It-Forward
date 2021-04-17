const User = require('../models/user.js')
const db = require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


db.on('error', console.error.bind(console, 'MongoDB connection error'))
const SALT_ROUNDS = 11;
const TOKEN_KEY = "securetoken";
const signUp = async (req, res) => {
  
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ username, email, password_digest });
    await user.save();
    const payload = {
      username: user.username,
      email: user.email

    };
    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ token});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

};

module.exports = {
  signUp
};