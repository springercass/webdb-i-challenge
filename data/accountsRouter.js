const express = require("express");
const knex = require("knex");

const dbConnection = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/budget.db3"
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get("/", (req, res) => {
  dbConnection("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  const account = req.body;
  dbConnection("accounts")
    .insert(account, "id")
    .then(arrayOfIds => {
      const idOfLastRecordInserted = arrayOfIds[0];
      res.status(200).json(idOfLastRecordInserted);
    })
    .catch(error => res.status(500).json(error));
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
