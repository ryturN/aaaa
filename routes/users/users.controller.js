const { userRef } = require("../../db/firebase");

const getUsers = async (req, res) => {
  try {
    const snapshot = await userRef.get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Success get all users",
      },
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res) => {
  const { name, email, password, point,imageUser } = req.body;
  const userData = {
    name,
    email, 
    password, 
    point,
    imageUser
  };

  try {
    const docRef = await userRef.add(userData);

    return res.status(201).json({
      status: {
        code: 201,
        message: "Success add user",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = userRef.doc(userId);
    console.log(user);
    const { name, email, password, point, imageUser } = req.body;
    const userData = {
      name,
      email, 
      password, 
      point,
      imageUser
    };
    const docRef = await user.update(updateduser);
    return res.status(201).json({
      status: {
        code: 201,
        message: "Success update user",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const user = userRef.doc(userId);
  await user.delete();
  return res.status(201).json({
    status: {
      code: 201,
      message: "Success delete user",
    },
    data: null,
  });
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
