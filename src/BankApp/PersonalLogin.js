import React from 'react'
import {Link, Outlet} from "react-router-dom"
export default function PersonalLogin() {
  return (
    <>
    <h2 style={{textDecoration:"underline",fontFamily:"cursive"}}>Personal Login</h2>
    <dl>
        <dt>UserName/Mobile</dt>
        <dd><input type="text"/></dd>
        <dt>Password</dt>
        <dd><input type="password"/></dd>
        <Link to="Pdashboard"><button className='btn btn-success'>Login</button></Link>
    </dl>
    <hr/>
    <div className='text-danger' style={{float:"left"}}><Outlet/></div>
    </>
  )
}
