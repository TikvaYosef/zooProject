
const userroute = require("express").Router();
const usreRequestHeandler = require("../controllers/usersController")


userroute.post("/register", usreRequestHeandler.register)
userroute.post("/login", usreRequestHeandler.login)



module.exports = userroute;

