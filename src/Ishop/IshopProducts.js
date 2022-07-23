import React from 'react'
import { Link, useParams,Outlet } from 'react-router-dom'
import {useState,useEffect} from "react"
import axios from "axios"
import IshopProductdetails from './IshopProductdetails'
export default function Products() {
  const[category,setcategory]=useState()
  const[products,setProducts]=useState([])
  var params=useParams()
  useEffect(()=>{
           setcategory(params.category)
           axios.get("http://localhost:9400/getproducts")
           .then(response=>{
              setProducts(response.data)
           })
  },[])

  return (
    <div>
        <h2 className='text-primary'>{category}</h2>
        {
            products.filter(item=>item.category==category).map(product=>
     
              <div>
              <Link to={"/details/"+ product.id}><h5>{product.title}</h5></Link>
              <img src={product.image} height="250px" width="250px"/>
              </div>
            )
        }
        <hr/>
        <Outlet/>
        </div>
   
  )
}
