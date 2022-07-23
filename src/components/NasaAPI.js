import { useState, useEffect } from "react";

export default function NasaAPI(){
     const [nat, setNat] = useState();

     useEffect(()=>{
        fetch("https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY")
        .then(response=> response.json())
        .then(data=>{
            setNat(data);
        })
     },[])

    return(
        <div className="container">
            <h2>Mars Photos</h2>
            <ul>
                {nat.map(me=>
                    <li>{me}</li>)}
            </ul>
        </div>
    )
}