const express = require("express");

const { httGgetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", httGgetAllPlanets);

module.exports = planetsRouter;
