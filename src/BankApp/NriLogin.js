import React from 'react'
import {Link, Outlet} from "react-router-dom"
export default function NriLogin() {
  return (
    <>
    <h2 style={{textDecoration:"underline",fontFamily:"cursive"}}>NRI Login</h2>
    <dl>
        <dt>UserName/Mobile</dt>
        <dd><input type="text"/></dd>
        <dt>Password</dt>
        <dd><input type="password"/></dd>
        <Link to="Ndashboard"><button className='btn btn-success'>Login</button></Link>
    </dl>
    <hr/>
    <div className='text-danger'style={{float:"right"}}><Outlet/></div>
    </>
  )
}
