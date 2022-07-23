import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import React from 'react'
import IshopHome from './IshopHome'
import IshopLogin from './IshopLogin'
import IshopRegister from "./IshopRegister"
import IshopDashboard from "./IshopDashboard"
import IshopProducts from "./IshopProducts"
import IshopProductdetails from './IshopProductdetails'
export default function IshopIndex() {
  return (
    <div>
        <header className='text-white bg-danger mt-4 d-flex justify-content-center align-items-center'>
            <h1>I Shopping</h1>
        </header>
        <section className="row">
        <BrowserRouter>
        <nav className='mx-2 col-1'>
            <div><Link className='btn btn-primary mt-2 w-100' to="/home">Home</Link></div>
            <div><Link className='btn btn-primary mt-2 w-100' to="/login">Login</Link></div>
            <div><Link className='btn btn-primary mt-2 w-100' to="/register">Register</Link></div>
            <div><Link className='btn btn-primary mt-2 w-100' to="/dashboard">Dashboard</Link></div>
        </nav>
        <main className='col-10'>
        <Routes>
            <Route path="/" element={<IshopHome/>}></Route>
            <Route path="/home"element={<IshopHome/>}></Route>
            <Route path="/login"element={<IshopLogin/>}></Route>
            <Route path="/register"element={<IshopRegister/>}></Route>
            <Route path="/dashboard"element={<IshopDashboard/>}></Route>
            <Route path="/product/:category" element={<IshopProducts/>}></Route>
            <Route path="/details/:id" element={<IshopProducts/>}></Route>
        </Routes>
        </main>
        </BrowserRouter>
        </section>
    </div>
  )
}
