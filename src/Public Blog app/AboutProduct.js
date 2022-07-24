import { useState,useEffect } from "react"
import axios from "axios"
export default function AboutProduct(){
    const[about,setAbout]=useState([])
   useEffect(()=>{
       axios.get("https://fakestoreapi.com/products")
            .then((response)=>{
                setAbout(response.data)
                console.log(response.data)
            }
)
   },[])
 
    return(
        <>
         {
            about.map(items=>
                <>
                <h5>{items.title}</h5>
                <img src={items.image} height="200px" width="200px"/>
                <p className="text-success bi bi-star-fill">{items.rating.rate}</p>
                <p>{items.description}</p>
                <hr/>
                </>
                )
         }
        </>
    )
}