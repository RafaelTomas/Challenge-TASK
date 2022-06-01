import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import Login from './Templates/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route exact  path='/user' element={<Login/>} />
      </Routes>  
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);




