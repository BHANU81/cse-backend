const Http = require('http');
const fs = require("fs/promises")
const port = 3000;
const server = Http.createServer(async(req,res)=>
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.writeHead(200,{'Content-Type': 'text/html'});
    const readdata=await fs.readFile("./home.html","utf-8")
    res.end(readdata)
})

server.listen(port,()=>console.log(`server startede at ${port}`))
