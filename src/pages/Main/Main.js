import React from 'react';
import Nav from '../../components/Nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import Footer from '../../components/Footer/Footer';
import './Main.scss';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../login/SignUp';
import Cart from '../Cart/Cart';

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Nav />
        <RollingBanner />
        <RollingBannerWindow />
        <div className="eventBannerDiv">
          <img
            src="/images/eventBanner.png"
            className="eventBanner"
            alt="eventBanner"
          />
        </div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
