const User = require('../models/user.js')
const db = require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


db.on('error', console.error.bind(console, 'MongoDB connection error'))

const SALT_ROUNDS = 11;
const TOKEN_KEY = "securetoken";
s
//GetUsers

const getUsers = async (req, res)=>{
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//GetUser
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//UpdateUser

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await findByIdAndUpdate (id, req.body, {new: true});
        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

//DeleteUser

const deleteUser = async (req,res) => {
    try{
        const {id} = req.params;
        await User.findByIdAndDelete(id)
        return res.status(200).json({message: "User Successfully Deleted"})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

//Change-Password

const changePassword = async (req, res) =>{
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
    
          const token = jwt.sign(payload, TOKEN_KEY);
          return res.status(201).json({ user, token });
        } else {
          return res.status(403).send("Password Change Error");
        }
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    };


module.exports = {
    getUsers,
    getUser,
    deleteUser,
    changePassword,
};