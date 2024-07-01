const express = require('express')
const routes = express.Router()
const getUser = require("../controller/userController")

routes.get("/hello", getUser)


module.exports = routes