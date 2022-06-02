import React from 'react';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import Footer from '../../components/footer/Footer';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <RollingBanner />
        <RollingBannerWindow />
        <div className="eventBannerDiv">
          <img
            src="/images/eventBanner.png"
            className="eventBanner"
            alt="eventBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
