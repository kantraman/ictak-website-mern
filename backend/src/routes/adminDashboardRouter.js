const express = require("express");
const dashboardRouter = express.Router();
const auth = require("../helpers/auth");
const { getStatsforGraph, getStatsforTiles } = require("../controller/dashboardController");

//Get details for doughnut graph
dashboardRouter.get("/graph", auth, async (req, res) => {
    getStatsforGraph(req, res);
})
//Get details for tiles
dashboardRouter.get("/tiles", auth, async (req, res) => {
    getStatsforTiles(req, res);
})

module.exports = dashboardRouter;
