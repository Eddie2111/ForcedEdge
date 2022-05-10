const mysql = require('mysql');
//const config = require('../config/config');
//const sqlconnection_main = mysql.createConnection({host: config.db.host,user: config.db.user,password: config.db.password,database: config.db.database});

const sqlconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
});

module.exports = sqlconnection;