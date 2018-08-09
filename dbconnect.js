var mongoose = require ("mongoose");

module.exports=mongoose.connect('mongodb://localhost:27017/seller
1',function(err)
{
    if(err)
 throw err;

console.log("Database is connected");
});