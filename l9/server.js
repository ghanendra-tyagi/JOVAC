/// this is all about a host create 

const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("home route")
    }

    if(req.url ==="/about"){
        res.end("about page")
    }

    if(req.url === "/" && req.method === "POST"){
    res.end("home POST")
}

})

const PORT = 6050;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});