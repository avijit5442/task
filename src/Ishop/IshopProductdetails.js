import { useParams,Outlet } from 'react-router-dom'
import {useState,useEffect} from "react"
import axios from "axios"
export default function IshopProductdetails() {
    const [product,setProduct]=useState([])
    var params=useParams()
    useEffect(()=>{
      let ID=parseInt(params.id)
         axios.get(`http://localhost:9400/getproduct/${ID}`)
         .then(response=>{
          setProduct(response.data)
         })
    },[])
  return (
    <div> 
          <h2>Product Details</h2>
          <p>{product[0].title}</p>
          <button className='btn btn-danger'>Add to cart</button>
    </div>
  )
}