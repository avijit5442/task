import { Link } from "react-router-dom"
export default function TasksMainPage(){
    return(
        <div className="container">
          <Link to="/login"><button className="btn btn-success">Login</button></Link>
          <Link to="/signup"><button className="btn btn-info mx-4">SignUp</button></Link>
        </div>
    )
}