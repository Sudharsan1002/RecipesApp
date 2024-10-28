const mongoose = require("mongoose")


const MONGODBURI = `mongodb://${process.env.HOSTNAME}:27017/recipes`;

// FUNCTION TO CREATE DATABASE CONNECTIVITY
async function createDbConnection() {
    try {
        const response=await mongoose.connect(MONGODBURI)
        console.log("connection established")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    createDbConnection
}