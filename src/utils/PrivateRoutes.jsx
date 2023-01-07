import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';


export default function PrivateRoutes() {
  const {isLogged} = useAuth();
  
 
  return (
    isLogged ? <Outlet/> : <Navigate to='/login'/>
  )
}