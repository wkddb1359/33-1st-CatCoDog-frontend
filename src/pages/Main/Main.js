import React from 'react';
<<<<<<< HEAD
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
=======
import Nav from '../../components/Nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import Footer from '../../components/footer/Footer';
import './Main.scss';
>>>>>>> main

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
        <Footer />
      </div>
    </div>
  );
};

export default Main;
