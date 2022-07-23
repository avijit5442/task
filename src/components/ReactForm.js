import {useFormik } from "formik"
import React from 'react'
import * as yup from "yup"

export default function ReactForm() {
    const formik=useFormik({
        initialValues:{
            FullName:"",
            UserName:"",
            Email:"",
            Phone:0,
            password:"",
            Cpwd:'',
            Register:'',
            Reset:'',
        },
        validationSchema:yup.object({
            FullName:yup.string()
                        .required("Enter Your FullName"),
            UserName:yup.string()
                        .required("Enter Your UserName"),
            Email:yup.string()
                      .required("Enter Email")
                      .email("Enter Valid Email"),
            Phone:yup.number()  
                     .required("Enter Your Phone Number")
                     .min(10),
            password:yup.string()
                        .required("Please Enter Your Password")
                        .min(8,"password must be minimum of 8 characters"),
            Cpwd:yup.string()
                    .required("Please Confirm Your Password")
                    .test(function(value){
                        return this.parent.password==value 
                    }),
            Register:yup.boolean() 
                        .required("please accept terms and conditions"),    
            Reset:yup.string
                     .required("Values set to default",function(values){return values.innerHTML=''})
                    
        }),
        onSubmit:values=>{
        alert(JSON.stringify(values))
        },
        
    })

  return (
    <div>
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>
                    <dd>FullName</dd>
                    <dd><input type="text"{...formik.getFieldProps("FullName")}/></dd>
                    <dd className="text-danger">{formik.errors.FullName}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>UserName</dd>
                    <dd><input type="text"{...formik.getFieldProps("UserName")}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>Email</dd>
                    <dd><input type="text"{...formik.getFieldProps("Email")}/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>Phone Number</dd>
                    <dd><input type="number"{...formik.getFieldProps("Phone")}/></dd>
                    <dd className="text-danger">{formik.errors.Phone}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>Password</dd>
                    <dd><input type="password"{...formik.getFieldProps("password")}/></dd>
                    <dd className="text-danger">{formik.errors.password}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>Confirm Password</dd>
                    <dd><input type="password"{...formik.getFieldProps("Cpwd")}/></dd>
                    <dd className="text-danger">{formik.errors.Cpwd}</dd>
                </dt>
            </dl>
            <dl>
                <dt>
                    <dd>
                        <input {...formik.getFieldProps("Register")} type="checkbox"/>Agree to Terms and Conditions
                    </dd>
                    <dd className="text-danger">{formik.errors.Register}</dd>
                </dt>
            </dl>
            <button className="btn btn-success">Register for Event</button>
            <dl>
                <dt>
                    <dd>
                        <button {...formik.getFieldProps("Reset")} className="btn btn-danger btn-lg my-2 mx-4">Reset</button> 
                    </dd>
                </dt>
              </dl> ++
            </form>


        </div>
    </div>
  )
}
//Have to work on reset button