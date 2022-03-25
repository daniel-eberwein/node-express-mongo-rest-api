const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // connect to db
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
