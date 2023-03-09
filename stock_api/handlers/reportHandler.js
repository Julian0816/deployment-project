const asyncHandler = require('express-async-handler')
const Report = require('../models/reportsModel')

// @desc    Get Reports
// @route   Get /api/reports
// @access  Private
const getReports = asyncHandler(async (req, res) => {
    const reports = await Report.find()

    res.status(200).json(reports);
});


// @desc    Create Report
// @route   Post /api/report
// @access  Private
const createReport = asyncHandler(async (req, res) => {
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
  });

  res.status(200).json({ message: "Stock Posted" });
});


// @desc    GUpdate Reports
// @route   Put /api/report/:id
// @access  Private
const updateReport = asyncHandler(async (req, res) => {
    const report = await Report.findById(req.params.id)

    if(!report) {
        res.status(400)
        throw new Error('Report not found')
    }
    
    const updatedReport =  await Report.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    res.status(200).json(updatedReport);
});


// @desc    Delete Reports
// @route   Delete /api/report:/id
// @access  Private
const deleteReport = asyncHandler(async (req, res) => {
    const report = await Report.findById(req.params.id);

    if (!report) {
      res.status(400);
      throw new Error("Report not found");
    }

    await Report.findById(req.params.id).findOneAndRemove()
    res.status(200).json({ id: req.params.id, message: `deleted` });
});

module.exports = {
    getReports,
    createReport,
    updateReport,
    deleteReport,
}