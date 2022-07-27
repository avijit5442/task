import { useState,useEffect } from "react"
import axios from "axios"
export default function FetchNasaApi(){
const [details,setdetails]=useState([])
  axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
  .then((response)=>{
         setdetails(response.data.photos)
         console.log(details)
  })
    return(
        <>
         <div>
            
                <dl>
                    {details.map(detail=>
                    <>
                    <dt>image Name : {detail.id}</dt>
                    </>
                    )
                    
                    }
                </dl>
            
         </div>
        </>
    )
}