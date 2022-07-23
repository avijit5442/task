import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate,Link } from "react-router-dom";
import { useFormik } from 'formik';
export default function TravelLogin() {
  var navigate=useNavigate()
  const [regduser,setRegdUser]=useState([]);
  useEffect(()=>{
       axios.get("http://127.0.0.1:9400/getTravelUsers")
            .then((response)=>{
              setRegdUser(response.data)
            })
  },[]);

  const formik=useFormik({
    initialValues:{
      UserName:"",
      Password:'',
    },
    onSubmit:values=>{
      for(var user of regduser){
        if(user.UserName==values.UserName && user.Password==values.Password){
          navigate("/review");
          break;
        }
        else{
          navigate("/login")
        }
      }
    }
  });



  return (
    <div className='text-center'>
        <h2 className='text-danger'>Log in</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onChange={formik.handleChange} value={formik.values.UserName} name="UserName"/></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} value={formik.values.Password} name="Password"/></dd>
                <button className='btn btn-success'>Log in</button>
            </dl>
        </form>
            <Link to="/register">Don't have an accout  register here</Link>  
    </div>
  )
}
