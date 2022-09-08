import {useCookies} from "react-cookie"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function TasksDashboard(){
    const [name, setName] = useState()
    const [cookies,setCookies,removeCookies]=useCookies()
    useEffect(()=>{
        setName(cookies["Name"])
    },[])
    const handleSignOut=()=>{
        removeCookies("Name")
    }
    return(
          <div>
          <h2 className="text-success">Welcome</h2>
          <p className="text-center">Hello <strong>{name}</strong></p>
          <Link to="/login"><p onClick={handleSignOut}>Signout</p></Link>
          </div>
    )
}