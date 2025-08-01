console.log("hello everyone this is lecture no six")

//throttling in javascript

function throttle(func,limit){
    let lastcall = 0 ;
    return function(...args){
        const now = Date.now();
        if(now - lastcall >= limit){
            lastcall
        }
    }

}
function handleresize(){
    console.log("resize window",new Date())
}
handleresize();
const throttleonresize = throttle(handleresize,1000);

window.addEventListener("resize",throttleonresize)