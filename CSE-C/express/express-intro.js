import express from "express";
const app=express();
const port=3001
app.get("/",(req,res)=>{
    res.send("welcome cse students")
})
app.get("/about",(req,res)=>
{
    res.send("this is about")
})
app.get("/api",(req,res)=>
{ try {
    const { name, rollno } = req.query;
    if(!name) {
        res.send({ status: 404, message: "Please enter a name" });
    }
    else {
        res.send(`welcome ${name} and your age is ${age}`);
    }
}   catch (error) {
    console.log(error.message)
}
});

app.listen(port,()=>{console.log(`server started at ${port}`)})