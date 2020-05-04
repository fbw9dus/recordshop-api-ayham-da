const express = require("express");
const router = express.Router();
const User = require("../models/User")
const auth= require("../middleware/authenticator")

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

const {
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
  addRecord
} = require("../controllers/recordsController");

router
  .route("/")
  .get(getRecords)
  .post(auth, addRecord);
  /*.post((req, res, next) => {

    // is auth?

    const token = req.header("x-auth")
    const decodedToken
    const user = User.findOne({

      _id: decodedToken._id,
      "tokens.token": token,
      "token.access": "auth"
    })
    if(!user)return next ("nicht logged in")
    const isLoggedIn = true
    if (!isLoggedIn) return next("nicht logged in")
    next()
  }, addRecord);*/

router
  .route("/:id")
  .get(getRecord)
  .delete(auth, deleteRecord)
  .put(auth, updateRecord);

module.exports = router;
