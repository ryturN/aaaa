const { rewardRef } = require("../../db/firebase");

const getReward = async (req, res) => {
  try {
    const snapshot = await rewardRef.get();
    const rewards = [];
    snapshot.forEach((doc) => {
      rewards.push({ id: doc.id, ...doc.data() });
    });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Success get all rewards",
      },
      data: rewards,
    });
  } catch (error) {
    console.log(error);
  }
};

const addReward = async (req, res) => {
  const { name, description, pointValue, imageUrl } = req.body;
  const rewardData = {
    name,
    description,
    pointValue: Number(pointValue),
    imageUrl,
  };

  try {
    const docRef = await rewardRef.add(rewardData);

    return res.status(201).json({
      status: {
        code: 201,
        message: "Success add reward",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateReward = async (req, res) => {
  try {
    const rewardId = req.params.rewardId;
    const reward = rewardRef.doc(rewardId);
    console.log(reward);
    const { name, description, pointValues, imageUrl } = req.body;
    const updatedReward = {
      name,
      description,
      pointValues,
      imageUrl,
    };
    const docRef = await reward.update(updatedReward);
    return res.status(201).json({
      status: {
        code: 201,
        message: "Success update reward",
      },
      data: {
        id: docRef.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteReward = async (req, res) => {
  const rewardId = req.params.rewardId;
  const reward = rewardRef.doc(rewardId);
  await reward.delete();
  return res.status(201).json({
    status: {
      code: 201,
      message: "Success delete reward",
    },
    data: null,
  });
};

module.exports = { getReward, addReward, updateReward, deleteReward };
