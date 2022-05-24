import React from 'react';
import CatProductMain from './pages/list/CatProductMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CatListMain" element={<CatProductMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
