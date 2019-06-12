const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if (err) {
        // invalid token
        res.status(401).json({ message: "invalid credentials" });
      } else {
        // valid token
        // req.user = {
        //   department: decodeToken.department,
        //   username: decodeToken.username
        // };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token provided" });
  }
};
