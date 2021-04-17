const User = require('../models/user.js')
const db = require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


db.on('error', console.error.bind(console, 'MongoDB connection error'))
const SALT_ROUNDS = 11;
const TOKEN_KEY = "thebestgroupever";
const signUp = async (req, res) => {
  // take in user data
  // set up password digest
  // create a new user
  // create a payload jwt
  // create jwt token
  // send back token
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ username, email, password_digest });
    await user.save();
    const payload = {
      username: user.username,

    };
    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ token, payload });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

};

module.exports = {
  signUp
};