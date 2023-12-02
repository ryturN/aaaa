const express = require("express");
const router = express.Router();

const { getUsers, addUser, updateUser, deleteUser } = require("./users.controller");
const { isAdmin } = require("../../middleware/isAdmin");

router.route("/").get(getUsers);
router.route("/").post(isAdmin, addUser);
router.route("/:userId").put(isAdmin, updateUser);
router.route("/:userId").delete(isAdmin, deleteUser);

module.exports = router;
