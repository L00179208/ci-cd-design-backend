const signup = async (req, res) => {
  const Item = { ...req.body };
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  let data = [email, password];

  res.status(201).json({
    success: true,
    data: {
      data,
    },
    message: "Authentication Success",
  });
};

module.exports = { signup, signin };
