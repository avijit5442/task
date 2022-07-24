import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
export default function BlogRegister(){
    return(
        <>
        <h2 className="text-danger text-center">Registration Form</h2>
         <Formik 
           initialValues={{
            Name:"",
            Mobile:'',
            Email:"",
            Age:'',
            Password:'',
           }}
           onSubmit={values=>{
            alert(JSON.stringify(values))
           }}
           validationSchema={yup.object({
            Name:yup.string().required(),
            Mobile:yup.number().required(),
            Email:yup.string().required().email(),
            Age:yup.number().required(),
            Password:yup.string().required()
           })}
           >
            <Form>

                <dl>
                    <dt>Name</dt>
                    <dd><Field className="h3" type="text" name="Name"/></dd>
                    <dd className="text-danger" ><ErrorMessage name="Name"></ErrorMessage></dd>
                    <dt>Mobile</dt>
                    <dd><Field  className="h3" type="number" name="Mobile"/></dd>
                    <dd className="text-danger"><ErrorMessage name="Mobile"></ErrorMessage></dd>
                    <dt>Email</dt>
                    <dd><Field className="h3" type="text" name="Email"/></dd>
                    <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                    <dt>Age</dt>
                    <dd><Field className="h3" type="number" name="Age"/></dd>
                    <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                    <dt>Choose Password</dt>
                    <dd><Field className="h3" type="password" name="Password"/></dd>
                    <dd className="text-danger"><ErrorMessage name="Password"></ErrorMessage></dd>
                    
                </dl>
              <button className="btn btn-success">Submit</button>
            </Form>
         </Formik>
        </>
    )
}