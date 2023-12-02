const express = require("express");
const router = express.Router();

const { getTransactions, addTransaction, updateTransaction, deleteTransaction } = require("./transactions.controller");
const { isAdmin } = require("../../middleware/isAdmin");

router.route("/").get(getTransactions);
router.route("/").post(isAdmin, addTransaction);
router.route("/:transactionId").put(isAdmin, updateTransaction);
router.route("/:transactionId").delete(isAdmin, deleteTransaction);

module.exports = router;
