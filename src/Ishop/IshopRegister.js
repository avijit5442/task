import {Navigate,useNavigate,Link} from "react-router-dom"
import { useFormik } from 'formik' 
import axios from 'axios'

export default function IShopRegister() {
  const navigate=useNavigate()

  const formik=useFormik({
    initialValues:{
      UserId:'',
      UserName:"",
      Password:'',
      Age:0,
      Mobile:'',
      Subscribed:true,
    },
    onSubmit:values=>{
      axios.post("http://localhost:9400/registerusers",values)
      navigate("/login")
    }
  })
  return (
   
               
        <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>User Id</dt>
            <dd><input type="text" name="UserId" onChange={formik.handleChange} value={formik.values.UserId}/></dd>
            <dt>User Name</dt>
            <dd><input type="text"name="UserName" onChange={formik.handleChange} value={formik.values.UserName}/></dd>
            <dt>Password</dt>
            <dd><input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password}/></dd>
            <dt>Age</dt>
            <dd><input type="number" name="Age" onChange={formik.handleChange} value={formik.values.Age}/></dd>
            <dt>Mobile</dt>
            <dd><input type="text" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile}/></dd>
            <dd><input type="checkbox" name="Subscribed"onChange={formik.handleChange} checked={formik.values.Subscribed}/></dd>
            <button className='btn btn-success'>Register</button>
          </dl>
          <br/>
          <Link to='/login' className="text-danger">Go to Login</Link>
        </form>
       
      
   

  )
}