import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatProductMain from './pages/list/CatProductMain';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Detail from './pages/detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/dog" element={<CatProductMain />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
