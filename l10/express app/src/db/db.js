const mongoose = require("mongoose")

const connect =()=>{
    mongoose.connect("mongodb://localhost:27017")
    // .than(()=>{
        console.log("database is connented successfully");
    // })
    // .catch((err)=>{
        // console.log(err);
    // })
}

module.exports = connect