const signup = require('../Controllers/AuthController')

const router = require('express').Router()

router.post('/login',(req,res)=>{

    res.send("login successfully")
})

// router.post('/signup',(req,res)=>{

//     res.send("signup successfully")
// })

router.post('/signup',signup)

module.exports = router
