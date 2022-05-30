import React from 'react';
import Nav from '../../components/nav/Nav';
import ProductListNav from './ProductListNav';
import ProductList from './ ProductList';
import Footer from '../../components/footer/Footer';
import NAV_NAME_DATA from './navNameData';
import '../../styles/common.scss';
import { useState, useEffect } from 'react';

const CatProductMain = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/all-items.json')
      .then(res => res.json())
      .then(data => {
        setItemList(data.cat);
      });
  }, []);

  return (
    <>
      <Nav />
      <ProductListNav NAV_NAME_DATA={NAV_NAME_DATA} />
      <ProductList itemList={itemList} />
      <Footer />
    </>
  );
};

export default CatProductMain;
