import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BankHome from './BankHome'
import PersonalHome from './PersonalHome'
import PersonalLogin from "./PersonalLogin"
import PersonalRegister from "./PersonalRegister"
import NriHome from "./NriHome"
import NriLogin from "./NriLogin"
import NriRegister from "./NriRegister"
import CorporateHome from "./CorporateHome"
import CorporateLogin from "./CorporateLogin"
import CorporateRegister from "./CorporateRegister"
import CorporateDashboard from './CorporateDashboard'
import NriDashboard from './NriDashboard'
import PersonalDashboard from './PersonalDashboard'

export default function BankIndexpage() {
  return (
    <div>
          <BrowserRouter>
               <Routes>
                <Route path="/" element={<BankHome/>}>
                  <Route path="Personal" element={<PersonalHome/>}>
                   <Route path="Plogin"  element={<PersonalLogin/>}>
                    <Route path="Pdashboard"  element={<PersonalDashboard/>}/>
                   </Route>
                   <Route path="Pregister" element={<PersonalRegister/>}/>
                  </Route>
                  <Route path="NRI" element={<NriHome/>}>
                    <Route path="Nlogin" element={<NriLogin/>}>
                       <Route path="Ndashboard" element={<NriDashboard/>}/>
                    </Route>
                    <Route path="Nregister" element={<NriRegister/>}/>
                  </Route>
                  <Route path="Corporate" element={<CorporateHome/>}>
                    <Route path="Clogin" element={<CorporateLogin/>}>
                      <Route path="Cdashboard" element={<CorporateDashboard/>}/>
                    </Route>
                    <Route path="Cregister" element={<CorporateRegister/>}/>
                  </Route>
                </Route>
               </Routes>
          </BrowserRouter>
    </div>
  )
}
