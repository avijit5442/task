import {useState,useEffect} from 'react'
import { useFormik } from 'formik'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import { useCookies } from 'react-cookie'

export default function IshopLogin() {
  let navigate=useNavigate();
  const [users,setUsers]=useState();
  const [cookies,setCookie,removeCookie]=useCookies();
  const formik=useFormik({
    initialValues:{
      UserId:'',
      Password:''
    },
    onSubmit:values=>{
      for(var user of users){

                   if(user.UserId==values.UserId && user.Password==values.Password){
                     setCookie("userid",user.UserId);
                     navigate("/dashboard")  ;
                     break; 
                    }
                    else{
                      navigate("/login")
                    }
                    }
    }
  })
  useEffect(()=>{
    axios.get("http://localhost:9400/getusers")
         .then(response=>{
          setUsers(response.data)
         })
  },[]);
  

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
        <dl>
            <dt>UserId</dt>
            <dd><input name="UserId" value={formik.values.UserId} onChange={formik.handleChange} type="text"/></dd>
            <dt>Password</dt>
            <dd><input  name="Password" value={formik.values.Password} onChange={formik.handleChange} type="password"/></dd>
            <button className='btn btn-success'>Login</button>
        </dl>
    </form>
    <br/>
    <Link to="/register">Register</Link>
    </div>
     )
}

