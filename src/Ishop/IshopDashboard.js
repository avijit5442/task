import {useCookies} from "react-cookie"
import { useState,useEffect } from "react";
import React from 'react'
import axios from "axios"
import {Link, useNavigate } from "react-router-dom";
export default function IshopDashboard() {
  const[cookie,setCookie,removeCookie]=useCookies();
  const[details,setDetails]=useState()
  const[categories,setCategories]=useState([])
  useEffect(()=>{
    if(cookie["userid"]==undefined){
      navigate("/login")
    }
    else{
       setDetails(cookie["userid"])
          axios.get("http://localhost:9400/getcategories")
         .then(response=>{
          setCategories(response.data)
         })
    }

  })
  const navigate=useNavigate()
  function handleSignOut(){
    removeCookie("userid")
    navigate("/login")
  }
  return (
 <div>
      <div className="text-success d-flex flex-wrap justify-content-between">
        <h2>Welcome to Dashboard</h2>
        <p>Hello {details}</p>
        <p style={{cursor:"pointer",color:"red"}} onClick={handleSignOut}>Sign out</p>
        
      </div>
      <h3>Categories are :</h3> 
      <dl>
      {
        categories.map(items=>
          
            <dd><Link to={"/product/"+ items.category}>{items.category.toUpperCase()}</Link></dd>
          )
      } 
      </dl>
</div>
  )
}
