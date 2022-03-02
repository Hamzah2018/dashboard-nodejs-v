const mongoose = require('mongoose');
const Db = 'mongodb://127.0.0.1:27017/dashboardPofile';
mongoose
  .connect(Db, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

module.exports = mongoose;