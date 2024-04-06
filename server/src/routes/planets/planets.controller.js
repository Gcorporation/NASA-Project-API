const { getAllPlanets } = require("../../models/planets.model");

function httGgetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httGgetAllPlanets,
};
