import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRouter from './pages/Main/MainRouter';
import ProductListPage from './pages/List/ProductListPage';
import Detail from './pages/Detail/Detail';

import Login from './pages/login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainRouter />} />
        <Route path="/cat" element={<ProductListPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
