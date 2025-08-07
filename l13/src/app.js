const express =require("express")
const authRouter = require("../src/router/auth.router")
const app = express()

app.use((req,res,next)=>{
console.log('request aayi aur middleware chala');
next()
})

app.use("/api/auth", authRouter)


module.exports = app