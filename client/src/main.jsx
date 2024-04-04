import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import ChatProvider from './components/context/ChatProvider.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ChatProvider>
  <ChakraProvider>
    
    <App  />
    
  </ChakraProvider>
  </ChatProvider>
  </Router>

)
