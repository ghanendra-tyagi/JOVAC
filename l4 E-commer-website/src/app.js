const express = require("express")
const indexrouter = require("./router/index.router")
const productrouter = require("./router/product.router")
const path = require("path")
const app = express()


app.set("view engine","ejs")
app.set("views",path.join(__dirname , "views"))

app.use(express.static(path.join(__dirname , "../public")))

app.use("/", indexrouter)
app.use("/products", productrouter)

module.exports = app