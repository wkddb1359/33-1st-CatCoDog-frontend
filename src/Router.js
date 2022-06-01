import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import MainRouter from './pages/Main/MainRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
