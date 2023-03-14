const express = require('express')
const dotenv = require('dotenv').config()
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api-docs", swaggerUi.serve);
app.use('/api/reports', require('./routes/chickenRoutes'))
app.use('/api/reports', require('./routes/drinksRoutes'))
app.use('/api/reports', require('./routes/keyItemsRoutes'))
app.use('/api/restaurants', require('./routes/restaurantRoutes'))

app.use(errorHandler)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);