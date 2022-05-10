/* NOTES FROM LHL SKELETON:

 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
//-------------------------------------------------------------------------------
// SERVER SETUP:
const express = require("express");
const router = express.Router();
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // USER RELATED SERVER ROUTES:
  //-----------------------------

  //GAMEPLAN:
  //make one bare bones get and post request and then build out the real ones from there

  // Use POSTMAN (or cur)(since we cant post anything without a front end)
  // to input a new user into my database. (check database to confirm its there)
  router.post("/test1", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //---------------------------------------
  // GET: select all the users and return those values as new div element onto the html (similiar to how new tweets worked in tweeter)
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

  //-------------------------------------------------------------------------------
  // Example of a basic get request that displays the index.html to
  // local host when the user visits: local8080/api/users/view1
  router.get("/view1", (req, res) => {
    res.render("index");
  });

  //connects this file with server.js
  return router;
};

//-------------------------------------------------------------------------------
