import {useNavigate,Link} from "react-router-dom";  
import { useFormik } from "formik" ;
import {useState} from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function TravelRegister(){
 
  var navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      UserName:"",
      Password:"",
      Age:0,
      Mobile:"",
    },
    onSubmit:values=>{
          axios.post("http://127.0.0.1:9400/registerTravelUsers",values)
          navigate("/login")
    }
  })
    return(
        <div className='text-center'>
            <h2 className="text-danger">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>Choose User Name</dt>
            <dd><input type="text" onChange={formik.handleChange} value={formik.values.UserName} name="UserName"/></dd>
            <dt>Password</dt>
            <dd><input type="password"onChange={formik.handleChange} value={formik.values.Password} name="Password"/></dd>
            <dt>Age</dt>
            <dd><input type="number"onChange={formik.handleChange} value={formik.values.Age} name="Age"/></dd>
            <dt>Mobile</dt>
            <dd><input type="text"onChange={formik.handleChange} value={formik.values.Mobile} name="Mobile"/></dd>
            <button className='btn btn-success' >Register</button>
          </dl>
          <br/>
          <Link to='/login' className="text-danger">Go to Login</Link>
        </form>
        </div>
    )
}