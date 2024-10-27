import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const LoggedIn = window.localStorage.getItem('isLoggedIn');
  return LoggedIn === 'true' ? <Outlet /> : <Navigate to = "/login" />;
}

export default ProtectedRoute