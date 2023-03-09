const express = require("express");
const router = express.Router();
const {
  getDailyKeyItemsReports,
  createDailyKeyItemsReport,
  updateDailyKeyItemsReport,
  deleteDailyKeyItemsReport,
} = require("../handlers/dailyReportDrinksHandler");



router.route("/drinks").get(getDailyKeyItemsReports).post(createDailyKeyItemsReport);
router.route("/drinks/:id").put(updateDailyKeyItemsReport).delete(deleteDailyKeyItemsReport);

module.exports = router;
