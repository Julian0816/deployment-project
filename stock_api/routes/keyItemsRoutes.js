const express = require("express");
const router = express.Router();
const {
  getDailyKeyItemsReports,
  createDailyKeyItemsReport,
  updateDailyKeyItemsReport,
  deleteDailyKeyItemsReport,
} = require("../handlers/dailyReportKeyItemsHandler");



router.route("/keyItems").get(getDailyKeyItemsReports).post(createDailyKeyItemsReport);
router.route("/keyItems/:id").put(updateDailyKeyItemsReport).delete(deleteDailyKeyItemsReport);

module.exports = router;
