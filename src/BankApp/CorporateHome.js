import React from 'react'
import{Link,Outlet} from "react-router-dom"
export default function CorporateHome() {
  return (
    <div className="container">
        <h2>Corporate Home</h2>
        <ul className='list-unstyled'>
            <li><Link to="Clogin">Login</Link></li>
            <li><Link to="Cregister">Register</Link></li>
        </ul>
        <hr/>
        <div className='text-center'><Outlet/></div>
    </div>
  )
}