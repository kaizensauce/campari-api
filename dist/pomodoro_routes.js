'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    var _pomodoro = [];

    app.post('/pomodoro', function (req, res) {
        console.log(req.body);
        //var pomodoro = req.body;
        var newPomodoro = new _pomodoro_model2.default(req.body.pomodoro);
        //newPomodoro.taskSummary = pomodoro.taskSummary;
        newPomodoro.save(function (err) {
            if (err) {
                throw err;
                // console.log("in error");
                // res.header("Content-Type", "text/json");    
                // res.header("Access-Control-Allow-Origin", "*");
                // res.json({info:'pomodoro created successfully', data:newPomodoro});
                // res.end("CACHE MANIFEST");
                // res.json({info:'error during pomodoro create', error:err});
            };
            if (!err) {
                res.header("Content-Type", "application/json");
                res.header("Access-Control-Allow-Origin", "*");
                res.json({ info: 'pomodoro created successfully', data: newPomodoro });
                res.end("CACHE MANIFEST");
            }
        });
    });

    app.get('/pomodoro', function (req, res) {
        _pomodoro_model2.default.find(function (err, pomodoros) {
            if (err) {
                res.json({ info: 'error finding pomodoros' });
            };
            res.header("Content-Type", "application/json");
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ info: 'pomodoros found', data: pomodoros });
            res.end("CACHE MANIFEST");
        });
    });

    app.get('/pomodoro/:pomodoroId', function (req, res) {
        _pomodoro_model2.default.findById(req.params.pomodoroId, function (err, pomodoro) {
            if (err) {
                res.json({ info: 'error finding pomodoro' });
            };
            res.header("Content-Type", "application/json");
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ info: 'pomodoro found', data: pomodoro });
            res.end("CACHE MANIFEST");
        });
    });

    app.options('/*', function (req, res) {
        res.header("Content-Type", "application/json");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'POST, GET, DELETE, OPTIONS, PUT');
        res.header("Access-Control-Allow-Headers", 'Content-Type');
        //res.json({info: 'pomodoro found', data:pomodoro});
        res.end("CACHE MANIFEST");
    });

    // app.options('/pomodoro/:pomodoroId', function(req,res){
    //     res.header("Content-Type", "application/json");    
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Methods", 'POST, GET, DELETE, OPTIONS', 'PUT')
    //     res.header("Access-Control-Allow-Headers", 'Content-Type')
    //     //res.json({info: 'pomodoro found', data:pomodoro});
    //     res.end("CACHE MANIFEST");
    // });


    app.delete('/pomodoro/:pomodoroId', function (req, res) {
        _pomodoro_model2.default.findById(req.params.pomodoroId, function (err, pomodoro) {
            if (err) {
                res.json({ info: 'error finding pomodoros' });
            };
            pomodoro.remove();
            res.header("Content-Type", "application/json");
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ info: 'pomodoro deleted' });
            res.end("CACHE MANIFEST");
        });
    });

    app.put('/pomodoro/:pomodoroId', function (req, res) {
        console.log('Received request');
        console.log(req.body);
        var updatedPomodoro = new _pomodoro_model2.default(req.body.pomodoro);
        _pomodoro_model2.default.findById(req.params.pomodoroId, function (err, pomodoro) {
            if (err) {
                res.json({ info: 'error finding pomodoros' });
            };
            pomodoro.startTime = updatedPomodoro.startTime;
            pomodoro.endTime = updatedPomodoro.endTime;
            pomodoro.completed = updatedPomodoro.completed;
            pomodoro.secondsCompleted = updatedPomodoro.secondsCompleted;
            pomodoro.timeLeft = updatedPomodoro.timeLeft;
            pomodoro.taskSummary = updatedPomodoro.taskSummary;
            pomodoro.confirmationNeeded = updatedPomodoro.confirmationNeeded;
            pomodoro.isRunning = updatedPomodoro.isRunning;
            pomodoro.hasCompleted = updatedPomodoro.hasCompleted;
            pomodoro.save(function (err) {
                if (err) {
                    console.log("in error");
                    res.header("Content-Type", "text/json");
                    res.header("Access-Control-Allow-Origin", "*");
                    res.json({ info: 'pomodoro created successfully', data: pomodoro });
                    res.end("CACHE MANIFEST");
                    res.json({ info: 'error during pomodoro create', error: err });
                };
                if (!err) {
                    console.log('Responding with:');
                    console.log(pomodoro);
                    console.log("----------------------");
                    res.header("Content-Type", "application/json");
                    res.header("Access-Control-Allow-Origin", "*");
                    res.json({ info: 'pomodoro updated successfully', data: pomodoro });
                    res.end("CACHE MANIFEST");
                }
            });
        });
    });
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pomodoro_model = require('./pomodoro_model.js');

var _pomodoro_model2 = _interopRequireDefault(_pomodoro_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;