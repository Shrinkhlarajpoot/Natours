const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
app.use(express.json()); //middleware to get data from the req since express do not provide it
// middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
  console.log('Hello from the middleware😇');
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports=app;
