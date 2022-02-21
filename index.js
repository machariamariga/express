var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());

var connection = require("./database");
app.get("/trainees", (req, res) => {
  connection.query("select * from trainees", function (err, rows) {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/trainees", (req, res) => {
  const query =
    "insert into trainees(firstname,secondname,email,project,password,id) values(?,?,?,?,?,?)";
  const firstname = req.body.firstname;
  const secondname = req.body.secondname;
  const email = req.body.email;
  const project = req.body.project;
  const password = req.body.password;
  const id = req.body.id;
  connection.query(
    query,
    [firstname, secondname, email, project, password, id],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

app.listen(4000, function () {
  console.log("App listening on port 4000");
  connection.connect(function (err) {
    if (err) console.log("err");
    else console.log("Connection established");
  });
});
