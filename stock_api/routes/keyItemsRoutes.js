const express = require("express");
const router = express.Router();
const {
  getDailyKeyItemsReports,
  createDailyKeyItemsReport,
  updateDailyKeyItemsReport,
  deleteDailyKeyItemsReport,
} = require("../handlers/dailyReportKeyItemsHandler");
const { protect } = require("../middleware/authMiddleware");

router.get("/keyItems", protect, getDailyKeyItemsReports);
router.post("/keyItems", protect, createDailyKeyItemsReport);
router.put("/keyItems/:id", protect, updateDailyKeyItemsReport);
router.delete("/keyItems/:id", protect, deleteDailyKeyItemsReport);

// router.route("/keyItems").get(protect, getDailyKeyItemsReports).post(protect, createDailyKeyItemsReport);
// router.route("/keyItems/:id").put(protect, updateDailyKeyItemsReport).delete(protect, deleteDailyKeyItemsReport);

module.exports = router;
