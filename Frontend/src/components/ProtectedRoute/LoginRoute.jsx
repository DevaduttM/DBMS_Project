import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const LoginRoute = () => {
    const loggedin = window.localStorage.getItem('isLoggedIn');
  return loggedin === 'true' ? <Navigate to = "/dashboard"/> : <Outlet />
}

export default LoginRoute