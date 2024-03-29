const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

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


//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
() => {
    console.log('connected to db');
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.listen(6000);

module.exports = app;