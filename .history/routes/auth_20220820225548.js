const express = require('express')
const passport = require('../config/passport')
const router = express.Router()


//@DESC Auth with Google
//@route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))



//@desc Google auth callback
//@route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res
})

module.exports = router