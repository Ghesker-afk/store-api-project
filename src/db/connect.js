const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;