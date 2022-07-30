import React from 'react'
import "./Meal.css"
import {useFormik} from "formik"
import axios from 'axios'
import{Link} from "react-router-dom"
export default function BookMeal() {
  const formik=useFormik({
    initialValues:{
      Name:'',
      Photo:'',
      Profession:'',
      Gender:'',
      Mobile:'',
      Email:'',
      Password:'',
      CPwd:'',
      Terms:true,
    },
    onSubmit:values=>{
      axios.post("http://localhost:9400/registeruser",values)
    }
  })
  return (
    <div className='d-flex justify-content-center allign-items-center text-center main'>
        <div className='d-flex bg-danger' style={{flexDirection:"column",borderRadius:"20px"}}>
           <h2 className='text-success'>My Mess</h2>
           <div style={{height:"650px",width:"300px"}}>
            <h3>Create Account</h3>
            <button className='mx-4 px-4 h3'>Meal consumer</button>
            <form onSubmit={formik.handleSubmit}>
            
          <div>
            <label htmlfor="image">
            <i className="bi bi-person-circle" style={{fontSize:"100px",borderRadius:"50px"}}></i>
            <input id="image" type="file" onChange={formik.handleChange} value={formik.values.Photo} name="Photo" accept='image/jpg'/>
            </label>
          </div>
          <dl>
            <dd><input name="Name" onChange={formik.handleChange} value={formik.values.Name
            } type="text" placeholder='Enter Your Name'/></dd>
          <dd><select onChange={formik.handleChange} value={formik.values.Profession} name="Profession">
              <option>Profession</option>
              <option>Student</option>
              <option>Bachelor</option>
              <option>Employee</option>
              <option>Business Owner</option>
              <option>Others</option>
              </select>
              <select onChange={formik.handleChange} value={formik.values.Gender} name="Gender" className='mx-2'style={{width:"38%"}}>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
              </dd>
              <dt><input onChange={formik.handleChange} value={formik.values.Mobile} name="Mobile" type="text" placeholder='Your Mobile number'/></dt>
              OR
              <dd><input onChange={formik.handleChange} value={formik.values.Email} name="Email" type="text" placeholder='Your Email'/></dd>
              <dd><input onChange={formik.handleChange} value={formik.values.Password} name="Password" className='text-center' type="text" placeholder='Choose Password'/></dd>
              <dd><input onChange={formik.handleChange} value={formik.values.CPwd} name="CPwd" className='text-center' type="text" placeholder='Confirm Password'/></dd>
              <dd className="form-switch"><input onChange={formik.handleChange} value={formik.values.Terms} name="Terms" className="form-check-input" type="checkbox" /> Agree to our Terms and condition </dd>
              <button className='btn btn-success'>Register</button>
              <br/>
              <Link to="/login">Already Have account.Sign in Now</Link>
          </dl>
          </form>
           </div>
        </div>

    </div>

  )
}
