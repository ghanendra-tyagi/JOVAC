const app = require("./src/app")
const connect = require("./src/db/db")
const port = 6000;

app.listen(port,()=>{
    connect()
    console.log('server started', port);
})
