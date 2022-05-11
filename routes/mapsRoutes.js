//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // MAP RELATED SERVER ROUTES: (see google doc)

  //-------------------------------------------------------------------------------
  //GET: /maps - the place a client is sent when they first arrive to the site,

  router.get("/", (req, res) => {
    //query the maps table fromt he db in order to populate the data needed for the map list box
    db.query(`SELECT * FROM maps;`)
      .then((data) => {
        const maps = data.rows;
        res.json({ maps });
        //this wil change to a res.render that will populate the future ejs template with the correct querry collected info
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //-------------------------------------------------------------------------------
  //GET: /maps /:map_id - guest or user clicks a map in the map list box and is redirected to that map

  router.get("/:map_id", (req, res) => {
    const mapID = req.params.map_id;
    db.query(`SELECT * FROM maps WHERE id = ${mapID};`)

      .then((data) => {
        const map = data.rows;
        res.json({ map });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //-------------------------------------------------------------------------------
  //POST: /maps /create
  // -user clicks the create a new map button and a form will pop up asking for a map name and when the user submits the form
  // it will create a new map_id for the database. it will grab the current lat and long of the leaflet map and assign it to the
  // new map_id db entry as its map specific lat and long

  //QUESTION: how will we grab lat and long from leaflet for a new map?

  router.post("/create", (req, res) => {
    // when the ejs form is built the value inputed by the user will be interpolated into the INSERT below

    const newMapName = req.body.name;
    const mapLatitude = req.body.mapLat;
    const mapLongitude = req.body.mapLong;

    db.query(
      `INSERT INTO maps(name, latitude, longitude)
       VALUES ('${newMapName}', ${mapLatitude}, ${mapLongitude})
       RETURNING *;`
    )

      // .then runs when the above DB insert is successfull, then user is redirected to the map they created
      .then((data) => {
        const mapID = data.rows[0].id;
        return res.redirect(`/maps/${mapID}`);
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  // CURL TEST:
  //  curl --location --request POST 'http://localhost:8080/maps/create' \
  //  --header 'Content-Type: application/json' \
  //  --data-raw '{
  //  "name": "test map 1",
  //  "mapLat": "51.496133",
  //  "mapLong": "-0.073643"
  //  }'

  //-------------------------------------------------------------------------------------------------------------
  //POST: /maps /favorites - If a guest or user favorites a specific map that map gets saved to them.

  router.post("/favorites", (req, res) => {
    // -conditional asks whether the client is a user or a guest based of whether they match an entry in the db
    //  or they have a guest cookie
    // !MISSING!

    //IF GUEST: assign the map to a favorites array/object to the guests cookie
    // !MISSING!

    //IF USER: the value inputed by the user will be interpolated into the INSERT below
    db.query(
      `INSERT INTO favorite_maps(user_id, map_id)
       VALUES (1, 5);`
    )
      // .then runs when DB insert OR guests cookie update is successfull, user gets redirected to the map they were on
      .then((data) => {
        return res.redirect("map/1");
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  //-------------------------------------------------------------------------------
  //POST DELETE: /maps /:map_id /delete - Delete a specific map

  router.post("/:map_id/delete", (req, res) => {
    //due to the cascade delete structure of db table structure this will also delete all points related to a given map
    db.query(`DELETE FROM maps WHERE ID = 1`)
      // .then runs when DB insert OR guests cookie update is successfull, user gets redirected to home page
      .then((data) => {
        return res.redirect("/");
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  //-------------------------------------------------------------------------------
  //connects this file with server.js
  https: return router;
};
