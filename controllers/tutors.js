const Tutor = require("../models/tutor.js");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

db.on("error", console.error.bind(console, "MongoDB connection error"));

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
};

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

module.exports = { verify, signIn };
