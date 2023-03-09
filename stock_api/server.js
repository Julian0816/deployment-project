const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000


const app = express()

app.use('/api/reports', require('./routes/reportRoutes'))

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);