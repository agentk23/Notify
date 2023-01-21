import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './context/authContext';
import HomePage from './pages/homePage';
import NavBar from './pages/navBar';
import Dashboard from './pages/dashboard';
import Login from './pages/loginPage';
import PrivateRoutes from './utils/PrivateRoute';
import GroupsPage from './pages/groupsPage';
import CreateNote from './pages/createNote';
import RegisterPage from './pages/registerPage';
import { AuthProvider } from './context/authContext';
import ErrorPage from './pages/errorPage';
import EditNote from './pages/EditNote';


function App() {
  

  return (
    <>
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard"/>
            <Route element={<EditNote/>} path="dashboard/:id"  />
            <Route element={<GroupsPage />} path="/groups" />
            < Route element={<CreateNote />} path="/createNote" />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/*' errorElement={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
