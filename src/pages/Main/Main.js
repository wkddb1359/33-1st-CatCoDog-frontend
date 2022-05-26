import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import RollingBannerWindow from '../../components/RollingBannerWindow/RollingBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <RollingBanner />
      <RollingBannerWindow />
      <Footer />
    </div>
  );
};

export default Main;
