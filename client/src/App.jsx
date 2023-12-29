import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import NotFound from './components/404/NotFound';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
