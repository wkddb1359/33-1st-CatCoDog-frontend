import React from 'react';
import Nav from '../../components/Nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import './Main.scss';
import Footer from '../../components/Footer/Footer';
import { Routes } from 'react-router-dom';

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
        <Routes></Routes>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
