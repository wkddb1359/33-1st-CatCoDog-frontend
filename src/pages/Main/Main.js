import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import SignUp from '../login/SignUp';
import List from '../List/List';
import Detail from '../Detail/Detail';
import Cart from '../Cart/Cart';
import MyPage from '../login/component/MyPage';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
