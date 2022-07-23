import React,{useState,useContext} from "react"
import {useCookies} from "react-cookie"
var createContextDetails=React.createContext(null)
export default function UseContextDemo(){
    const [userDetails,setUserDetails]=useState({
        UserName:"",
        Contact:"",
    })
    const[register,setRegister]=useState({
        UserName:"",
        Phone:''
    })
    const[BeforeDetails]=useState({
        UserName:"Doe",
        Contact:1234567890,
    })
    const[message,setMessage]=useState({
        Result:''
    })
    const[products,setProducts]=useState([])
    const[style,setStyle]=useState("")
    const [cookies,setCookie,removeCookie]=useCookies(["userName"])
    function handleUser(e){
        setUserDetails({
            UserName:e.target.value,
            Contact:userDetails.Contact
        })
    }
    function handleContact(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Contact:e.target.value
        })
        setCookie("userName",userDetails.UserName,{path:"/",expires:new Date("2034-21-11 10:22")})
    }
    function registerUser(){
        if(BeforeDetails.UserName==userDetails.UserName && userDetails.Contact==BeforeDetails.Contact){
            setMessage({Result:"Authenication Successful"})
            setStyle("text-success")
            setRegister({UserName:userDetails.UserName,
                         Phone:userDetails.Contact})
            fetch("https://fakestoreapi.com/products")
                    .then(response=>response.json())
                    .then(data=>{
                        setProducts(data)
                    })  
        }
        else{
            setMessage({Result:"Details Entered by you are invalid"})
            setStyle("text-danger")
            
        }
    }
    
    return(
        <createContextDetails.Provider value={register}>
        <div className="d-flex justify-content-center align-items-center border border-success p-4">
                <dl>
                    <dt>UserName : </dt>
                    <dd><input type="text" onChange={handleUser}/></dd>
                    <dt>Email/Mobile: </dt>
                    <dd><input type="text" onChange={handleContact}/></dd>
                    <span className={style}>{message.Result}</span>
                    <br/>
                    <button onClick={registerUser} className="btn btn-primary text-center">Enter</button>
                </dl>   
        </div>
        <div className="container-fluid">
         <h2>Amazon Fresh</h2>
         <span className="text-primary">Welcome {register.UserName}</span>
         <nav className="bg-dark text-white navbar navbar-dark justify-content-between">
            <div className="m-4">
                <div className="navbar-brand">Home</div>
                <ul className="list-unstyled float-left">
                   <li>About</li>
                   <li>Contact</li>
                </ul>          
            </div>
            <span><input type="text" style={{width:"800px",height:"40px",borderRadius:"100px"}} className="mx-2" placeholder="Search fruits,Groceries or vegetables"></input><span><button className="btn btn-primary bi bi-search"></button></span></span>
            <User/>
         </nav>
         <div className="container">
            {products.map(items=>
            <div key={items.id}>
                <img height="200px" width="200px" src={items.image}/>
                <h4>{items.title}</h4>
            </div>
                )}
         </div>
        </div>
        </createContextDetails.Provider>
    )
}
function User(){
    var user=useContext(createContextDetails)
    return(
        <span className="m-4">Hello {user.phone}</span>
    )
}