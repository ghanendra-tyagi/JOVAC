const mongoose = require("mongoose")
// const { type } = require("os")
// const { stringify } = require("querystring")

const userschema = new mongoose.Schema({

    username : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    password :{
        type : String,
        require : true
    }
})

const usermodel = mongoose.model("user",userschema)

module.exports  = usermodel