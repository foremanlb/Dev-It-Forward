const Tutor = require('../models/tutor.js')
const db = require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require('../models/user.js');

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const SALT_ROUNDS = 11;
const TOKEN_KEY = "securetoken";

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

//Sign Up
const signUp = async (req, res) => {
  try {
    const { username, email, hourlyRate, programmingLanguage, description, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    
    const tutor = new Tutor({ username, email, hourlyRate, programmingLanguage, description, password_digest })
    
    await tutor.save()
    const payload = {
      username: tutor.username,
      email: tutor.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)

    return res.status(201).json({token})
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
}