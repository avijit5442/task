//Export express,cors,mongodb
var express=require("express")
var cors=require("cors")
var mongoClient=require("mongodb").MongoClient
//establish connection with database 
var connectionString="mongodb://127.0.0.1:27017"
//define app with express
var app=express()
//to avoid request forgery or cors issues
app.use(cors())
//To allow to receive Data from url
app.use(express.urlencoded({
    extended:true
}))
//To convert posted data in JSON format 
app.use(express.json())
//here app to get request=getusers which takes request and response(to push data)
app.get("/getusers",(request,response)=>{
     //error(to check if there any error) and clientObject(to store the get data from getusers )
    mongoClient.connect(connectionString,(error,clientObject)=>{ 
        if(!error){
            //getting data from reactdb to clientObject
            var database=clientObject.db("reactdb")
            //read data from collection
            database.collection("tblusers").find({}).toArray((error,documents)=>{
                if(!error){
                     //store in documents 
                    response.send(documents)
                }
            })
        }
    })
});

app.post("/registerusers",(request,response)=>{
    var userdetails={
        UserId:request.body.UserId,
        UserName:request.body.UserName,
        Password:request.body.Password,
        Age:parseInt(request.body.Age),
        Mobile:request.body.Mobile,
        Subscribed:request.body.Subscribed
    }
    mongoClient.connect(connectionString,(error,clientObject)=>{
        if(!error){
          var database=clientObject.db("reactdb")
          database.collection("tblusers").insertOne(userdetails,(error,response)=>{
            if(!error){
                console.log("Record inserted successfully")
            }
          })
        }
    })
})
/*
app.get("/getcategories",(req,res)=>{
    mongoClient.connect(connectionString,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("reactdb")
            database.collection("tblCategories").find({}).toArray((error,documents)=>{
                if(!error){
                    res.send(documents)
                }
            })
        }
    })
})

app.get("/getproducts",(req,res)=>{
    mongoClient.connect(connectionString,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("reactdb")
            database.collection("tblproducts").find({}).toArray((error,documents)=>{
                if(!error){
                    res.send(documents)
                }
            })
        }
    })
})

app.get("/getproduct/:id",(req,res)=>{
    var productId=parseInt(req.params.id)
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
          clientObj.db("reactdb").collection("tblproducts").find({id:productId}).toArray((err,documents)=>{
            if(!err){
                res.send(documents)
                console.log(`getproduct/id`)
            }
        })  
        }
        
    })
})



app.get("/getTravelUsers",(req,res)=>{
  mongoClient.connect(connectionString,(err,ClientObj)=>{
    if(!err){
        ClientObj.db("reactdb").collection("travelUsers").find({}).toArray((error,documents)=>{
            if(!error){
                res.send(documents)
            }
        })
    }
  })  
})

app.post("/registerTravelUsers",(req,res)=>{
    var userDetails={
        UserName:req.body.UserName,
        Password:req.body.Password,
        Age:parseInt(req.body.Age),
        Mobile:req.body.Mobile
    }
    mongoClient.connect(connectionString,(err,ClientObject)=>{
        if(!err){
            ClientObject.db("reactdb").collection("travelUsers").insertOne(userDetails,(err,res)=>{
                if(!err){
                    console.log("Inserted")
                }
            })
        }
    })
})

app.get("/seereviews",(req,res)=>{
    mongoClient.connect(connectionString,(err,ClientObj)=>{
      if(!err){
          ClientObj.db("reactdb").collection("travelReviews").find({}).toArray((error,documents)=>{
              if(!error){
                  res.send(documents)
              }
          })
      }
    })  
  })

app.post("/reviews",(req,res)=>{
    var userDetails={
        City:req.body.City,
        Experience:req.body.Experience,
        Satisfaction:req.body.Age,
        Recomendation:req.body.Recomendation,
        Feedback:req.body.Feedback,
        Image:req.body.Image
    }
    mongoClient.connect(connectionString,(err,ClientObject)=>{
        if(!err){
            ClientObject.db("reactdb").collection("travelReviews").insertOne(userDetails,(err,res)=>{
                if(!err){
                    console.log("Inserted")
                }
            })
        }
    })
})


app.get("/getlist",(req,res)=>{
    mongoClient.connect(connectionString,(error,ClientObject)=>{
        if(!error){
            ClientObject.db("reactdb").collection("todolist").find({}).toArray((error,documents)=>{
                if(!error){
                    res.send(documents)
                }
            })
        }
    })
})

app.post("/submitlist",(req,res)=>{
    var list={
        Name:req.body.Name,
        ReminderName:req.body.ReminderName
    }
    mongoClient.connect(connectionString,(error,ClientObject)=>{
        if(!error){
            ClientObject.db("reactdb").collection("todolist").insertOne(list,(error,response)=>{
                if(!error){
                    console.log("List inserted")
                }
            })
        }
    })
})
*/
app.post("/postproject",(req,res)=>{
    let details={
        Contributor:req.body.Contributor,
        Project:req.body.Project,
        Time:req.body.Time,
        Description:req.body.Description,
        Link:req.body.Link,
    }
    mongoClient.connect(connectionString,(error,ClientObject)=>{
        if(!error){
            ClientObject.db("reactdb").collection("tblprojects").insertOne(details,(error,response)=>{
                if(!error){
                    console.log("Project Details inserted")
                }
            })
        }
    })
})

app.get("/getprojects",(request,response)=>{
    mongoClient.connect(connectionString,(error,ClientObject)=>{
        if(!error){
            ClientObject.db("reactdb").collection("tblprojects").find({}).toArray((request,documents)=>{
                if(!error){
                    response.send(documents)
                }
            })
        }
    })
    
})

app.listen(9400)
console.log("server started http://127.0.0.1:9400")