const express = require("express");
const router = express.Router();
const { getHomepage, getABC } = require("../controllers/homeController");

router.get("/", getHomepage);
// khai báo route
router.get("/abc", getABC);

module.exports = router;
