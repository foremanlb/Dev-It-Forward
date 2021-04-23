const jwt = require("jsonwebtoken");
const TUTOR_TOKEN_KEY = "rCbL:+]7*M.PT^E";

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, TUTOR_TOKEN_KEY);
    next();
  } catch (error) {
    res.status(403).send("Unauthorized");
  }
};

module.exports = restrict;
