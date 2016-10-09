import _ from 'lodash';
import Pomodoro from './pomodoro_model.js';


export default function(app){
    var _pomodoro = [];

    app.post('/pomodoro', function(req,res){
        console.log(req.body);
        var newPomodoro = new Pomodoro(req.body.pomodoro);
        newPomodoro.save(function(err){
            if(err){
                throw err;
            };
            if(!err)
            {
            res.header("Content-Type", "application/json");    
            res.header("Access-Control-Allow-Origin", "*");
            res.json({info:'pomodoro created successfully', data:newPomodoro});
            res.end("CACHE MANIFEST");
            }
        });
    });

    app.get('/pomodoro', function(req,res){
        Pomodoro.find(function(err, pomodoros){
            if(err){
                res.json({info:'error finding pomodoros'}) 
            };
            res.header("Content-Type", "application/json");    
            res.header("Access-Control-Allow-Origin", "*");
            res.json({info: 'pomodoros found', data:pomodoros});
            res.end("CACHE MANIFEST");
        });
    });

    app.get('/pomodoro/:pomodoroId', function(req,res){
        Pomodoro.findById(req.params.pomodoroId, function(err, pomodoro){
            if(err){
                res.json({info:'error finding pomodoro'})
            };
            res.header("Content-Type", "application/json");    
            res.header("Access-Control-Allow-Origin", "*");
            res.json({info: 'pomodoro found', data:pomodoro});
            res.end("CACHE MANIFEST");
        });
    });

    app.options('/*', function(req,res){
        res.header("Content-Type", "application/json");    
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'POST, GET, DELETE, OPTIONS, PUT')
        res.header("Access-Control-Allow-Headers", 'Content-Type')
        res.end("CACHE MANIFEST");
    });

    

    app.delete('/pomodoro/:pomodoroId', function(req,res){
        Pomodoro.findById(req.params.pomodoroId, function(err, pomodoro){
            if(err){
                res.json({info:'error finding pomodoros'})
            };
            pomodoro.remove();
            res.header("Content-Type", "application/json");    
            res.header("Access-Control-Allow-Origin", "*");
            res.json({info: 'pomodoro deleted'});
            res.end("CACHE MANIFEST");
        });
    });

    app.put('/pomodoro/:pomodoroId', function(req,res){
        console.log('Received request');
        console.log(req.body);
        var updatedPomodoro = new Pomodoro(req.body.pomodoro);
        Pomodoro.findById(req.params.pomodoroId, function(err, pomodoro){
            if(err){
                res.json({info:'error finding pomodoros'})
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
            pomodoro.save(function(err){
            if(err){
                console.log("in error");
                res.header("Content-Type", "text/json");    
                res.header("Access-Control-Allow-Origin", "*");
                res.json({info:'pomodoro created successfully', data:pomodoro});
                res.end("CACHE MANIFEST");
                res.json({info:'error during pomodoro create', error:err});
            };
            if(!err)
            {
            console.log('Responding with:');
            console.log(pomodoro);
            console.log("----------------------")
            res.header("Content-Type", "application/json");    
            res.header("Access-Control-Allow-Origin", "*");
            res.json({info:'pomodoro updated successfully', data:pomodoro});
            res.end("CACHE MANIFEST");
            }
            });
        });
    });
};