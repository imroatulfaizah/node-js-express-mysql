const express = require("express");
const app = express();
//const connect = require("./src/config/db");
//const bodyParser = require('body-parser')
const routeUtama = require('./src/index');
const port = 8080

//untuk koneksi port server
app.listen(port, () => {
    console.log("koneksi port" + port)
});

app.use("/", routeUtama);