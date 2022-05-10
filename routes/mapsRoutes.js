//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP RELATED SERVER ROUTES: (see google doc)
  //-----------------------------

  //GET: /maps - home page, the starting point for a new guest

  router.get("/maps", (req, res) => {
    //query the maps table in order to populate the map list box
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
