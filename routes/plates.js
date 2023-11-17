const router = require("express").Router();
const fs = require("fs");

const plates = require("../data/menu.json");

router.get("/", (req, res) => {
  res.send(plates);
});

router.post("/", (req, res) => {
  const newPlate = [...plates, req.body];
  fs.writeFile("./data/menu.json", JSON.stringify(newPlate), (err) => {
    if (err) throw err;
    res.send("Plate Created");
  });
});

module.exports = router;
