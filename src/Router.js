import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRouter from './pages/main/MainRouter';
import Login from './pages/login/Login';

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
