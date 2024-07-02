const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRouter')

require('dotenv').config();
require('./Models/db')


app.use(express.json())

const PORT = process.env.PORT || 5500


app.use('/auth',AuthRouter)



app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))