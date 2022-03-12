const express = require("express");
const dashboardRouter = express.Router();
const auth = require("../helpers/auth");
const {
    getStatsforGraph,
    getStatsforTiles,
    studentRegData
} = require("../controller/dashboardController");

//Get details for doughnut graph
dashboardRouter.get("/graph", auth, async (req, res) => {
    getStatsforGraph(req, res);
})
//Get details for tiles
dashboardRouter.get("/tiles", auth, async (req, res) => {
    getStatsforTiles(req, res);
})
//Get course registration applications as xlsx
dashboardRouter.get("/export-student-appl", auth, async (req, res) => {
    studentRegData(req, res, "E");
})
//View registration applications
dashboardRouter.get("/view-student-appl", auth, async (req, res) => {
    studentRegData(req, res, "V");
})

module.exports = dashboardRouter;
