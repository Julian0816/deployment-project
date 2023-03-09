const express = require('express')
const router = express.Router()
const {
  getDailyChickenReports,
  createDailyChickenReport,
  updateDailyChickenReport,
  deleteDailyChickenReport,
} = require("../handlers/DailyReportChickenHandler");


router.route("/chicken").get(getDailyChickenReports).post(createDailyChickenReport);
router.route("/chicken/:id").put(updateDailyChickenReport).delete(deleteDailyChickenReport);

module.exports = router