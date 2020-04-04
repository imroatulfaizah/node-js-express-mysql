const connect = require("../config/db");

module.exports = {
    getUser: () => {
        return new Promise((resolve, reject) => { //promise untuk eror handling
            connect.query("Select * from profil", (err, result)=>{
                console.log("model");
                if (!err) {
                    resolve(result);
                }else {
                    reject(err);
                }
            });
        });
    },
};