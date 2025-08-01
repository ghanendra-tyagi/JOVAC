const express = require("express")
const userRouter = require("./routes/user.route")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/api/users", userRouter)

module.exports = app