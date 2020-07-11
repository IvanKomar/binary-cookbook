const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB()

const recipes = require('./routes/recipes')
const versions = require('./routes/versions')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/recipes', recipes)
app.use('/api/versions', versions)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on  port ${PORT}`.yellow.bold))