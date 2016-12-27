var bodyParser=require('body-parser');
var leaveDao=require('../dao/leaveDao');
// for post methods to parse body
var urlencodedParser=bodyParser.urlencoded({extended:false});




module.exports=function(app){

  app.get('/api/leave_detail/',function(req,res){
  var leaveDetails=[];
  leaveDetails=leaveDao.getLeaveDetails();
  console.log(leaveDetails);
  res.writeHead('200',{'Content-type':'application/json'});
  res.end(JSON.stringify(leaveDetails));
});

app.post('/api/leave_detail/:id',urlencodedParser,function(req,res){
var empId=req.params.id;
leaveDao.addEmployeeLeaveDetails(empId);
res.writeHead('200',{'Content-type':'application/json'});
res.end(JSON.stringify(leaveDetails));
});

app.delete('/api/leave_detail/:id',urlencodedParser,function(req,res){
var empId=req.params.id;
leaveDao.deleteEmployeeLeaveDetails(empId);
res.writeHead('200',{'Content-type':'application/json'});
res.end(JSON.stringify(leaveDetails));
});




app.get('/api/leave_detail/:id',function(req,res){

var empId=req.params.id;

var leaveDetail=leaveDao.getLeaveDetailsByEmployeeId(empId);

res.writeHead('200',{'Content-type':'application/json'});
res.end(JSON.stringify(leaveDetail));
});

app.post('/api/leave_application/:id',urlencodedParser,function(req,res){

    var empId=req.params.id;
    var dateOfLeave=req.body.dateOfLeave;
    var leaveType=req.body.leaveType;
    leaveDao.applyleave(empId,dateOfLeave,leaveType);
});

app.get('/api/leave_application/:id',urlencodedParser,function(req,res){

    var empId=req.params.id;

    var appliedLeaves=leaveDao.getAppliedLeaves(empId);
});

app.delete('/api/leave_application/:id',urlencodedParser,function(req,res){

    var empId=req.params.id;
    var dateOfLeave=req.query.dateOfLeave;
    var appliedLeaves=leaveDao.deleteAppliedLeaves(empId,dateOfLeave);
});



app.get('/api/leave_action/:id',function(req,res){

var empId=req.params.id;
var dateOfLeave=req.query.dateOfLeave;
var isApproved=req.query.isApproved;
leaveDao.approveOrReject(empId,dateOfLeave,isApproved);
});


};
