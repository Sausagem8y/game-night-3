const express = require("express");
const Char = require("./mongoose");
const router = new express.Router();

module.exports = router;
router.post("/chars", async (req, res) => {
  const char = new Char(req.body);

  try {
    await char.save();
    res.status(201).send(char);
  } catch (e) {
    res.status(400).send(e);
  }
});
