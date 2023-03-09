
const asyncHandler = require("express-async-handler");
const Report = require("../models/dailyReportDrinksModel");

// @desc    Get keyItemsReports
// @route   Get /api/reports/keyItems
// @access  Private
const getDailyKeyItemsReports = asyncHandler(async (req, res) => {
  const reports = await Report.find();

  res.status(200).json(reports);
});


// @desc    Create keyItemsReport
// @route   Post /api/report/keyItems
// @access  Private
const createDailyKeyItemsReport = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const report = await Report.create({
    cara_viva_rose: req.body.cara_viva_rose,
    cara_viva_summer_fruit: req.body.cara_viva_summer_fruit,
    freedom_pils: req.body.freedom_pils,
    sagres: req.body.sagres,
    spier_merlot_250ml: req.body.spier_merlot_250ml,
    spier_rose_250ml: req.body.spier_rose_250ml,
    spier_sauv_250ml: req.body.spier_sauv_250ml,
    spier_sig_chard_250ml: req.body.spier_sig_chard_250ml,
  });

  res.status(200).json({ message: "Stock Posted" });
});


// @desc    GUpdate keyItemsReport
// @route   Put /api/report/keyItems/:id
// @access  Private
const updateDailyKeyItemsReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(400);
    throw new Error("Report not found");
  }

  const updatedReport = await Report.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedReport);
});


// @desc    Delete keyItemsReport
// @route   Delete /api/report/keyItems/:id
// @access  Private
const deleteDailyKeyItemsReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(400);
    throw new Error("Report not found");
  }

  await Report.findById(req.params.id).findOneAndRemove();
  res.status(200).json({ id: req.params.id, message: `deleted` });
});

module.exports = {
  getDailyKeyItemsReports,
  createDailyKeyItemsReport,
  updateDailyKeyItemsReport,
  deleteDailyKeyItemsReport,
};