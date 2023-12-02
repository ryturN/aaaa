const { trashRef } = require("../../db/firebase");

const getTrash = async (req, res) => {
  try {
    const snapshot = await trashRef.get();
    const trash = [];
    snapshot.forEach((doc) => {
      trash.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Success get all trash",
      },
      data: trash,
    });
  } catch (error) {
    console.log(error);
  }
};

const addTrash = async (req, res) => {
  const { type, weight, location, time } = req.body;
    const updatedtrash = {
      type, 
      weight, 
      location, 
      time
    };

  try {
    const docRef = await trashRef.add(trashData);

    return res.status(201).json({
      status: {
        code: 201,
        message: "Success add trash",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTrash = async (req, res) => {
  try {
    const trashId = req.params.trashId;
    const trash = trashRef.doc(trashId);
    console.log(trash);
    const { type, weight, location, time } = req.body;
    const updatedtrash = {
      type, 
      weight, 
      location, 
      time
    };
    const docRef = await trash.update(updatedtrash);
    return res.status(201).json({
      status: {
        code: 201,
        message: "Success update trash",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTrash = async (req, res) => {
  const trashId = req.params.trashId;
  const trash = trashRef.doc(trashId);
  await trash.delete();
  return res.status(201).json({
    status: {
      code: 201,
      message: "Success delete trash",
    },
    data: null,
  });
};

module.exports = { getTrash, addTrash, updateTrash, deleteTrash };
