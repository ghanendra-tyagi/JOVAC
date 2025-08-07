const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/gla")

    .then(()=>{
        console.log('database is connected successfully');
    })
    .catch((err)=>{
        console.log(err);
        
    })
}



module.exports = connect