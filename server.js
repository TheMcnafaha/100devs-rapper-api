const express=require(`express`)
const app=express()

const PORT=8000

app.get(`/`,(req,res)=>{
    res.sendFile(__dirname+`/html/index.html`)
})





app.listen(PORT,_=>{
console.log(`online`)
})