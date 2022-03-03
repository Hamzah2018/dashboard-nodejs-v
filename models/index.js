const mongoose = require('mongoose');
// mongoose.connect();
//mongoose.connect(mongoose:local);
//const Db = 'mongodb://127.0.0.1:27017/dashboardPofile';
mongoose.connect('mongodb://localhost:27017/myProtfileDashboard',(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('you are connected');
  }
}
);
// mongoose.connect(Db, {
//     autoIndex: true,
//   })
//   .then(() => {
//     console.log('DB is connected -->');
//   });
  
module.exports = mongoose;