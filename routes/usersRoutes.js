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
  // USER RELATED SERVER ROUTES: (see google doc)
  //-----------------------------

  // Use POSTMAN or curl for front end input

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

  //Login Route
  router.post("/login", (req, res) => {
    // Get username and password from req
    //Query database for matching username and password
    db.query()
      // req.session.userID = user.userID;
      console.log (req.body)
      // res.json(dbRes[0])
      // res.redirect('/maps');
  });

  //Logout Route
  router.post('/logout', (req, res) => {
  req.session = null
  res.clearCookie('session');
  res.redirect('/maps');
  });

  //the return of router connects this file with server.js
  return router;
};

//-------------------------------------------------------------------------------
