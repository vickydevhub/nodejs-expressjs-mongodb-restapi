const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
 
app.use(bodyparser.urlencoded({ extended: true }))
//Import Routes
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');

app.use('/user', userRoute);
app.use('/product', productRoute);
//MIDDLEWARE
app.use('/user', () => {
    console.log('This is a middleware');
});

 
export default app;