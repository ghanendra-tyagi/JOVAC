const express = require("express")
const usermodel = require("../model/user.modules")
const router = express.Router()

// router.get("/", (req,res)=>{
    // res.render("register",{tittle : "login page"}) //ye jo tittle h wo local host ka name hota h
// })

router.get("/", async(req,res)=>{

const users = await usermodel.find()
    console.log(users);
    
    res.render("home",{tittle : "home page",users })
})

router.get("/register",(req,res)=>{

    res.render("register",{tittle: " registerpage"})
})

router.post("/register", async(req,res)=>{
    console.log(req.body);
    
    const{name,email,image} = req.body
    // console.log('name',name);
    // console.log('email',email);
    // console.log('passward',passward);
    // console.log(req.query);
   const user = await usermodel.create({
         name : name,
         email : email,
         image : image
    })
    console.log(user);
    
    
    res.redirect("/register-successful")

})

router.get("/register-successful", (req,res)=>{

    res.render("registered",{tittle : "successful"})
})

module.exports = router