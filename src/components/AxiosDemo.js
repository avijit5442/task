import axios from "axios"
import {useState,useEffect} from "react"
export default function AxiosDemo(){

const [users,setUsers] = useState([])
useEffect(()=>{
      axios.get("http://127.0.0.1:9400/getusers")
           .then((response)=>{
                setUsers(response.data)
           })
           .catch(function(error){
                 console.log(error)
           })
},[])
/*
axios({
    [
       {method:"GET",url:"http://127.0.0.1:9400/getusers"},
       {method:"GET",url:"http://fakestoreapi.com/products"},
    ]
    
})
*/
    return(
        <>
        <ul className="container">user's age
        {users.map(user=>
            <li>{user.age}</li>)}
        </ul>
        </>
    )
}