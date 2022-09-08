

var express=require("express")
var cors=require("cors")
var mongoClient=require("mongodb").MongoClient 
var connectionString="mongodb://127.0.0.1:27017"
var app=express()
app.use(cors())
app.use(express.urlencoded({
    extended:true
})) 
app.use(express.json())
app.get("/getusers",(request,response)=>{
    mongoClient.connect(connectionString,(error,clientObject)=>{ 
        if(!error){
            var database=clientObject.db("reactdb")
            database.collection("users").find({}).toArray((error,documents)=>{
                if(!error){
                    response.send(documents)
                }
            })
        }
    })
});
app.post("/registerusers",(request,response)=>{
    var userdetails={
        UserName:request.body.UserName,
        Age:parseInt(request.body.Age),
        Mobile:request.body.Mobile,
        Password:request.body.Password,
    }
    mongoClient.connect(connectionString,(error,clientObject)=>{
        if(!error){
          var database=clientObject.db("reactdb")
          database.collection("users").insertOne(userdetails,(error,response)=>{
            if(!error){
                console.log("Record inserted successfully")
            }
          })
        }
    })
})
app.listen(9000)
console.log("server started")