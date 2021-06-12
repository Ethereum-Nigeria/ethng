const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    connected: true,
    message: 'now live'
  })
})

module.exports = router