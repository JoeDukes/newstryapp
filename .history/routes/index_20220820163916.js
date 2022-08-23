const express = require('express')
const router = express.Router()


//@DESC login / landing page
//@route GET /
router.get('/', (req, res) => {
    res.render('Login')
    
})


//@desc Dashboard
//@route GET / dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router