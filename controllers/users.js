const User = require('../models/user.js')
const db = require('../db')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


db.on('error', console.error.bind(console, 'MongoDB connection error'))
