var app=require("express")();
const PORT=8000
app.listen(PORT,()=>console.log(`server started at ${PORT}`))
app.get("/applicants",(req,res)=>{
    res.send(`["applicant Name":"Avijit","surname":"Behera","Qualification":"MBA","Age":26,State:"Odisha"]`)
})
  