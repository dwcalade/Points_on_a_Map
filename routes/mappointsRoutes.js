//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
const pointsHelper = require("../helper/helperFunctions");

module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP POINTS - SERVER ROUTES: (see google doc)
  //-------------------------------------------------------------------------------

  //POST: Add a new map point to a list given its id

  router.post("/:map_id/add", (req, res) => {
    let pointsInfo = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      latitude: Number(req.body.mapLat),
      longitude: Number(req.body.mapLong),
      map_id: Number(req.body.map_id),
    };
    console.log("point ", pointsInfo);
    pointsHelper.addPoints(db, pointsInfo).then((dbRes) => res.json(dbRes));
  });

  //-------------------------------------------------------------------------------
  //POST: Update title/description/image of a map point
  router.post("/:map_id/update/:pin_id", (req, res) => {
    const pointId = req.body.pointId;
    pointsHelper.editPoint(db, pointId).then();
  });

  //-------------------------------------------------------------------------------
  //Delete a point from a list
  router.post("/:map_id/remove/:pin_id", (req, res) => {
    const pointId = req.body.pointId;
    pointsHelper.deletePoint(db, pointId).then(() => res.send("ok"));
  });

  //-------------------------------------------------------------------------------
  //connects this file with server.js
  return router;
};
