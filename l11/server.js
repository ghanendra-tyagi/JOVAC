const app = require("./src/app")
const connect = require("./src/database/db")
let port = 4000

app.listen(port,()=>{

    console.log("server is started on port on ",port)
    connect()

})