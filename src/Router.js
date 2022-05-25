import React from 'react';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Main from './pages/Main/Main';
import SignUp from './pages/login/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/haimsignup" element={<SignUp />} />
        <Route path="/haimlogin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
