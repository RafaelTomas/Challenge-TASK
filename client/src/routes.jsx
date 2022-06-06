import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Templates/Register';
import Login from './Templates/Login';
import Task from './Templates/Task';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;