const Tutor = require('../models/tutor.js')
const db require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const SALT_ROUNDS = 11;
const TOKEN_KEY =

//Verify
const verify = async (req, res) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      return res.json(payload);
    }
    
  } catch (error) {
    res.status(401).send("Validation Error");
  }
}