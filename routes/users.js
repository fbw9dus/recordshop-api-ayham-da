const express = require("express");
const router = express.Router();
const { check} = require('express-validator');
//const low = require("lowdb");
//const FileSync = require("lowdb/adapters/FileSync");
//const adapter = new FileSync("data/db.json");
//const db = low(adapter);
const {userValidationRules} = require('../lib/validation/userRules');
const {validateInputs} = require('../middleware/validator');
const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator")


const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  addUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(auth, isAdmin, getUsers)
  .post(validateInputs(userValidationRules ), addUser);

router
  .route("/login")
  .post(loginUser)

router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

module.exports = router;
