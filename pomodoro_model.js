import mongoose from 'mongoose';

var pomodoroSchema = mongoose.Schema({
    id:Number,
    startTime: Date,
    endTime: Date,
    completed: Boolean,
    timeLeft: Number,
    taskSummary: String,
    isRunning: Boolean,
    confirmationNeeded: Boolean,
    hasCompleted:Boolean
})

export default mongoose.model('pomodoro', pomodoroSchema); 