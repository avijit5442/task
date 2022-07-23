import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function TravelMainPage() {
  function menu(){
    let span=document.querySelector("span");
    span.style.display="none"
   }
  return (
    <>
    <h1 className="text-center text-success">Travel-Star</h1>
    <div className='row'>
        
    <div className='col-10'>
    <img className='mx-2' src={require("./Beaches_1.webp")} />
    </div>
    <div className='col-2'>
        <Link to="menu"><span className="glyphicon glyphicon-menu-hamburger" onClick={menu}><i className="bi bi-menu-button" style={{fontSize:"30px",float:"right",marginRight:"10px"}}></i></span></Link>
        <Outlet/>
    </div>
    </div>
    
     
    </>
  )
}
