const express = require("express")

const app = express()
// 
// app .get("/",(req,res)=>{
    // console.log(req.query);
    // const {name} = req.query 
    // console.log(name);
    // res.send("home route chal gaya")
// })
//////////////

// this is used to print the body data

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.post("/",(req,res)=>{
    console.log("body wala data",req.body);
    console.log(' ');
    
    console.log("query wala data",req.query);
    res.send("body route chal gaya")
})

/////////////////
// app.get("/about", (req,res)=>{
    // console.log(req.query)
    // res.send("about page")
// })

// app.get("/about/id", (req,res)=>{
    // console.log(req.params)
    // res.send("param wala route")
// })

// app.get("/about/:name",(req,res)=>{
    // const name = req.params.name
    // res.send('params me ${name} name aa raha hai')
// })

module.exports = app