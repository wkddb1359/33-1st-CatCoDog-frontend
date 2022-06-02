import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/List/ProductListPage';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import Login from './pages/login/Login';
import SingUp from './pages/login/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/cat" element={<ProductListPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
