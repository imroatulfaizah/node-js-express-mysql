//import library mysql
const mysql = require("mysql");
//panggil file config
const config = require("./config");

const connection = mysql.createConnection(config.database.mysql);

connection.connect(err => {
    // if (err) console.log('tidak bisa koneksi database');

    // console.log("koneksi berhasil");
    err ? console.log("koneksi gagal") : console.log("koneksi berhasil");
});

module.exports = connection;