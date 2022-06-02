import React from 'react';
import Nav from '../../components/nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

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

export default Main; */

import React from 'react';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';

import './Main.scss';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../login/SignUp';
import Cart from '../Cart/Cart';

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
