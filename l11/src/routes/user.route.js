// const express = require("express");
// const usermodel = require("../models/user.model");
// const router = express.Router();
// 
// router.get("/", function (req, res) {
  // res.send("HOME PAGE");
// });
// 
// router.get("/about", function (req, res) {
  // res.send("HOME about PAGE");
// });

// router.post("/ragister", async function (req, res) {
  // const { username, email, password } = req.body;
// 
  //  if(!username){
    // return res.json({message:"username is requid "})
  //  }
  //  if(!email){
    // return res.json({message:"email is requid"})
  //  }
// 
    // if(!password){
  // return res.json({message:"password is requid"})
//  }
// 
// const user = await usermodel.find({email:email});
// console.log(user);
// 
// if(user){
  // return res.json({message : "email is already exist"})
// }
// 

///// their is two method to print this 
///// first is this 
  // const user = new usermodel({
  // username,
  // email,
  // password
  // })
  // console.log(user);
  
  // await user.save()
// res.send("register succesfully",user)
// })
///// secound is this

  // await usermodel.create({
    // username,
    // email,
    // password,
  // });
////////
  // res.json({message :"ragister succss"},user)
// });
// 
// module.exports = router;
//

////////////////////////////////////////////////
const express = require("express")
const usermodel = require("../models/user.model")
const router = express.Router()

router.get("/",function (req, res) {
    res.send("home page")
})

router.get("/about",function (req, res) {
    res.send("about page")
})
router.post("/register",async function (req, res) {
   const { username , email , password } = req.body
    console.log(username);
    console.log(email);
    console.log(password);
    
    if(!username){
        return res.json({message : "username is required"})
    }

    if(!email){
        return res.json({message : "email is required"})
    }
    if(!password){
        return res.json({message : "password is required"})
    }

    let user = await usermodel.findOne({ email: email });
    console.log(user);
    
    if(user){
        return res.json({message : "email is already exist"})
    }



    // const user = new userModel({
    //     username,
    //     email,
    //     password
    // })

    // console.log(user);
    
    // await user.save()


    user = await usermodel.create({
        username,
        email,
        password
    })

    

    res.json({message : "register successfully" , user })

})



module.exports = router