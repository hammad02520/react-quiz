import './App.css';
import React  from 'react';
import Questionbox from './component/Questionbox';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login&signup/login'
import Home from './component/home/home';
import SignUp from './component/login&signup/signup';
import PrivateRoute from './component/Privateroutes/privatetoute';
import NotFound from './component/404Error/error';



function App() {
  const userLoggedIn = localStorage.getItem("userLoggedIn")
  return (
  <>
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/quiz' element={<PrivateRoute Component={Questionbox}/>} />
    <Route path='/quiz' element={userLoggedIn == "true"?<PrivateRoute Component={Questionbox}/>:<Login />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
</Router>

  </>
  );
}
export default App;
