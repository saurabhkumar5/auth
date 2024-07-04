
const jwt = require('jsonwebtoken')

const authenticated = (req,res,next)=>{

    const auth = req.headers['authorization']
    if(!auth){
        return res.status(401).json({message:'unauthorized jwt token is required'})
    }

    try {
         const decode = jwt.verify(auth,process.env.JWT_SECRET);
          
          req.user = decode;
          next()

    } catch (error) {
         return res.status(401).json({message:"try again"})
    }

}

module.exports = authenticated