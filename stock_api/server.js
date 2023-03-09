const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/reports', require('./routes/chickenRoutes'))
app.use('/api/reports', require('./routes/drinksRoutes'))

app.use(errorHandler)

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);