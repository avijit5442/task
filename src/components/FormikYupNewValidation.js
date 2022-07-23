import { useFormik,Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from "yup"
export default function FormikYupNewValidation() {
    
  return (
    <div className='container-fluid'>
    <Formik 
         initialValues={{
             UserName:'',
             Age:'',
             password:''

         } 
        }
        validationSchema={yup.object({
            UserName:yup.string().required(),
            Age:yup.number().required(),
            password:yup.string().required()
        })
    }
        onSubmit={
            values=>
                {
                    alert(JSON.stringify(values))
                }
        }
    >   
    {props=>
        <Form>
             {
        <div>
            <dl>
                <dt>UserName :</dt>
                <dd><Field type="text" name="UserName"></Field></dd>
                <dd className='text-danger'><ErrorMessage name="UserName"></ErrorMessage></dd>
                <dt>Age : </dt>
                <dd><Field type="text" name="Age"></Field></dd>
                <dd className='text-danger'><ErrorMessage name="Age"></ErrorMessage></dd>
                <dt>Password</dt>
                <dd><Field type="password" name="password"></Field></dd>
                <dd className='text-danger'><ErrorMessage name="password"></ErrorMessage></dd>
             </dl>
         <button disabled={(props.isValid==true)?false:true}>Register</button>
        </div>
            }
        </Form>
        }
    </Formik>
    </div>
  )
}



