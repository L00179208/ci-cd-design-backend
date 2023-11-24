const dashboard = async (req, res) => {
  let data = "Welcome to the API Service";

  res.status(201).json({
    success: true,
    data: {
      data,
    },
    message: "Making an update to the repo.",
  });
};
module.exports = { dashboard };
