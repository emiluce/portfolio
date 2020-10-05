const express = require("express");
const mysql = require("mysql");
const app = expresss();


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio'
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("MySQL connected...");
}); s


app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to Emanuela's Portfolio API",
  });
});

app.listen(5000);





app.get("/", (req, res) {

  connection.query("SELECT * FROM portfolio", (err)
    if (err) {
    console.log("Error in the query");
  } else {
    console.log("Successful query");
  }
});

module.exports = connection;