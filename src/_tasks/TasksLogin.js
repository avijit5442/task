import {Link,useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import {useCookies} from "react-cookie"
export default function TasksLogin() {
    const navigate=useNavigate()
    const [userdetails,setuserdetails]=useState({UserName:"",Password:""})
    const[details,setdetails]=useState([])
    const [cookies,setCookies,removeCookies]=useCookies()
    const handleUserNamechange=(e)=>{
        setuserdetails({
          UserName:e.target.value,
          Password:userdetails.Password
        })
      }
      const handlePasswordChange=(e)=>{
        setuserdetails({
            UserName:userdetails.UserName,
            Password:e.target.value
          })
      }
      const handleLogin=()=>{
        for(var users of details){
          if(userdetails.UserName==users.UserName && userdetails.Password==users.Password){
            alert("login successful")
            navigate("/dashboard")
            setCookies("Name",users.UserName);
            break;
        }
        else{
          navigate("/login")
        }
        }
        }
      useEffect(()=>{
        axios.get("http://localhost:9000/getusers")
        .then((response)=>{
          setdetails(response.data)
        })
      },[])
      return (
        <div className='text-center'>
            <form>
                <dl>
                    <dt>UserName</dt>
                    <dd><input onChange={handleUserNamechange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={handlePasswordChange} type="password"/></dd>
                    <dt><button onClick={handleLogin} className='btn btn-success'>Login</button></dt>
                    <dd><Link to="/signup">Sign Up Here</Link></dd>
                </dl>
                <br/>
            </form>
        </div>
      )
    }
  

