var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
require('./config/config');

var indexRouter = require('./routes/routes');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit:"200mb"}))
app.use(bodyParser.urlencoded({extended: true,limit:'200mb'}))


app.use('', indexRouter);
// app.use('/users', usersRouter);


const models = require('./models');
  models.sequelize.authenticate().then(()=>{
    console.log('connected to sql database:sequelize');
  }).catch((err) => {
    console.log('unable to connect to sql database:sequelize',err.message);
  });
  models.sequelize.sync({alter:true});
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
