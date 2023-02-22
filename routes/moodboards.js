var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const results = await db("SELECT * FROM moodboards");
  res.send(results.data);
});

router.get("/:id", async (req, res, next) => {
  const moodboardId = req.params.id;
  try {
    const results = await db(
      `SELECT * FROM moodboards WHERE id = ${moodboardId}`
    );
    if (results.data.length === 1) {
      res.send(results.data[0]);
    } else {
      res.status(404).send("Moodboard not found.");
    }
  } catch (error) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const results = await db(
      `INSERT INTO moodboards (name) VALUES ('${name}')`
    );
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
