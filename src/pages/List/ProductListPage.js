import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductListNav from './ProductListNav';
import ProductList from './ ProductList';
import NAV_NAME_DATA from './navNameData';
import FILTER_DATA from './filterData';
import '../../styles/common.scss';

const ProductListPage = () => {
  const [itemList, setItemList] = useState([]);
  const [selected, setSelected] = useState('고양이 전체상품');
  const [pageLimit, setPageLimit] = useState(12);
  const [listMainName, setListMainName] = useState('고양이 전체상품');
  const [filterValue, setFilterValue] = useState({
    categoryId: 'dog',
    sortId: '',
    offsetLimitId: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.2.197:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setItemList(data.data);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterValue.categoryId !== 'dog'
        ? `category=${filterValue.categoryId}`
        : `category=dog`
    }
${filterValue.sortId ? `&sort=${filterValue.sortId}` : ''}${
      filterValue.offsetLimitId ? `${filterValue.offsetLimitId}` : ''
    }`;
    navigate(queryString);
  }, [filterValue]);

  const pageMove = (value, name) => {
    setFilterValue(prev => {
      return { ...prev, categoryId: value };
    });
    setFilterValue(prev => {
      return { ...prev, offsetLimitId: `&offset=0&limit=6` };
    });
    setListMainName(name);
  };

  const morePage = () => {
    setPageLimit(pageLimit => pageLimit + 6);
    const limit = pageLimit;
    const offset = 0;
    const queryString = `&offset=${offset}&limit=${limit}`;
    setFilterValue(prev => {
      return { ...prev, offsetLimitId: queryString };
    });
  };

  const sortHandler = e => {
    setFilterValue(prev => {
      return { ...prev, sortId: e.target.value };
    });
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
        FILTER_DATA={FILTER_DATA}
        morePage={morePage}
        sortHandler={sortHandler}
        setFilterValue={setFilterValue}
        listMainName={listMainName}
      />
    </>
  );
};

export default ProductListPage;
