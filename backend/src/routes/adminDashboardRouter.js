const express = require("express");
const dashboardRouter = express.Router();
const auth = require("../helpers/auth");
const { getStatsforGraph } = require("../controller/dashboardController");

//Get details for doughnut graph
dashboardRouter.get("/graph", async (req, res) => {
    getStatsforGraph(req, res);
})

module.exports = dashboardRouter;
