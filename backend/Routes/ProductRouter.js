const authenticated = require('../Middleware/Auth')

const router = require('express').Router()


router.get('/',authenticated,(req,res)=>{
  
           console.log(req.user)
           res.status(200).json([
               {
                name:"samosa",
                price:25
               },
               {
                name:"rasgulla",
                price:30
               },
               {
                name:"gulabjaamun",
                price:25
               }
           ])
})

module.exports =router