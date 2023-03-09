const express = require('express')
const router = express.Router()
const { getReports, createReport, updateReport, deleteReport } = require('../handlers/reportHandler')

// router.get("/", getReports);
// router.post("/", createReport);
// router.put("/:id", updateReport);
// router.delete("/:id", deleteReport);

router.route('/').get(getReports).post(createReport);
router.route('/:id').put(updateReport).delete(deleteReport);

module.exports = router