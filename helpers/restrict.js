const jwt = require("jsonwebtoken");
const TOKEN_KEY = "srCbL:+]7*M.PT^E";

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
