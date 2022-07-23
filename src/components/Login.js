import "./Login.css";
import UseCaptcha from "../CustomHooks/UseCaptcha";
const Login=()=>{
    const code=UseCaptcha()
    return(
    <>
    <div className="LoginBox">
        <script src="indexJS.js"></script>
        <form action="http://localhost:7900/posts" method="post">
    <h2 className="user">User Login</h2>
    <hr></hr>
    <label className="in1" idname="user">User name</label>
    <output idname="userout"></output>
    <br></br>
    <input className="in1" type="text"></input>
    <br></br><br></br>
    <label className="in1">password</label>
    <br></br>
    <input className="in1" idname="pwd" type="password"></input>
    <output idname="pwdout"></output>
    <dd className="m-4">{code}</dd> 
    <input className="m-4" type="text" size="6"/>
    <br></br>
    <span className="text-warning d-flex justify-content-center align-items-center">Forgot password ?</span>
    <button idname="sub" className="btn btn-primary my-2 w-100 " type="button">Login</button>
    <span className="d-flex justify-content-center align-items-center">Don't have account?<h3><a className="text-decoration-none" href="https://www.google.com">Sign up</a></h3>here</span>
    </form>
    </div>
    </> 
    
)} 
export default Login;