import React from 'react';
import Nav from '../../components/nav/Nav';
import ProductListNav from './ProductListNav';
import ProductList from './ ProductList';
import Footer from '../../components/footer/Footer';
import '../../styles/common.scss';

const CatProductMain = () => {
  return (
    <>
      <Nav />
      <ProductListNav />
      <ProductList />
      <Footer />
    </>
  );
};

export default CatProductMain;
