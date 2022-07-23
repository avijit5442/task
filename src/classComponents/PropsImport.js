import {useState, useEffect } from "react"
import PropsExport from "./PropsExport";
export default function PropsImport(){
    const[users,setUsers]=useState([])
        function GetUsers(){
            fetch("https://fakestoreapi.com/users")
            .then(response=> response.json())
            .then(data=>{
                setUsers(data)
            })
        }
    useEffect(()=>{
        GetUsers()
    })

        return(
            <div>
            {users.map(user => 
                 <PropsExport key={user.id} user={user} />)}
            </div>
        )
    
}