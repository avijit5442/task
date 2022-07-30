import React from 'react'
import axios from "axios"
import {useFormik} from "formik"
import {Link,useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react'
export default function MealLogin() {
    const [users,setusers]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:9400/getuser")
        .then((response)=>{
               setusers(response.data)
               
        })
    },[])
    
    const formik=useFormik({
        initialValues:{
           Mobile:"",
           Password:"",
        },
        onSubmit:values=>{
        for (var details of users){
                  if(details.Mobile==values.Mobile && details.Password==values.Password){
                    navigate("/dashboard")
                  }
                  else{
                    navigate("/Register")
                  }
        }
        }
      })
  return (
    <div className='d-flex justify-content-center allign-items-center text-center main'>
        <div className='d-flex bg-danger' style={{flexDirection:"column",borderRadius:"20px"}}>
           <h2 className='text-success'>My Mess</h2>
           <div style={{height:"650px",width:"300px"}}>
            <button className='mx-4 px-4 h3'>Meal consumer</button>
            <small><i className="bi bi-toggle-on text-danger"></i></small>
            <br/>
            <form onSubmit={formik.handleSubmit}>
              <dt><input onChange={formik.handleChange} value={formik.values.Mobile} name="Mobile" type="text" placeholder='Your Mobile number'/></dt>
              <br/>
              <dd><input onChange={formik.handleChange} value={formik.values.Password} name="Password" className='text-center' type="text" placeholder='Password'/></dd>
              <button className='btn btn-success'>Login</button>
          </form>
          <Link to="/register">Register</Link>
           </div>
        </div>
    </div>
  )
}
