const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
    console.log('home route');
    res.send("home router")
})

module.exports = router