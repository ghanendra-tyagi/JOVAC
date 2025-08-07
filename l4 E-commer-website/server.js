const app = require("./src/app")
const connect = require("./src/db/db")

const port = 4000

app.listen(port,()=>{
    console.log('server is running on port no.' , port);
    connect()
})