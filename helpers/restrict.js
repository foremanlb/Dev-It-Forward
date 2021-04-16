const jwt = require("jsonwebtoken");
const TOKEN_KEY = "securetoken";

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, TOKEN_KEY);
    next();
  } catch (error) {
    res.status(403).send("Unauthorized");
  }
};

module.exports = restrict;
