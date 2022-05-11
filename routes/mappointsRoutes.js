//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP POINTS - SERVER ROUTES: (see google doc)
  //-------------------------------------------------------------------------------

  //POST: Add a new map point to a list given its id
  router.post("/:mapid/add", (req, response) => {
    const ownerId = 1; //req.session.user.id;
    const listId = req.params.listid;
    const { title, description, imgUrl, latitude, longitude } = req.body;

    //function still needs to be built
    addPoint(title, description, imgUrl, latitude, longitude).then(() =>
      response.status(201).send()
    );
  });

  //-------------------------------------------------------------------------------
  //POST: Update title/description/image of a map point
  router.post("/:map_id/update/:pin_id", (req, response) => {
    const { pointid } = req.params;
    const { title, description, imgUrl } = req.body;

    //MISSING: DB Querry?
    updatePoint(db, pointid, title, description, imgUrl).then(() =>
      response.status(201).send()
    );
  });

  //-------------------------------------------------------------------------------
  //Delete a point from a list
  router.post("/:map_id/remove/:pin_id", (req, response) => {
    deletePoint(db, req.params.pinid).then(() => response.status(201).send());
    res.redirect("/maps");
  });

  //-------------------------------------------------------------------------------
  //connects this file with server.js
  return router;
};
