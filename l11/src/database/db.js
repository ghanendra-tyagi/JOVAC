const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/gla")

    .then(()=>{
        console.log('mongoose is conneted ');
        
    })
    .catch((err)=>{
        console.log("err aya re",err);
        
    })
}

module.exports = connect
