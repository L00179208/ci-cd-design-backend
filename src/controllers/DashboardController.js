const dashboard = async (req, res) => {
  let data = "Welcome to the API Service";

  res.status(201).json({
    success: true,
    data: {
      data,
    },
    message: "Data loaded successfully",
  });
};
module.exports = { dashboard };
