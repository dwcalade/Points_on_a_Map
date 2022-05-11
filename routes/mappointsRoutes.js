//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP POINTS - SERVER ROUTES: (see google doc)
  //-------------------------------------------------------------------------------

  router.get("/:mapid", (req, res) => {
    const id = req.params.id;
    const userId = req.session.userID;
    res.render('map_view', { id, userId});
  });

  //POST: Add a new map point to a list given its id
  router.post("/:mapid/add", (req, res) => {
    const userId = req.session.user_id;
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const lat = req.params.lat;
    const lng = req.params.lat;

    db.query(`SELECT user_id FROM maps
    WHERE maps.id = $1`,
    [req.params.id])
      .then((data) => {
        if ((data.rows[0].user_id) != userId) {

          const errorMsg = 'You must be an authenticated user to add a point to a map!';
          res.render('error', { id, userId, errorMsg});
          return;

        } else {

          db.query(`INSERT INTO points (title, description, image, latitude, longitude, map_id)
          VALUES ($1,$2,$3,$4,$5,$6)`,
          [id, lng, lat, title, description, image]);

          res.render('map_view', { id, userId });
        }
      });
  });

  //-------------------------------------------------------------------------------
  //POST: Update title/description/image of a map point
  router.post("/:map_id/update/:pin_id", (req, res) => {
    const { pointid } = req.params;
    const { title, description, imgUrl } = req.body;

    //MISSING: DB Querry?
    updatePoint(db, pointid, title, description, imgUrl).then(() =>
      res.status(201).send()
    );
  });

  //-------------------------------------------------------------------------------
  //Delete a point from a list
  router.post("/:map_id/remove/:pin_id", (req, res) => {
    deletePoint(db, req.params.pinid).then(() => res.status(201).send());
    res.redirect("/maps");
  });

  //-------------------------------------------------------------------------------
  //connects this file with server.js
  return router;
};
