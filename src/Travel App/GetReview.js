import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function GetReview() {
  const[details,setDetails]=useState([])

    axios.request("https://localhost:9400/seereviews")
         .then((response)=>{
              setDetails(response.data)
              console.log(response.data)
         })

  return (
    <div className='container-fluid'>
       <h1 className="text-danger">see Reviews from our users</h1>
       <hr/>
{
   details.map(items=>
    <div>
          <h4 className='text-primary'>{items.City}</h4>
          <p>{items.Feedback}</p>
          <p>{items.Satisfaction}</p>
          <img src={items.Image} height="200px" width="200px"/>
    </div>
)
}
    </div>          
  )
}
