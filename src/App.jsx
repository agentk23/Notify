import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import HomePage from './pages/homePage';
import NavBar from './pages/navBar';
import Dashboard from './pages/dashboard';
import Login from './pages/loginPage';
import PrivateRoutes from './utils/PrivateRoutes';
import GroupsPage from './pages/groupsPage';
import CreateNote from './pages/createNote';
import RegisterPage from './pages/registerPage';
import { useAuth } from './context/authContext';


function App() {
  const { isLogged, user } = useAuth();

  return (
    <>
      <Router>
        <NavBar
          isLoggedIn={isLogged}
          username={user}
        />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<GroupsPage />} path="/groups" />
            <Route element={<CreateNote />} path="/createNote" />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
