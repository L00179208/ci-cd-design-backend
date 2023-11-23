const express = require("express");
const { dashboard } = require("../../controllers/DashboardController");

const generalRouter = express.Router();

generalRouter.get("/", dashboard);

module.exports = generalRouter;
