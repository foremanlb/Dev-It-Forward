const Tutor = require("../models/tutor.js");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "securetoken";
//Get all Tutors
const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({});
    res.status(200).json(tutors);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
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
;

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const tutor = await Tutor.findOne({ username: username });
    if (tutor) {
      if (await bcrypt.compare(password, tutor.password_digest)) {
        const payload = {
          username: tutor.username,
          email: tutor.email,
        };

        const token = jwt.sign(payload, TOKEN_KEY);

        return res.status(200).json({ payload, token });
      } else {
        res.status(401).send("Invalid Credentials. Try again.");
      }
    } else {
      res.status(400).send("Tutor does not exist");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const changePassword = async (req, res) => {
  
  try {
    let tutor = await Tutor.findById(req.params.id);
    const { newPassword, oldPassword } = req.body;
    if (await bcrypt.compare(oldPassword, tutor.password_digest)) {
      const password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS);
      tutor = await Tutor.findByIdAndUpdate(
        req.params.id,
        { password_digest: password_digest },
        { new: true }
      );
      const payload = {
        id: tutor._id,
        username: tutor.username,
        email: tutor.email,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ tutor, token });
    }
    else {
      return res.status(403).send("Invalid password")
  
    }
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
};


module.exports = { verify, signIn,changePassword };
