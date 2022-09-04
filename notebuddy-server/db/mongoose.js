
const mongoose = require("mongoose");

if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

async function connectToDb(){
try{
    await mongoose.connect(process.env.NOTEBUDDY_MONGODB_URL);
    console.log("NoteBuddy DB connected!")
} catch (err){
    console.log(err);
}
}

module.exports = connectToDb;