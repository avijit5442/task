import {Link} from "react-router-dom"
import { useFormik } from "formik"
import axios from "axios"
export default function ToDoIndex(){
    const formik=useFormik({
        initialValues:{
            Name:"",
            ReminderName:"",
        },
        onSubmit:values=>{
            console.log(values)
            axios.post("http://127.0.0.1:9400/submitlist",values);
            document.getElementById("t1" ).value=""
            document.getElementById("t2" ).value=""
        }
    })
    
    return(
        <>
        <h2 className="mx-4">Enter To-do list</h2>
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <textarea id="t1" name="Name" onChange={formik.handleChange} value={formik.values.Name}className="m-4" placeholder="Enter your To do list,With date,here" style={{width:"80%",height:"200px"}}></textarea>
                <button className="text-danger bg-dark btn-lg">Submit</button>
            </form>
        </div>
        <h2 className="mx-4">Enter Reminders</h2>
        <div className="container">
           <form onSubmit={formik.handleSubmit}>
            <textarea id="t2" name="ReminderName" onChange={formik.handleChange} value={formik.values.ReminderNameName}className="m-4" placeholder="Enter your Reminder,Meetings,appointments,etc..." style={{width:"80%",height:"200px"}}></textarea>
            <button className="text-danger bg-dark btn-lg">Submit</button>
           </form>
        </div>
        
        <hr/>
        <div className="container d-flex justify-content-between">
        <Link to="todolist">
                    <button className="btn btn-success" style={{width:"300px"}}>Your to do list</button>
        </Link>
        <Link to="/reminder">
            <button className="btn btn-success"style={{width:"300px"}}>Reminders & Meetings</button>
        </Link>
        
        </div>
        </>
    )
}