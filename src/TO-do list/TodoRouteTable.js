import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Reminder from './Reminder'
import SeeList from './SeeList'
import ToDoIndex from './ToDoIndex'
export default function TodoRouteTable() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoIndex/>}/>
        <Route path="todolist" element={<SeeList/>}></Route>
        <Route path="reminder" element={<Reminder/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
