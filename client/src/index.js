import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';

import Register from './templates/Register';
import Login from './templates/Login';
import Task from './templates/Task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact  path='/user' element={<Register/>} />
          <Route path='/user/login' element={<Login/>} />
          <Route path='/user/task' element={<Task/>} />
        </Routes>  
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);




