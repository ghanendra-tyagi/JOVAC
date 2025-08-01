// setTimeout(()=>{
//     console.log("apple");
// },4000);

// setTimeout(()=>{
//     console.log("mango");
// },6000);

// setTimeout(()=>{
//     console.log("banana");
// },2000);

// setTimeout(()=>{
//     console.log("grapes");
// },2100);

// setTimeout(()=>{
//     console.log("orange");
// },1000)


/// Align with call back


// function striver(callback){
//     console.log("striver");
//     setTimeout(callback,1000);
// }

// function animal(callback){
//     console.log("animal ");
//     setTimeout(callback,1000);
// }

// function Starters(callback){
//     console.log(" Starter ");
//     setTimeout(callback,1000);
// }

// function Drinks(callback){
//     console.log(" Drinks ");
//     setTimeout(callback,6000);
// }

// function finsh(callback){
//     console.log("finish");
//     setTimeout(callback,1000);
// }

// function payBill(){
//     console.log("Paying the Bill");
// }


// striver(()=>{
//     animal(()=>{
//         Starters(()=>{
//             Drinks(()=>{
//                 finish(()=>{
//                     payBill();
//                 })
//             })
//         })
//     })
// })

// console.log("END OF THE DAy");


// MICRO VS MACRO

// console.log("Program Start");

// setTimeout(()=>{
//     console.log("I am SetTimeout");
// },2000);
// 
// fetch("https://dummyjson.com/products").then(function productDet(){
    // console.log("DATA : SOMETHING");
// });


// // Higher Order Function

// const data1 = [2,5,3,6]

// const data2 = [5,7,43,7]

// const calculateCube = function (x){
//     let output = [];
//     for (let i=0; i<x.length;i++){
//         output.push(x[i]*x[i]*x[i]);
//     }
//     return output;
// }

// console.log(calculateCube(data1));
// // console.log(calculateCube(data2));


// const calculateHalf = function (data){
//     let output =[]
//     for (let i = 0; i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// console.log(calculateHalf(data1));
// console.log(calculateHalf(data2));

// const doubleData = function (data){
//     return data*data;
// }

// const calculate = function (data, logic){
//     let output = [];
//     for (let i =0;i<data.length;i++){
//         output.push(logic(data[i]));
//     }
//     return output;

// }

// console.log(calculate(data1,doubleData));


// MAP :

// const arr = [5,1,4,6];

//Double = [10,2,8,12]

//Triple = [15,3,12,18]


// function double(x){
//     return x*2
// }

// function triple(x){
//     return x*3
// }

// const output = arr.map(double);

// console.log(output);

// const output1 = arr.map(triple);

// console.log(output1);

// function double(x){
//     return x*2
// }


// Array.prototype.calculate = function (logic){
//     let output = []
//     for (let i =0; i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// } 

// const arr1 = [1,2,3,4]
// const arr2 = [4,3,2,1]
// const output1 = arr1.calculate(double);
// console.log(output1);

// const output2 = arr2.calculate(double);
// console.log(output2);



// const arr =[2,3,4,5,6,7,8]

// function isOdd(x){
    // return x%2
// }
// 
// const output = arr.filter(isOdd);

// console.log(output);