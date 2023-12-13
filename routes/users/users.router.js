const express = require("express");
const router = express.Router();

const auth = require("./users.controller");
const { isAdmin } = require("../../middleware/isAdmin");

router.route("/").get(auth.getAllUser);
router.route("/login").post(auth.login);
router.route("/register").post(auth.register);
router.route("/:userId").put(isAdmin, auth.updateUser);
// router.route("/:userId").delete(isAdmin, auth.deleteUser);

module.exports = router;    
