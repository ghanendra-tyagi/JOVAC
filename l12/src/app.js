const express = require("express")
const userRouter = require("./routes/user.routes")
const path = require("path")

const app = express()

///// conpansary line for boby set up
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//// conpansary line for ejs set up 
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

// to add css code file 
app.use(express.static(path.join(__dirname,"../public")))

app.use("/",userRouter)

module.exports = app
