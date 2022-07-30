import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MealDashboard from './MealDashboard'
import MealHome from './MealHome'
import MealLogin from './MealLogin'
import MealRegister from './MealRegister'
export default function MealRouter() {
  return (
    <div>
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<MealHome/>}/>
        <Route path="/register" element={<MealRegister/>}/>
        <Route path="/login" element={<MealLogin/>}/>
        <Route path="/dashboard" element={<MealDashboard/>}/>
        
     </Routes>
   </BrowserRouter>
    </div>
  )
}
