const asyncHandler = require('express-async-handler');
const Report = require('../models/dailyReportChickenModel');
const User = require('../models/userModel');

// @desc    Get chickenReports
// @route   Get /api/reports/chicken
// @access  Private
const getDailyChickenReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ user: req.user.id });

  res.status(200).json(reports);
});


// @desc    Create chickenReport
// @route   Post /api/report/chicken
// @access  Private
const createDailyChickenReport = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const report = await Report.create({
    chickens: req.body.chickens,
    chicken_fillets: req.body.chicken_fillets,
    wings: req.body.wings,
    double_brest: req.body.double_brest,
    chicken_thighs: req.body.chicken_thighs,
    user: req.user.id,
  });

  res.status(200).json({ message: "Stock Posted" });
});


// @desc    Update chickenReport
// @route   Put /api/report/chicken/:id
// @access  Private
const updateDailyChickenReport = asyncHandler(async (req, res) => {
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


// @desc    Delete chickenReport
// @route   Delete /api/report/chicken/:id
// @access  Private
const deleteDailyChickenReport = asyncHandler(async (req, res) => {
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
    getDailyChickenReports,
    createDailyChickenReport,
    updateDailyChickenReport,
    deleteDailyChickenReport,
}