/**
 * The Default Server file for the application.
 */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user");
const generalRouter = require("./src/routes/common");
const client = require("prom-client");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/V1", generalRouter);
app.use("/api/V1/user", userRouter);

const register = new client.Registry();
register.setDefaultLabels({
  app: "ci-cd-pipeline-app",
});

client.collectDefaultMetrics({ register });

app.get("/metrics", (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  register.metrics().then((data) => res.send(data));
});

const PORT = process.env.PORT || 8111;
app.listen(PORT, () => {
  console.log("Server has been started at port " + PORT);
});
