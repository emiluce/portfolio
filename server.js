const express = require("express");
const mysql = require("mysql");
const app = express();


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio'
});

connection.connect(function (error) {
  if (error) {
    console.log("error");
  } else {
    console.log("MySQL connected...");
  }
});






app.get("/", function (req, res) {

  connection.query("SELECT * FROM tabella", function (error, rows, fields) {
    if (error) {
      console.log("Error in the query");
    } else {
      console.log("Successful query");
    }
  });
})

app.listen(5000);

module.exports = connection;