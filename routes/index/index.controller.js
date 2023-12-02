const index = (req, res) => {
  return res.status(200).json({
    status: {
      code: 200,
      message: "Success fetching the API",
    },
    data: null,
  });
};

const postData = (req, res) => {
  return res.status(201).json({
    status: {
      code: 201,
      message: "Data posted",
    },
    data: req.body,
  });
};

module.exports = { index, postData };
