import {useFormik } from "formik"

export default function FormikBindingValidation() {
    function validationForm(userDetails){
        const errors={};
        if(userDetails.firstName==""){
            errors.firstName="Enter Your FirstName"
        }
        if(userDetails.lastName==""){
            errors.lastName="Enter Your LastName"
        }
        if(userDetails.password==""){
            errors.password="Enter Your Password" 
        }
        else if(userDetails.password.length<=4){    
            errors.password="password is too short"
        }
        else if(userDetails.password.match(/(?=.*[A-Z])\w{4,10}/)){
            errors.password="password is strong"
        }
        if(userDetails.destination==""){
            errors.destination="Choose at least one destination"
        }
        if(userDetails.phone==""){
            errors.phone="Choose your phone number"
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            password:'',
            email:'',
            phone:'',
            gender:'',
            destination:'',
            stay:""
        },
        onSubmit:values=>{
            alert(JSON.stringify(values))
        },
        validate:validationForm
    })
  return (
    <div >FormikBinding
    <fieldset style={{textAlign:"center",backgroundColor:"burlywood",Width:"350px",marginLeft:"600px",marginRight:"550px",height:"420px",borderRadius:"10px"}}>
        <legend>Reservation Form</legend>
        <form onSubmit={formik.handleSubmit}>
            <table>
                <tr>
            <td><label>First Name : </label></td>
            <td><input type="text"value={formik.values.firstName} onChange={formik.handleChange}name="firstName"/></td>
            <td className="text-danger">{formik.errors.firstName}</td>
                </tr> 
                <tr>
            <td><label>Last Name :</label></td>
            <td><input type="text" value={formik.values.lastName}  onChange={formik.handleChange}name="lastName"/></td>
            <td className="text-danger">{formik.errors.lastName}</td>
                </tr>
                <tr>
            <td><label>Password:</label></td>
            <td><input type="password" value={formik.values.password} onChange={formik.handleChange}name="password"/></td>
            <td className="text-danger">{formik.errors.password}</td>
           </tr>
           <tr>
            <td><label>Email</label></td>
            <td><input type="email" value={formik.values.email} onChange={formik.handleChange} name="email"/></td>
           </tr>
            <tr>
            <td><label>Phone Number</label></td>
            <td><input type="number" name="phone" value={formik.values.phone} onChange={formik.handleChange} maxLength="10"/></td>
            <td className="text-danger">{formik.errors.phone}</td>
            </tr>
            <tr>
            <td><label>Address</label></td>
            <td><textarea  value={formik.values.address} onChange={formik.handleChange} placeholder="Enter Your Address" name="address"></textarea> </td>
            </tr>
            <td><label>Gender:</label></td>
            <td colSpan="1">
            <input type="radio" name="gender" alt={formik.values.gender} onChange={formik.handleChange} value="male" />
            <label>Male</label>
            <input type="radio" name="gender" alt={formik.values.gender} onChange={formik.handleChange} value="Female"/>
            <label>Female</label>
            </td>
            <tr>
                <td><label>select Destination</label></td>
                <td>
                    <label>Goa</label>&nbsp;
                    <input type="checkbox" name="destination" alt={formik.values.destination} onChange={formik.handleChange} value="Goa"/>&nbsp;&nbsp;
                    <label>Shimla</label>&nbsp;
                    <input type="checkbox" name="destination" alt={formik.values.destination} onChange={formik.handleChange} value="Shimla"/>&nbsp;&nbsp;
                    <label>UK</label>&nbsp;
                    <input type="checkbox" name="destination" alt={formik.values.destination} onChange={formik.handleChange} value="UK"/>
                </td>
                <td className="text-danger">{formik.errors.destination}</td>
            </tr>
            <tr>
            <td>Select stay : </td>
            <td><select value={formik.values.stay} onChange={formik.handleChange} name="stay">
                <option>1 Day</option>
                <option>2 Days</option>
                <option>3 Days</option>
                <option>4 Days</option>
                <option>5 Days</option>
            </select></td>
            <td className="text-danger">{formik.errors.stay}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit"/>
                </td>
            </tr>
        </table>
        </form>
    </fieldset>
    </div>
  )
}