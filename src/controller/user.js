const modelUser = require("../models/user")

module.exports = {
    //nama fungsi sama dengan model biar mudah
    getUser : (req,res) =>{ //req untuk membaca data dr frontend, res untuk membaca respon
        modelUser.getUser().then(result => { //result menampung data dr model
            res.json({ //res.json untuk membuat format output API
                status: 200,
                message: "berhasil tampil data",
                data: result,
            });
        }).catch(err => {
            res.json({
                status: 400,
                message: "gagal tampil data",
            })
        })
    },
};