import React from 'react'
import axios from "axios"
import { useState } from 'react'

export default function SeeList() {
    const [lists,setlists]=useState([])

        axios.get("http://127.0.0.1:9400/getlist")
             .then((response)=>{
                     setlists(response.data) 
                     console.log(lists)
               })   

  return (
    <div className="container-fluid">
        <h2>Your To-do list is here</h2>
        <hr/>
        {
            lists.map(list=>
                <div className='row'>
                    <ul className='col-8 container-fluid '>
                        <li>{list.Name}</li>
                    </ul>
                    <button className="btn btn-success col-1 my-2 btn-sm">Mark as completed</button>
                    <button className="btn btn-danger col-1 m-2 btn-sm">Drop</button>
                    <hr/>
                </div>
                )
        }

    </div>
  )
}
