import { useState, useEffect } from "react"
export default function EventBindingDemoComponent(){
   const[UserName,setUserName]= useState()
   function handleOnChange(event){
    setUserName(event.target.value)
   }
   return(
    <>
    <div className="container">
      <input type="text" value={UserName} maxLength="10" onChange={handleOnChange}/>
      <br></br>
      <output>Hello , <strong className="text-success">{UserName} 
      </strong>Welcome to ShoppingEra</output>  
    </div>
    
    </>
   )
}