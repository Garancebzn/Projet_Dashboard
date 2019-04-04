var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var artistRouter = require('./routes/artist');
var albumRouter = require('./routes/album');
var titreRouter = require('./routes/titre');

mongoose.connect("mongodb://localhost:27017/dashboard", {useNewUrlParser:true});
mongoose.set('useCreateIndex', true);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/artist', artistRouter);
app.use('/album', albumRouter);
app.use('/titre', titreRouter);

module.exports = app;
