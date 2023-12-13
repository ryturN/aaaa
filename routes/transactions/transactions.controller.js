// const { transactionRef } = require("../../db/firebase");

const getTransactions = async (req, res) => {
  try {
    const snapshot = await transactionRef.get();
    const transactions = [];
    snapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Success get all transactions",
      },
      data: transactions,
    });
  } catch (error) {
    console.log(error);
  }
};

const addTransaction = async (req, res) => {
  const { quantity, status } = req.body;
  const transactionData = {
    quantity, 
    status
  };

  try {
    const docRef = await transactionRef.add(transactionData);

    return res.status(201).json({
      status: {
        code: 201,
        message: "Success add transaction",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const transaction = transactionRef.doc(transactionId);
    console.log(transaction);
    const { quantity, status } = req.body;
    const updatedtransaction = {
      quantity, 
      status
    };
    const docRef = await transaction.update(updatedtransaction);
    return res.status(201).json({
      status: {
        code: 201,
        message: "Success update transaction",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTransaction = async (req, res) => {
  const transactionId = req.params.transactionId;
  const transaction = transactionRef.doc(transactionId);
  await transaction.delete();
  return res.status(201).json({
    status: {
      code: 201,
      message: "Success delete transaction",
    },
    data: null,
  });
};

module.exports = { getTransactions, addTransaction, updateTransaction, deleteTransaction };
