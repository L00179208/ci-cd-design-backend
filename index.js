/**
 * The Default Server file for the application.
 */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/V1/user", userRouter);

const PORT = process.env.PORT || 8111;
app.listen(PORT, () => {
  console.log("Server has been started at port " + PORT);
});
