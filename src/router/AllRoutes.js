import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';

function AllRoutes() {
  return(
    <Routes>
      <Route exact path="/" element={ <Main /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
    </Routes>
  )
}

export default AllRoutes;