import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import RollinBannerWindow from '../../components/RollinBannerWindow/RollinBannerWindow';
import RollingBanner from '../../components/RollingBanner/RollingBanner';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <RollingBanner />
      <RollinBannerWindow />
      <Footer />
    </div>
  );
};

export default Main;
