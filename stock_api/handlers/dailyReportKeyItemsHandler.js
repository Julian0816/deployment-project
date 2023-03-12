const asyncHandler = require("express-async-handler");
const Report = require("../models/dailyReportKeyItemsModel");
const User = require("../models/userModel");

// @desc    Get keyItemsReports
// @route   Get /api/reports/keyItems
// @access  Private
const getDailyKeyItemsReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ user: req.user.id });

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
    sweet_potato_wedges: req.body.sweet_potato_wedges,
    long_stem_broccoli_in_kg: req.body.long_stem_broccoli_in_kg,
    coleslaw_in_kg: req.body.coleslaw_in_kg,
    corn_per_unit: req.body.corn_per_unit,
    rice_in_kg: req.body.rice_in_kg,
    mixed_olives_in_kg: req.body.mixed_olives_in_kg,
    chips_in_kg: req.body.chips_in_kg,
    user: req.user.id,
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

  const user = await User.findById(req.user.id)

  //Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the report user
  if(report.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
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

    const user = await User.findById(req.user.id)

  //Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the report user
  if(report.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
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
