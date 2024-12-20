const mongoose = require('mongoose');
require('dotenv').config();
URL = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(URL);
        console.log("Connected to database");
    }
    catch(error){
        console.log("Error connecting to database", error);
    }
}

module.exports = connectDB;
