const express = require("express");
const router = express.Router();

const { index, postData } = require("./index.controller");

router.route("/").get(index);
router.route("/").post(postData);

module.exports = router;
