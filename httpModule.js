const http = require('http')

const server = http.createServer((req, res)=>{
    res.write("Creating first app in node");
    res.end()
})


server.listen(5000);