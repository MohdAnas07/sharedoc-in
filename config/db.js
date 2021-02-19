// DATABASE CONFIGURATION ----------------->>>>>>>>>>>>>>>>>>>>>>>>>
require('dotenv').config(); //For imprting all variable in this module from that

const mongoose = require('mongoose');


function connectDB() {
    // { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true }
    // Database Connection 
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("DataBase connected.");
    }).catch((err) => {
        console.log("Connection Failed.");
    })
}

module.exports = connectDB;