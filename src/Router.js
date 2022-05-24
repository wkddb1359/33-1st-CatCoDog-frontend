import React from 'react';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{/*    <Route path="/" element={< />} /> */}</Routes>
      <Routes>
        <Route path="/haimLogin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
