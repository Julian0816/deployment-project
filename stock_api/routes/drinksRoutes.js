const express = require("express");
const router = express.Router();
const {
  getDailyDrinksReports,
  createDailyDrinksReport,
  updateDailyDrinksReport,
  deleteDailyDrinksReport,
} = require("../handlers/dailyReportDrinksHandler");
const { protect } = require("../middleware/authMiddleware");

router.get("/drinks", protect, getDailyDrinksReports);
router.post("/drinks", protect, createDailyDrinksReport);
router.put("/drinks/:id", protect, updateDailyDrinksReport);
router.delete("/drinks/:id", protect, deleteDailyDrinksReport);

// router.route("/drinks").get(protect, getDailyDrinksReports).post(protect, createDailyDrinksReport);
// router.route("/drinks/:id").put(protect, updateDailyDrinksReport).delete(protect, deleteDailyDrinksReport);

module.exports = router;
