const mongoose = require("mongoose");

const MONGODBURI = process.env.MONGODB_URI;

// FUNCTION TO CREATE DATABASE CONNECTIVITY
async function createDbConnection() {
  try {
    const response = await mongoose.connect(MONGODBURI);
    console.log("connection established");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  createDbConnection,
};
