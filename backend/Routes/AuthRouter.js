const {signup,login} = require('../Controllers/AuthController')
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation')

const router = require('express').Router()

// router.post('/login',(req,res)=>{

//     res.send("login successfully")
// })

// router.post('/signup',(req,res)=>{

//     res.send("signup successfully")
// })

router.post('/login',loginValidation ,login)
router.post('/signup',signupValidation ,signup)

module.exports = router
