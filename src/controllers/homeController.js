const getHomepage = (req, res) => {
  res.send("Hello World!");
};

const getABC = (req, res) => {
  res.render("index");
};

module.exports = { getHomepage, getABC };
