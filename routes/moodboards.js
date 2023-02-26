var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const results = await db(
      "SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId;"
    );
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res, next) => {
  const moodboardId = req.params.id;
  try {
    const results = await db(
      `SELECT m.*, e.* FROM moodboards AS m RIGHT JOIN elements AS e ON m.id = e.boardId WHERE m.id = ${moodboardId}`
    );
    console.log(results.data);
    if (results.data.length >= 1) {
      res.send(results.data);
    } else {
      res.status(404).send("Moodboard not found.");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const { name, elements } = req.body;

  try {
    //creating a new board
    await db(`INSERT INTO moodboards (name) VALUES ('${name}')`);
    //getting the id of the new board
    const results = await db(
      `SELECT id FROM moodboards ORDER BY id DESC LIMIT 1`
    );
    const boardId = results.data[0].id;

    for (const element of elements) {
      await db(
        `INSERT INTO elements (boardId, value, type) VALUES (${boardId}, '${element.value}', '${element.type}')`
      );
    }
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
