const express = require('express');
const router = express.Router();
const {
  getDailyChickenReports,
  createDailyChickenReport,
  updateDailyChickenReport,
  deleteDailyChickenReport,
} = require("../handlers/DailyReportChickenHandler");
const { protect } = require('../middleware/authMiddleware')


router.route("/chicken").get(protect, getDailyChickenReports).post(protect, createDailyChickenReport);
router.route("/chicken/:id").put(protect, updateDailyChickenReport).delete(protect, deleteDailyChickenReport);

module.exports = router