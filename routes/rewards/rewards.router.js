const express = require("express");
const router = express.Router();

const { getReward, addReward, updateReward, deleteReward } = require("./rewards.controller");
const { isAdmin } = require("../../middleware/isAdmin");

router.route("/").get(getReward);
router.route("/").post(isAdmin, addReward);
router.route("/:rewardId").put(isAdmin, updateReward);
router.route("/:rewardId").delete(isAdmin, deleteReward);

module.exports = router;
