import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
