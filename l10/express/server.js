 /// this is all about express

 const express = require("express")

 const app = express()

app.get("/",(req,res)=>{
    console.log('yaha requist aai');
    res.send("home rout")
    
})
app.post("/",(req,res)=>{
    res.send("post route")
    
})
const port = 6000;
 app.listen(port,function(){
    console.log('server started',port);
 })