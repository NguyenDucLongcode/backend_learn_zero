require("dotenv").config();
const express = require("express");
const app = express();
const configEngine = require("./config/configEngine");
const wedRouter = require("./routes/wed");
const mysql = require("mysql2");

const path = require("path");
const port = process.env.PORT || 8080;
const LocalHost = process.env.LOCAL_HOST || "localhost";

// set views folder for EJS templates
configEngine(app);

// khai báo route
app.use("/", wedRouter);

// text connection
// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "123456",
  database: "hoidanit",
});

// A simple SELECT query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">> check results =", results); // results contains rows returned by server
  console.log(">> check fields = ", fields); // fields contains extra meta data about results, if available
});

app.listen(port, LocalHost, () => {
  console.log(`Example app listening on port ${port}`);
});
