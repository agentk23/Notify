import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import NavBar from './pages/navBar';
import Dashboard from './pages/dashboard';
import Login from './pages/loginPage';
import PrivateRoutes from './utils/PrivateRoutes';
import GroupsPage from './pages/groupsPage';
import CreateNote from './pages/createNote';


function App() {

   
  return (
    <>
      <Router>
        <NavBar
          isLoggedIn={true}
        />
        <Routes>
            <Route element={<HomePage/>} path="/"/>
            <Route element={<PrivateRoutes/>}>
              <Route element={<Dashboard/>} path="/dashboard"/>
              <Route element={<GroupsPage/>} path="/groups"/>
              <Route element={<CreateNote/>} path="/createNote"/>
            </Route>

            <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>    
  );
}

export default App;
