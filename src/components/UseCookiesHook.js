import {useState,useEffect} from 'react'
import {useCookies} from "react-cookie"
export default function UseCookiesHook() {
    const [cookies,setCookie,removeCookie]=useCookies(["name","password"])
    const[userDetails,setUserDetails]=useState({
        UserName:"",
        Password:'',
    })
    function handleUser(e){
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password
        })
    }
    function handlePwd(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value
        })
    }
    function registerUser(){
        setCookie("name",userDetails.UserName,{path:"/",expires:new Date("2024-2-25 14:00 ")})
        setCookie("password",userDetails.Password,{path:"/",expires:new Date("2024-5-12")})
    }
    function signOutUser(){
        removeCookie("name")
        removeCookie("password")
    }
  return (
    <div>
        <dl>
            <dt>UserName</dt>
            <dd><input type="text" onChange={handleUser}/></dd>
            <dt>Password</dt>
            <dd><input type="password" onChange={handlePwd}/></dd>
        </dl>
        <button onClick={registerUser}>register</button>
        <button onClick={signOutUser}>Sign Out</button>
        Hello {cookies.name}
    </div>
  )
}
