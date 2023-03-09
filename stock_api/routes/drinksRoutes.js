const express = require("express");
const router = express.Router();
const {
  getDailyDrinksReports,
  createDailyDrinksReport,
  updateDailyDrinksReport,
  deleteDailyDrinksReport,
} = require("../handlers/dailyReportDrinksHandler");



router.route("/drinks").get(getDailyDrinksReports).post(createDailyDrinksReport);
router.route("/drinks/:id").put(updateDailyDrinksReport).delete(deleteDailyDrinksReport);

module.exports = router;
