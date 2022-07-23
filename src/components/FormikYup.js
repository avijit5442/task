import { useFormik } from "formik";
import * as yup from "yup"
import React from 'react'

export default function FormikYup() {
  const formik= useFormik({
   initialValues:{
    Name:'',
    Password:'',
   },
   validationSchema:yup.object({
    Name:yup.string().required("Name is required"),
    Password:yup.string().required("password is required")
    }),
    onSubmit:values=>alert(JSON.stringify(values))
  })
  return (
    <div className="container">FormikYup
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd><input type="text" {...formik.getFieldProps("Name")} ></input></dd>
          <dd>{formik.errors.Name}</dd>
          <dt>Password</dt>
          <dd><input type="password"{...formik.getFieldProps("Password")}></input></dd>
          <dd>{formik.errors.Password}</dd>
          <button className="btn btn-primary" type="submit">Enter</button>
        </dl>
      </form>
    </div>
  )
}
