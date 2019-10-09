const express =require("express");
const port = process.env.PORT || 3002
const path =require("path");
const {main}=require("./app")

const app=express();
app.use(express.static(path.join(__dirname,"public")));

app.get("/weather", async (req,res)=>{
    let data = await main(req.query.location)
    res.send(data);
})

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})