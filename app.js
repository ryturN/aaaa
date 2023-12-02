const express = require("express");

app = express();

app.use(express.json());

const indexRouter = require("./routes/index/index.router");
const usersRouter = require("./routes/users/users.router");
const trashRouter = require("./routes/trash/trash.router");
const rewardsRouter = require("./routes/rewards/rewards.router");
const transactionsRouter = require("./routes/transactions/transactions.router");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trash", trashRouter);
app.use("/rewards", rewardsRouter);
app.use("/transactions", transactionsRouter);

module.exports = app;
