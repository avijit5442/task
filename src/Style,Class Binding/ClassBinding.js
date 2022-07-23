import React from "react";
import { useState } from "react";
export default function ClassBinding (){
  const [theme,setTheme]=useState()
   function handleThemeChange(e){
    if(e.target.checked==true){
        setTheme('bg-dark text-white')
    }
    else{
        setTheme('bg-light text-black')
    }

   }
  
    return(
    <div className="container" >  
<div className={theme}>
   <input onChange={handleThemeChange} type="checkbox"/>
</div>
    
    </div>
   )
   }
//why onClick doesn't work here ?