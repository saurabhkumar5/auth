const signup = require('../Controllers/AuthController')
const { signupValidation } = require('../Middleware/AuthValidation')

const router = require('express').Router()

router.post('/login',(req,res)=>{

    res.send("login successfully")
})

// router.post('/signup',(req,res)=>{

//     res.send("signup successfully")
// })

router.post('/signup',signupValidation ,signup)

module.exports = router
