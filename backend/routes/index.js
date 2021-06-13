const express = require('express')
const router = express.Router()


router.post('/contact', async (req, res) => {
  
    const body = await req.body
    const {name, email, message } = body
    if(name === '' || email === '' || message === '') {
      res.json({
        validationError: true,
        message: 'fields cannot be left blank'
      })
      console.log('fields empty')
      return
    } else {
      try {
        res.json({
          name: name,
          email: email, 
          message: message
        })
        console.log(name, email, message)
      } catch (err) {
        res.json(err)
        
      }
    }
    
  
})

module.exports = router