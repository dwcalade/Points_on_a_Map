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

  //Add a new point to a list given its id
  router.post("/:mapid/add", (req, response) => {
  const ownerId = 1;//req.session.user.id;
  const listId = req.params.listid;
  const { title, description, imgUrl, latitude, longitude } = req.body;

  addPoint(db, ownerId, listId, title, description, imgUrl, latitude, longitude)
    .then(() => response.status(201).send());
  });

  //Update title/description of a point
  router.post("/:mapid/update/:pinid", (req, response) => {
  const { pointid } = req.params;
  const { title, description, imgUrl } = req.body;

  updatePoint(db, pointid, title, description, imgUrl)
    .then(() => response.status(201).send());
  });

   //Delete a point from a list
   router.post("/:mapid/remove/:pinid", (req, response) => {

    deletePoint(db, req.params.pinid)
      .then(() => response.status(201).send());
      res.redirect('/maps');
  });

  //connects this file with server.js
  return router;
};

//-------------------------------------------------------------------------------
