import React from 'react'
import { useFormik } from 'formik'
export default function FormikBinding () {
    function ErrorsMsg(values){
        const errors={};
        if(values.Name.length===0){
            errors.Name="Enter Name"
        }
        if(values.Number=="") {
            errors.Number = "Age Required";
        } 
        else if(isNaN(values.Number)){
            errors.Number = "Age must be a Number";
        }
        return errors
    }
    const formik=useFormik(
        {
            initialValues:{
                Name:'',
                Number:'',
                Password:'',
            },
            onSubmit:values=>alert(JSON.stringify(values)),
            validate:ErrorsMsg,
        }
   )
  return (
    <div className='container' >FormikBinding
    <form onSubmit={formik.handleSubmit}>
        <div className='Form-group'>
            <dl>
            <dt><label>UserName</label></dt>
            <dd><input name="Name" value={formik.values.Name}type="text"onChange={formik.handleChange} className="form-control"></input></dd>
            <small>{formik.errors.Name}</small>
            <dt><label>Number</label></dt>
            <dd><input type="text" name="Number" value={formik.values.Number} onChange={formik.handleChange}className="form-control"></input></dd>
            <small>{formik.errors.Number}</small>
            <dt><label>Password</label></dt>
            <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange}      className="form-control"></input></dd>
            <small></small>
            <button className='btn btn-primary'type='submit'>Register</button>
            </dl>
        </div>
        </form>
    </div>
  )
}
