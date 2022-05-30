import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatProductMain from './pages/list/CatProductMain';
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
        <Route path="/cat/:listId" element={<CatProductMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
