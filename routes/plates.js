const router = require("express").Router();

const plates = require("../data/menu.json");
router.get("/", (req, res) => {
  res.send(plates);
});
module.exports = router;
