import React from 'react';
import { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import ProductListNav from './ProductListNav';
import ProductList from './ ProductList';
import Footer from '../../components/footer/Footer';
import NAV_NAME_DATA from './navNameData';
import '../../styles/common.scss';

const CatProductMain = () => {
  const [itemList, setItemList] = useState([]);
  const [selected, setSelected] = useState('');
  const [listId, setListId] = useState('all-items');
  console.log(listId);

  useEffect(() => {
    fetch(`/data/${listId}.json`)
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, [listId]);

  return (
    <>
      <Nav />
      <ProductListNav
        NAV_NAME_DATA={NAV_NAME_DATA}
        selected={selected}
        setSelected={setSelected}
        setListId={setListId}
      />
      <ProductList itemList={itemList} />
      <Footer />
    </>
  );
};

export default CatProductMain;
