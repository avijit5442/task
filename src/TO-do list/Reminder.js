import React from 'react'
import axios from "axios"
import { useState } from 'react'
export default function () {
  const [lists,setlists]=useState([])
  axios.get("http://localhost:9400/getlist")
       .then((response)=>{
            setlists(response.data)
            console.log(lists)
       })
  return (
    <div className='container-fluid'>
       <h2>Your Reminder,Meetings...</h2>
       <hr/>
       {
        lists.map(reminder=>{
          <div>
            <ul>
              <li>{reminder.ReminderName}</li>
            </ul>
          </div>
        })
       }
    </div>
  )
}
