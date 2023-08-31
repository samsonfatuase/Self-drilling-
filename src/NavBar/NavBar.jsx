import React from 'react'
import {Link, Route, Routes, Navigate} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import DashBoard from '../NestLink/DashBoard'
import Account from '../NestLink/Account'
import Profile from '../NestLink/Profile'
import NotFound from '../NotFoundComponent/NotFound'
import PrivateRoutes from '../utilities/PrivateRoutes'
import './NavBar.css';

export default function NavBar() {
  return (
    <>
    <div>
        <div className='navbar'>
        <Link to ='/' >Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
        <Link to= '/dashboard'>DashBoard</Link>
        </div>
        
        <Routes>
        <Route element={<PrivateRoutes />}>
         <Route  path="/" element={<Home />} />
         
         <Route  path="/register" element={<Register />} />

         <Route  path="/dashboard" element={<DashBoard />}>
         <Route  path="account" element={<Account />} />
         <Route  path="profile" element={<Profile />} />
         </Route>

         <Route  path="/notfound" element={<NotFound />} />
         <Route  path="*" element={<Navigate to='/notfound' />} />
         </Route>
         <Route  path="/login" element={<Login />} />
      </Routes>
    </div>
    </>
    
  )
}
