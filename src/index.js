const express = require("express");
const Route = express.Router();

const userRoute = require("./routes/user"); //memanggil alamat route user
Route.use("/user",userRoute);

module.exports = Route;