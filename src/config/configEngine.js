const express = require("express");
const path = require("path");
const configEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("views", path.join("./src", "views"));
  // start file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configEngine;
