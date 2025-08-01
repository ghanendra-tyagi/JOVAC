const app = require("./src/app")
const connect = require("./src/database/bd")
const port = 5000

app.listen(port,()=>{
    console.log("server is running on port :",port);
    connect()
})