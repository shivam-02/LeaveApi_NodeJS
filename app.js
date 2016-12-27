var express=require('express');
var leaveController=require('./controller/leaveController');


var app=express();

leaveController(app);



app.listen(4000);
console.log("Listening on port 4000....");
