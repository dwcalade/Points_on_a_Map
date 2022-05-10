//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP POINTS RELATED SERVER ROUTES: (see google doc)
  //-----------------------------

  //CHANGE ALL BELOW FOLLOW TABLE DOC

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/test2", (req, res) => {
    db.query(`SELECT * FROM users;`)

      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //connects this file with server.js
  return router;
};

//-------------------------------------------------------------------------------
