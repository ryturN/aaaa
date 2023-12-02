const express = require("express");
const router = express.Router();

const { getTrash, addTrash, updateTrash, deleteTrash } = require("./trash.controller");
const { isAdmin } = require("../../middleware/isAdmin");

router.route("/").get(getTrash);
router.route("/").post(isAdmin, addTrash);
router.route("/:trashId").put(isAdmin, updateTrash);
router.route("/:trashId").delete(isAdmin, deleteTrash);

module.exports = router;
