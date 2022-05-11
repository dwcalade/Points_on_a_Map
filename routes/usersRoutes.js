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
//const cookieSession = require("cookie-session");
//app.use(cookieSession({ name: "session", keys: [] }));
module.exports = (db) => {
  //-------------------------------------------------------------------------------
  // USER SERVER ROUTES: (see google doc)
  //-------------------------------------------------------------------------------

  //POST: Login Route
  router.post("/login", (req, res) => {
    req.session.userID = user.userID;
    res.redirect("/maps");
  });

  //-------------------------------------------------------------------------------
  //Logout Route
  router.post("/logout", (req, res) => {
    req.session = null;
    res.clearCookie("session");
    res.redirect("/maps");
  });

  //-------------------------------------------------------------------------------
  //the return of router connects this file with server.js
  return router;
};
