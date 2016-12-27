console.log(__dirname);

var l=require('./leaveDetailDao');

var ll=l();
console.log(ll.getLeaveDetails());
console.log(ll.getLeaveDetailsByEmployeeId(5));
