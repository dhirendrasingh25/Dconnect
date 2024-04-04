import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import NotFound from './components/404/NotFound';
import LandingPage from './components/Home/LandingPage';
import HomePage from './components/Home/HomePage';
import Signup from './components/Auth/Signup';
import Protected from './components/404/Protected';
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={
      
              <HomePage/> 
        } 
        />
        <Route path='/login' element={
          <LandingPage>
            <Login />
          </LandingPage>
          } />
          <Route path='/signup' element={
          <LandingPage>
            <Signup />
          </LandingPage>
          } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
    </>
  )
}

export default App
