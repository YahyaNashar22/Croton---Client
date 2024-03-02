import React from 'react'
import { userStore } from '../store'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const {user} = userStore(); 

    if(Object.keys(user).length<1){
        return <Navigate to='/login' replace />
    }

    if(!user.gender){
        return <Navigate to='/extrainfo' replace />
    }

  return (
    <Outlet />
  )
}

export default ProtectedRoute