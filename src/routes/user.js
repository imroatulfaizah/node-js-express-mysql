const express = require("express");
const Route = express.Router(); // untuk  membuat route

const userController = require("../controller/user"); //memanggil alamat controller

Route.get("/", userController.getUser); //membuat alamat route / api
module.exports = Route;