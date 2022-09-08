import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {useCookies} from "react-cookie"
export default function TasksSignUp() {
  const navigate=useNavigate()
    const [details,setdetails]=useState({UserName:"",Age:"",Mobile:'',Password:''})
    const [cookies,setCookies,removeCookies]=useCookies()
    const handleUserNameChange=(e)=>{
      setdetails({
        UserName:e.target.value,
        Age:details.Age,
        Mobile:details.Mobile,
        Password:details.Password,
      })
    }
    const handleAgeChange=(e)=>{
        setdetails({
          UserName:details.UserName,
          Age:e.target.value,
          Mobile:details.Mobile,
          Password:details.Password,
        })
      }
      const handleMobileChange=(e)=>{
        setdetails({
          UserName:details.UserName,
          Age:details.Age,
          Mobile:e.target.value,
          Password:details.Password,
        })
      }
      const handlePasswordChange=(e)=>{
        setdetails({
          UserName:details.UserName,
          Age:details.Age,
          Mobile:details.Mobile,
          Password:e.target.value,
        })
      }
    const handleSignUp=()=>{
        setCookies("UserName",details.UserName)
        setCookies("Age",details.Age)
        setCookies("Mobile",details.Mobile)
        setCookies("Password",details.Password)
    axios.post("http://localhost:9000/registerusers",details)
    navigate("/login")
    }
    
  return (
     <div className='text-center'>
        <form>
            <dl>
                <dt>UserName</dt>
                <dd><input onChange={handleUserNameChange} type="text"/></dd>
                <dt>Age</dt>
                <dd><input  onChange={handleAgeChange} type="text"/></dd>
                <dt>Mobile</dt>
                <dd><input  onChange={handleMobileChange} type="text"/></dd>
                <dt>Choose Password</dt>
                <dd><input  onChange={handlePasswordChange} type="password"/></dd>
                <dt><button onClick={handleSignUp} className='btn btn-success'>SignUp</button></dt>
                <dd><Link to="/login">Login</Link></dd>
            </dl>
        </form>
     </div>
  )
}
