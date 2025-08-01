const mongoose = require("mongoose");

const connectDB = () => {
  const DB_URL = process.env.DB_URL;
  mongoose
  
    .connect(
      DB_URL
    )
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
