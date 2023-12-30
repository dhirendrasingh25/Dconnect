import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import NotFound from './components/404/NotFound';
import HomePage from './components/Home/HomePage';
import Signup from './components/Auth/Signup';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<HomePage/>} /> */}
        <Route path='/' element={
          <HomePage>
            <Login />
          </HomePage>
          } />
          <Route path='/signup' element={
          <HomePage>
            <Signup />
          </HomePage>
          } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
