const express = require("express");
const router = express.Router();
const {
  getDailyDrinksReports,
  createDailyDrinksReport,
  updateDailyDrinksReport,
  deleteDailyDrinksReport,
} = require("../handlers/dailyReportDrinksHandler");
const { protect } = require("../middleware/authMiddleware");


router.route("/drinks").get(protect, getDailyDrinksReports).post(protect, createDailyDrinksReport);
router.route("/drinks/:id").put(protect, updateDailyDrinksReport).delete(protect, deleteDailyDrinksReport);

module.exports = router;
