var mysql=require("mysql");
var connection=mysql.createConnection({
    host: "localhost",
    port:"3306",
    database:"jitu",
    user:"root",
    password:""
});
module.exports =connection;