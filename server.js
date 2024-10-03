const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000
const db = require('./DataBase')
const SigninRouter = require('./Routes/SigninRouter')
const ContactRouter = require('./Routes/Contactrouter')
const BestSellingBooks = require('./Routes/BesrSellingBooksRouter')
const FeatureBooks = require('./Routes/FeatureBooksRouter')
const MostBooks = require('./Routes/MostBooksRouter')
const SellBooks = require('./Routes/SellBooksRouter')
const LoginRouter = require('./Routes/LoginRouter')


app.get('/',(req,res)=>{
    res.send("hello world")
});

app.use('/',SigninRouter);
app.use('/',LoginRouter);
app.use('/',ContactRouter);
app.use('/',BestSellingBooks)
app.use('/',FeatureBooks)
app.use('/',MostBooks)
app.use('/',SellBooks)

app.listen(PORT,()=>{
    console.log("server is running");
});