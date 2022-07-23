import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
export  default function GiveReviewDashboard(){
    const formik=useFormik({
        initialValues:{
            City:"",
            Experience:"",
            Satisfaction:"",
            Recomendation:"",
            Feedback:"",
            Image:"",
        },
        onSubmit:values=>{
            axios.post("http://127.0.0.1/9400/reviews",values)
            console.log(values)
        }

    })
   return(
        <>
        <Link to="review"></Link>
          <h2 className="text-center text-primary">Give review</h2>
          <hr/>
          
          <h4 className="container-fluid">Give review about Destination,service,tour etc...</h4>
          <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>Destination/s you liked most</dt>
                <dd><input type="text" name="City" onChange={formik.handleChange} value={formik.values.City}/></dd>
                <dt>Tour Experience</dt>
                <dd><input type="text" name="Experience" onChange={formik.handleChange} value={formik.values.Experience}/></dd>
                <dt>Are you satisfied with our Service</dt>
                <dd><input type="text" name="Satisfaction" onChange={formik.handleChange} value={formik.values.Satisfaction}/></dd>
                <dt>Will you recommend about us to your Friend and relatives ?</dt>
                <select name="Recomendation"onChange={formik.handleChange} checked={formik.values.Recomendation}>
                    <option>yes</option>
                    <option>No</option>
                </select>    
                <dt>Feedback-What did you liked about our tour and service ?</dt>
                <dd><input type="text"name="Feedback" onChange={formik.handleChange} value={formik.values.Feedback}/></dd>
                <dt>Upload snap</dt>
                <dd><input type="file"name="Image" onChange={formik.handleChange} value={formik.values.Image}/></dd>
                <dd><button className="btn btn-primary">Submit</button></dd>
            </dl>
          </form>
          </div>
        </>
   )

   
}

