import {useState} from "react"
export default function UseStateHook(){
 const [items]=useState(["soap","bat","rice","TV","Refrigerator","Fan","chair"]);
 return(
    <div className="container">
        <ol>
            {
                items.map(i=>
                    <li className="list-unstyled" key={i}>{i}</li>)
            }
        </ol>
    </div>
)

}
