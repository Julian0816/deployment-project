const asyncHandler = require("express-async-handler");
const Report = require("../models/dailyReportDrinksModel");
const User = require("../models/userModel");

// @desc    Get keyItemsReports
// @route   Get /api/reports/keyItems
// @access  Private
const getDailyDrinksReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ user: req.user.id });
  console.log({ user: req.user.id });
  res.status(200).json(reports);
});


// @desc    Create keyItemsReport
// @route   Post /api/report/keyItems
// @access  Private
const createDailyDrinksReport = asyncHandler(async (req, res) => {
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
    user: req.user.id,
  });

  res.status(200).json({ message: "Stock Posted" });
});


// @desc    GUpdate keyItemsReport
// @route   Put /api/report/keyItems/:id
// @access  Private
const updateDailyDrinksReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(400);
    throw new Error("Report not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the report user
  if (report.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised");
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
const deleteDailyDrinksReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(400);
    throw new Error("Report not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the report user
  if (report.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised");
  }

  await Report.findById(req.params.id).findOneAndRemove();
  res.status(200).json({ id: req.params.id, message: `deleted` });
});

module.exports = {
  getDailyDrinksReports,
  createDailyDrinksReport,
  updateDailyDrinksReport,
  deleteDailyDrinksReport,
};