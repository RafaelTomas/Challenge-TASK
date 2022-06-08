import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Register from './Templates/Register';
import Login from './Templates/Login';
import Task from './Templates/Task';

import AuthService from './services/auth';

import Nav from './Components/Nav';
import NotFound from './Components/404';

const ProtectedRoute = ({ children }) => {
  if (!AuthService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route exact path='/' element={<Login />} />
        <Route
          path="/task"
          element={
            <ProtectedRoute>
              <Nav />
              <Task />
            </ProtectedRoute>
          }
        />
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;