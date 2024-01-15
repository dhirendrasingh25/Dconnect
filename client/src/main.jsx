import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import ChatProvider from './components/context/chatProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ChatProvider>
    <App  />
    </ChatProvider>
  </ChakraProvider>

)
