import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../pages/Main';

function AllRoutes() {
  return(
    <Routes>
      <Route exact path="/" element={ <Main /> } />
    </Routes>
  )
}

export default AllRoutes;