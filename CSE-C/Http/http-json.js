const http=require("http")
const users=[{
    id:1,
    name:'Bhanu',
    email:'Bhanu@gmail.com',
},
{
    id:2,
    name:'sher',
    email:'rrrhs@gmail.com',
},
{
    id:3,
    name:'dog',
    email:'dog@gmail.com',
}
]
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"})
    res.end(JSON.stringify(users)) //whenver we convert object to string we use json.stringify and for reverse we use json.parse
    
})
const port=3000
server.listen(port,()=>console.log(`new server started at ${port} `))