import express from 'express';
import logger from './config/logger.js';

import bodyParser from 'body-parser';
 

const app = express();

// Request logger middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Import Routes
 
import userRoute from './routes/users.js';
import productRoute from './routes/products.js';

app.use('/user', userRoute);
app.use('/product', productRoute);
//MIDDLEWARE
app.use('/user', () => {
    console.log('This is a middleware');
});

 
export default app;