const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const LocalHost = process.env.LOCAL_HOST || "localhost";
console.log(process.env);
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("index");
});

app.get("/abc", (req, res) => {
  res.send("<h1>check ABC</h1>");
});

app.listen(port, LocalHost, () => {
  console.log(`Example app listening on port ${port}`);
});
