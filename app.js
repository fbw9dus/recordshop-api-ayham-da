/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/** INIT */
const app = express();

/** LOGGING */
app.use(logger('dev'));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Requested-With, Content-Type, Accept"
    )
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    console.log('the response will be sent by the next function ...');
    next()
    })

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);

/** EXPORT PATH */
module.exports = app;

