const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/newapp');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("mongoDb connection error",err);
  }
};

module.exports = connectDB;