// var express = require('express');
"use strict";
import express from 'express';
import bodyParser from 'body-parser';
import pomodoroRoutes from './pomodoro_routes';

let app = express();

//import mongoose from 'mongoose';
//mongoose.connect('mongodb://localhost/pomodoros');
//mongoose.connect('mongodb://mongodb:27017/pomodoros');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

var pomodoroRoute = pomodoroRoutes(app);

var server = app.listen(30003, function(){
    console.log('Server running at localhost:30003');
});
