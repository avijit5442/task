import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function NriHome() {
  return (
    <div className='container'>
        <h2>NRI Banking</h2>
      <ul className='list-unstyled'>
        <li><Link to="Nlogin">Login</Link></li>
        <li><Link to="Nregister">Register</Link></li>
      </ul>
      <hr/>
      <div className='text-center'><Outlet/></div>
    </div>
  )
}
