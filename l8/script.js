// const a =require('../l8/maths')
// 
// console.log(a);
// 


// const fs = require("figlet");

/// how to use a figlet api//

// var figlet = require ("figlet")
// 
// 
// figlet("Ghanendra!!", function (err, data) {
//   if (err) {
    // console.log("Something went wrong...");
    // console.dir(err);
    // return;
//   }
//   console.log(data);
// });
// 

/////         Read a file ///////

// const fs = require('fs')

// fs.readFile("hindi.txt","utf8",(err,data)=>{
    // if(err){
        // console.log('err a raha h ',err);
        // 
    // }
    // console.log(data);
    // 
// })

///  write a file   /////
// 
// const fs = require('fs')

// fs.writeFile("write.txt","const a = 20",(err)=>{
    // if(err){
        // console.log('err  a gaya h ',err);
        // 
    // }
    // else{
        // console.log('file was created successfully');
        // 
    // }

// })

//  update a file ////
// 
// const fs = require('fs')
// 
// fs.appendFile('write.txt','/nhello tyagi',(err)=>{
    // if(err){
        // console.log('err a gaya h',err);
        // 
    // }else{
        // console.log('apend ho gaya h ');
        // 
    // }
// 
// })

/// delete a file //
// 
// const fs = require('fs')
// 
// fs.unlink("write.txt",(err)=>{
    // if(err){
        // console.log('err a gaya h ',err);
    // }
// })

/// rename a file 

// const fs = require('fs')
// 
// fs.rename('hinde.txt','hindi.txt',(err)=>{
    // if(err){
        // console.log('err a gaya h ',err);
    // }
    // else{
        // console.log('rename ho gai file');
        // 
    // }
// })


// how to created a folder
// 
// const fs = require('fs')
// 
// fs.mkdir('makefile',(err)=>{
    // if(err){
        // console.log('err a gaya h ',err);
        // 
    // }
    // else{
        // console.log('folder ban gaya h');
        // 
    // }
// })

// how to read a folder

// const fs = require('fs')

// fs.readdir('makefile',(err)=>{
//     if(err){
//         console.log('err a gaya h ',err);
        
//     }
//     else{
//         console.log('folder read ho gaya h');
        
//     }
// })


// 
// how to delete a folder  (when folder is empty)

// const fs = require('fs')

// fs.rmdir('makefile',(err)=>{
    // if(err){
        // console.log('err a gaya h ',err);
        
    // }
    // else{
        // console.log('folder delet ho gaya h')
        
    // }
// })


//how to delete a folder  (when folder is not empty)
// 
const fs = require('fs')
// 
fs.rmdir('makefile',{recursive : true},(err)=>{
    if(err){
        console.log('err a gaya h ',err);
        // 
    }
    else{
        console.log('folder delet ho gaya h')
        // 
    }
})