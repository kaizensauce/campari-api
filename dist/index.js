// var express = require('express');
"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _pomodoro_routes = require('./pomodoro_routes');

var _pomodoro_routes2 = _interopRequireDefault(_pomodoro_routes);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//mongoose.connect('mongodb://localhost/pomodoros');
//mongodb://heroku_00msbsnf:2tle7klvn5952bngv7mg5178rl@ds033966.mlab.com:33966/heroku_00msbsnf/pomodoros
//_mongoose2.default.connect('mongodb://mongodb:27017/pomodoros');
_mongoose2.default.connect('mongodb://heroku_00msbsnf:2tle7klvn5952bngv7mg5178rl@ds033966.mlab.com:33966/heroku_00msbsnf/pomodoros');

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));

var pomodoroRoute = (0, _pomodoro_routes2.default)(app);

var server = app.listen(30003, function () {
    console.log('Server running at localhost:30003');
});
