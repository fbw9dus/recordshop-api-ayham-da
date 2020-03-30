const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
const {userValdationRules}=require('../lib/validation/validator')
const {validateInputs} = require('../middleware/validator')
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValdationRules),addUser);

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;
