// @desc    Get Reports
// @route   Get /api/reports
// @access  Private
const getReports = (req, res) => {
    res.status(200).json({ message: "Get Reports" });
}

// @desc    Create Report
// @route   Post /api/report
// @access  Private
const createReport = (req, res) => {
    res.status(200).json({ message: "Create Report" });
}

// @desc    GUpdate Reports
// @route   Put /api/report/:id
// @access  Private
const updateReport = (req, res) => {
    res.status(200).json({ message: `Update Report ${req.params.id}` });
}

// @desc    Delete Reports
// @route   Delete /api/report:/id
// @access  Private
const deleteReport = (req, res) => {
    res.status(200).json({ message: `Delete Report ${req.params.id}` });
}

module.exports = {
    getReports,
    createReport,
    updateReport,
    deleteReport,
}