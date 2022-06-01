import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductListNav from './ProductListNav';
import ProductList from './ ProductList';
import NAV_NAME_DATA from './navNameData';
import '../../styles/common.scss';

const CatProductMain = () => {
  const [itemList, setItemList] = useState([]);
  const [selected, setSelected] = useState('dog');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.0.101:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setItemList(data.data);
      });
  }, [location.search]);

  const pageMove = name => {
    navigate(`?category=${name}`);
  };

  const [pageLimit, setPageLimit] = useState(12);
  const morePage = () => {
    setPageLimit(pageLimit => pageLimit + 6);
    const limit = pageLimit;
    const offset = 0;
    const queryString = `?category=${selected}&offset=${offset}&limit=${limit}`;
    navigate(queryString);
  };
  return (
    <>
      <ProductListNav
        NAV_NAME_DATA={NAV_NAME_DATA}
        selected={selected}
        setSelected={setSelected}
        setPageLimit={setPageLimit}
        pageMove={pageMove}
      />
      <ProductList
        itemList={itemList}
        NAV_NAME_DATA={NAV_NAME_DATA}
        morePage={morePage}
      />
    </>
  );
};

export default CatProductMain;
