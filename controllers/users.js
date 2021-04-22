const User = require("../models/user.js");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const SALT_ROUNDS = 11;
const USER_TOKEN_KEY = "srCbL:+]7*M.PT^E";

//GetUsers
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//GetUser
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//UpdateUser
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//DeleteUser
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return res.status(200).json({ message: "User Successfully Deleted" });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Change-Password
const changePassword = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    const { newPassword, oldPassword } = req.body;
    if (await bcrypt.compare(oldPassword, user.password_digest)) {
      const password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS);
      user = await User.findByIdAndUpdate(
        req.params.id,
        { password_digest: password_digest },
        { new: true }
      );
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign(payload, USER_TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      return res.status(403).send("Password Change Error");
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//SignUp
const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ username, email, password_digest });
    await user.save();
    const payload = {
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(payload, USER_TOKEN_KEY);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Verify
const verify = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, USER_TOKEN_KEY);
    if (payload) {
      return res.json(payload);
    }
  } catch (error) {
    return res.status(401).send("Not authorized");
  }
};

//Sign In
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      if (await bcrypt.compare(password, user.password_digest)) {
        const payload = {
          username: user.username,
          email: user.email,
        };
        const token = jwt.sign(payload, USER_TOKEN_KEY);
        return res.status(200).json({ payload, token });
      } else {
        return res.status(401).send("Invalid Credentials")
      }
    } else {
      return res.status(400).send("User does not exist");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  changePassword,
  signUp,
  signIn,
  verify,
};
