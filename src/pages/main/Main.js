import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';
import Cart from '../cart/Cart';

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Nav />
        <Cart />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
