import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import About from './components/About/About'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import CarData from './components/CarData/CarData'
import './App.css'

import Pages from './components/Pages/Pages'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import LoginRoute from './components/ProtectedRoute/LoginRoute'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Pages />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/about' element = {<About />} />

          <Route element = {<LoginRoute />}>
            <Route path='/login' element = { <Login />} />
          </Route>

          <Route element = {<ProtectedRoute />}>
            <Route path='/dashboard' element = {<Dashboard /> } />
            <Route path='/profile' element = {<Profile /> } />
          </Route>
          <Route path='/cardata' element = {<CarData />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App