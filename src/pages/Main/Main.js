import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Nav />
        <RollingBanner />
        <RollingBannerWindow />
        <div className="eventBannerDiv">
          <img src="/images/eventBanner.png" className="eventBanner" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
