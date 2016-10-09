'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pomodoroSchema = _mongoose2.default.Schema({
    id: Number,
    startTime: Date,
    endTime: Date,
    completed: Boolean,
    timeLeft: Number,
    taskSummary: String,
    isRunning: Boolean,
    confirmationNeeded: Boolean,
    hasCompleted: Boolean
});

exports.default = _mongoose2.default.model('pomodoro', pomodoroSchema);