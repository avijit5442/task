import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function PersonalHome() {
  return (
    <div className='container'>
        <h2>Personal Banking</h2>
        <ul className='list-unstyled'>
          <li><Link to="Plogin">Login</Link></li>
          <li><Link to="Pregister">Register</Link></li>
        </ul>
      <hr/>
      <div className='text-center text-danger'><Outlet/></div>
    </div>
  )
}
 