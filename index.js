/**
 * The Default Server file for the application.
 */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user");
const generalRouter = require("./src/routes/common");
const prometheus = require("prom-client");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/V1", generalRouter);
app.use("/api/V1/user", userRouter);

// // Metrics endpoint
// app.get("/metrics", (req, res) => {
//   res.set("Content-Type", prometheus.register.contentType);
//   res.end(prometheus.register.metrics());
// });

// // Define a custom metric
// const customMetric = new prometheus.Gauge({
//   name: "my_custom_metric",
//   help: "A custom metric for my application",
// });

// // Increment the custom metric
// customMetric.inc();

const PORT = process.env.PORT || 8111;
app.listen(PORT, () => {
  console.log("Server has been started at port " + PORT);
});
