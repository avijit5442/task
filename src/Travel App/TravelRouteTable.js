import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './Menu'
import TravelMainPage from './TravelMainPage'
import GiveReview from "./GiveReview"
import GetReview from "./GetReview"
import TravelRegister from './TravelRegister'
import TravelLogin from './TravelLogin'
import GiveReviewDashboard from './GiveReviewDashboard'
export default function TravelRouteTable() {
  return (
    <div>
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<TravelMainPage/>}>
                  <Route path="menu" element={<Menu/>}></Route>
                </Route>
                <Route path="/givereview" element={<GiveReview/>}>
                  
                </Route>
                <Route path="/login" element={<TravelLogin/>}/>
                <Route path="/register" element={<TravelRegister/>}/>
                <Route path="getreview" element={<GetReview/>}/>
                <Route path="/review" element={<GiveReviewDashboard/>}/>
             </Routes>
        </BrowserRouter>
    </div>
  )
}
