require('dotenv').config()
const express = require('express')

const morgan = require('morgan')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/', require('./routes/'))

const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))