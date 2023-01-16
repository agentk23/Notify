import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext, useState } from 'react';


export default function PrivateRoutes() {
  const currentUser = useContext(AuthContext);
  
 
  return (
    <>
      {currentUser ? 
        <Outlet /> :
        <Navigate to="/login" />}    
    </>
  )
}