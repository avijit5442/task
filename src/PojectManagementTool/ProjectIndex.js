import {useState} from "react"
import { Formik,Form,Field,ErrorMessage } from "formik"
import * as yup from "yup"
import axios from "axios"
export default function ProjectIndex(){
    const [details,setDetails]=useState([])
    function submitProject(){
          fetch("http://localhost:9400/getprojects")
          .then((response)=>response.json())
          .then(data=>
            setDetails(data)
          )
    }
    function handleDelete(e){
           var ID=e.target.id;
           var f=details.filter((item)=>item._id!==ID)
           setDetails(f)
    }
    //How to edit from both UI & database ?
function handleSpeak(e){
        var name=e.target.id
        var speech=new SpeechSynthesisUtterance(); 
        speech.text=name
        window.speechSynthesis.speak(speech)    
  }
    return(
        <>
        <h2 className="container text-center text-success">Personal Project Management Tool</h2>
        <hr/>
        <div className="row">
          <Formik 
              initialValues={{
                Contributor:"",
                Project:'',
                Time:'',
                Description:'',
                Link:''
          }
          }
          validationSchema={yup.object({
            Contributor:yup.string().required(),
            Project:yup.string().required(),
            Date:yup.string().required(),
            Description:yup.string().required(),
            Link:yup.string().required()
          })}
          onSubmit={values=>
            {axios.post("http://localhost:9400/postproject",values)}
        }
          >
           <div className="col-4">
            <h2 className="text-center text-danger">Enter Project Details</h2>
            <Form className="container m-4 text-center">
                <dl>
                  <dt>Contributor's Name</dt>
                  <dd><Field type="text" name="Contributor"/></dd>
                  <dd><ErrorMessage name="Contributor"></ErrorMessage></dd>
                  <dt>Project Name</dt>
                  <dd><Field type="text" name="Project"/></dd>
                  <dd><ErrorMessage name="Project"></ErrorMessage></dd>
                  <dt>Date</dt>
                  <dd><Field type="date" name="Date"/></dd>
                  <dd><ErrorMessage name="Time"></ErrorMessage></dd>
                  <dt>Project Description</dt>
                  <dd><Field placeholder="Details like Components,achieved functionalities etc." type="text" name="Description"/></dd>
                  <dd><ErrorMessage name="Description"></ErrorMessage></dd>
                  <dt>Github Link</dt>
                  <dd><Field placeholder="Details like Components,achieved functionalities" type="text" name="Link"/></dd>
                  <dd><ErrorMessage name="Link"></ErrorMessage></dd>
                </dl>
                <button className="text-center btn btn-success">Submit</button>
            </Form>
           </div> 
           </Formik>
           <div className="col-8">
               <h2 className="text-center text-danger" style={{cursor:"pointer"}}onClick={submitProject}>Project Details</h2>
               <div className="overflow-auto" style={{height:'600px'}}>
               <div>
                  <table className="table table-bordered table-striped ">
                            <tr>
                              <th>Project Name</th>
                              <th>Contributor's Name</th>
                              <th>Date</th>
                              <th>Web link</th>
                              
                            </tr>
                  {   
                    details.map(project=> 
                        <>
                            <tr>
                              <td>{project.Project}</td>
                              <td><p>{project.Contributor}</p></td>
                              <td>{project.Date}</td>
                              <td><a href={project.Link}>{project.Link}</a></td>  
                              <button id={project._id} className="btn btn-danger m-2 btn-sm"onClick={handleDelete}>delete</button>
                              <button id={project._id} className="btn btn-danger m-2 btn-sm"onClick={handleDelete}>edit</button>
                              <i className="bi bi-volume-down-fill" id={project.Project} onClick={handleSpeak}></i>
                            </tr>
                        </>
                    )
                }
                </table>
               </div>
               </div>
           </div>
        </div>
        <hr/>
        <hr/>
        </>
    )
}