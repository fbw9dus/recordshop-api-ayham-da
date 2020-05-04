const express = require("express");
const router = express.Router();
//const low = require("lowdb");
//const FileSync = require("lowdb/adapters/FileSync");
//const adapter = new FileSync("data/db.json");
//const db = low(adapter);
const auth= require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator")
const {
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  addOrder
} = require("../controllers/ordersController");

router
  .route("/")
  .get(auth, isAdmin,  getOrders)
  .post(auth, addOrder);

router
  .route("/:id")
  .get(auth, getOrder)
  .delete(auth, deleteOrder)
  .put(auth, updateOrder);

module.exports = router;
