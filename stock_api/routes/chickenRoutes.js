const express = require('express');
const router = express.Router();
const {
  getDailyChickenReports,
  createDailyChickenReport,
  updateDailyChickenReport,
  deleteDailyChickenReport,
} = require("../handlers/DailyReportChickenHandler");
const { protect } = require('../middleware/authMiddleware')


router.get("/chicken", protect, getDailyChickenReports);
router.post("/chicken", protect, createDailyChickenReport);
router.put("/chicken/:id", protect, updateDailyChickenReport);
router.delete("/chicken/:id", protect, deleteDailyChickenReport);

// router.route("/chicken").get(protect, getDailyChickenReports).post(protect, createDailyChickenReport);
// router.route("/chicken/:id").put(protect, updateDailyChickenReport).delete(protect, deleteDailyChickenReport);

module.exports = router