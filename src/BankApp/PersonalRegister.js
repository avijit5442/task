import React from 'react'

export default function PersonalRegister() {
  return (
    <>
    <h2 style={{textDecoration:"underline"}}>Personal Register</h2>
    <dl>
     <dt>FirstName</dt>
     <dd><input type="text"/></dd>
     <dt>LastName</dt>
     <dd><input type="text"/></dd>
     <dt>Mobile</dt>
     <dd><input type="text"/></dd>
     <dt>E-mail</dt>
     <dd><input type="text"/></dd>
     <dt>Age</dt>
     <dd><input type="text"/></dd>
     <dt>UserName</dt>
     <dd><input type="text"/></dd>
     <dt>Password</dt>
     <dd><input type="password"/></dd>
     <button className='btn btn-success'>Register</button>
    </dl>
    </>
  )
}
