require('dotenv').config()
const express = require('express')

const morgan = require('morgan')


const app = express()

app.use(morgan('dev'))
app.use('/', require('./routes/'))

const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${PORT}`))