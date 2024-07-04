const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config();
require('./Models/db')


app.use(express.json())

const PORT = process.env.PORT || 5500


app.use('/auth',AuthRouter);
app.use('/product',ProductRouter)



app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))