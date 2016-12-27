

var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
//url to mongo database server
var url = 'mongodb://localhost:27017/test';
console.log('found');

var leaveDetails=[];
module.exports.getLeaveDetails=function(){

mongoClient.connect(url, function(err, db) {

  console.log('in getLeaveDetails');
    if(err===null)
    {
    var cursor=db.collection('leave_detail').find();

    cursor.each(function(err,doc){
      if(doc!=null)
      {

        leaveDetails.push(doc);

      }
      else {
          db.close();

      }
    });
  }
  else {
    console.log(err);
  }
});
return leaveDetails;
};




var getLeaveDetailsByEmployeeId1=function(db,empId,callback)
{

  var doc=db.collection('leave_detail').findOne({"empId":empId}).then(function(doc){
  if(doc!=null)
  {


    callback(doc);
  }
  else {
    console.log("Sorry no employee found");
  }
});
};

var leaveDetail;
module.exports.getLeaveDetailsByEmployeeId=function(empId){






mongoClient.connect(url, function(err, db,empId) {



  console.log('in getLeaveDetails');
    if(err===null)
    {
      getLeaveDetailsByEmployeeId1(db,empId,function(doc){

        leaveDetail=doc;

      db.close();
      });
    }
      else {
        console.log(err);
      }

    




    });

  console.log(leaveDetail);
    return leaveDetail;

  };
