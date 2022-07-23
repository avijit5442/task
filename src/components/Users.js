import {useState,useEffect} from "react";
import $ from "jquery"
export default function Users(){
    const[products,setProducts]=useState([])
    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://localhost:9400/getusers",
            success: function(response){
                 setProducts(response)
            }
        })
    },[])
return(
          <>
           <h3>user Details</h3>
          
            {
                products.map(user=>
                        <p>{user.UserId}</p>    
                    )
            }
          </>
          )
}