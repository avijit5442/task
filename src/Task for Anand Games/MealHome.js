import React from 'react'
import {Link} from "react-router-dom"
export default function MealHome() {
  return (
    <div>
        <div className='d-flex justify-content-center allign-items-center text-center main'>
        <div className='d-flex bg-danger' style={{flexDirection:"column",borderRadius:"20px"}}>
           <h2 className='text-success'>My Mess</h2>
           <div style={{height:"650px",width:"300px"}}>
            <Link to="/register"><button className='bg-warning m-4  w-50'>Register</button></Link>
            <Link to="/login"><button className='bg-warning w-50'>Login</button></Link>
            <div>
              <div className='move'>

              </div>
            </div>
           </div>
        </div>
    </div>
    </div>
  )
}
