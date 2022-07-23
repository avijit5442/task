import {useState, useEffect } from "react"
import {useFormik} from "formik"
import $ from "jquery"
export default function PushFormData(){
    const [users,setUsers]=useState([])
    const formik = useFormik({
      initialValues : {
          UserId:'',
          UserName:'',
          Password:'',
          Age:0,
          Mobile:'',
          Subscribed:true,
      },  
        onSubmit:values=>{
         $.ajax({
            method:"POST",
            url:"http://localhost:9400/registerusers",
            data:values
         })
        }
    })
  useEffect(()=>{
      $.ajax({
        method:"GET ",
        url:"http://localhost:9400/getusers",
        success:function(response){
           setUsers(response)
        }
      })      
  },[])
      return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile"/></dd>
                    <dt>Subscription</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.Subscribed} onChange={formik.handleChange}  name="Subscribed"/> Yes </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
    
}