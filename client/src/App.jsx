import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import Login from './components/Auth/Login';
import NotFound from './components/404/NotFound';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
