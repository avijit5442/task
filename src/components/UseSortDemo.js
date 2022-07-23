import UseSort from "../CustomHooks/UseSort"
import { useState } from "react"
export default function UseSortDemo() {
  const[input,setInput]=useState("")
  
  function handleCopy(e){
    setInput(document.querySelector("textarea"))
  }
  var t=UseSort(input.value)
  return (
    <div> 
       <textarea id="input"></textarea>
       <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
       <div>{t}</div>
    </div>
  )
}
