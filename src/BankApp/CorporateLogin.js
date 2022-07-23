import React from 'react'
import { Link,Outlet} from 'react-router-dom'
export default function CorporateLogin() {

  return (
    <>
    <h2 style={{textDecoration:"underline",fontFamily:"cursive"}}>Corporate Login</h2>
    <dl>
        <dt>UserName/Mobile</dt>
        <dd><input type="text"/></dd>
        <dt>Password</dt>
        <dd><input type="password"/></dd>
        <Link to="Cdashboard"><button className='btn btn-success'>Login</button></Link>
    </dl>
    <hr/>
      <div className='text-danger d-flex align-items-center justify-content-center'><Outlet/></div>
   </>
  ) 
}