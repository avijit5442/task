import { useEffect } from "react";
import React from 'react'
import { useState } from "react";

export function SuccessComponent() {
  useEffect(()=>{
     alert("success will mount")
     alert("success will update")
     return(()=>{alert("success will Unmount")})
     
  },[])
  return (
    <div className="text-success">Success</div>
  )
}
export function ErrorComponent() {
  useEffect(()=>{
    alert("ErrorComponent will mount")
    alert("ErrorComponent will update")
    return(()=>{
      alert("Error Component Will Unmount")
    })
  })
  return (
    <div className="text-danger">Declined</div>
  )
}
export default function UseEffectHookDemo() {
  const [msg,setMsg]=useState("");
function handleSubmit(){
  setMsg(<SuccessComponent/>)
}
function handleBack(){
  setMsg(<ErrorComponent/>)
}
  return (
    <div className="container-fluid">
     <button className="btn btn-primary" onClick={handleSubmit}>Proceed</button>&nbsp;
     <button className="btn btn-primary" onClick={handleBack}>Go back</button>
     <div>{msg}</div>
    </div>
  )
}
