import UsePascalCase from "../CustomHooks/UsePascalCase"
import { useState } from "react"
   export default function TextBoxDemo(){
   const [text, setText] = useState("");
   function handleOnInputEntry(e){
      setText(e.target.value)
    }
    var pascal=UsePascalCase(text)
    return(
       <>
       <textarea onChange={handleOnInputEntry}></textarea>
       <span>{pascal}</span>
       </>
    )
   }