import React from 'react';
import CatProductMain from './pages/list/CatProductMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Detail from './pages/detail/Detail';
import Main from './pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catlistmain" element={<CatProductMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
