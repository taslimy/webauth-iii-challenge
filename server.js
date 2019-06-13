const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const server = express();


const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000"
};

server.use(express());
server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2> TESTING IF SERVER IS LIVE! </h2>`);
});

// Define Routes
server.use("/api/auth", require("./auth/auth-router")); // register & login
server.use("/api/users", require("./routes/users-router")); // all departments

// Logger
function logger(req, res, next) {
  console.log(` [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
