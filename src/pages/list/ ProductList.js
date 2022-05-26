import React from 'react';
import Product from './Product';
import { useState, useEffect } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  return (
    <>
      <div className="listMainName">고양이 전체상품</div>
      <div className="filterContainer">
        <select className="filterOption" name="filterBox">
          <option value="register">등록순</option>
          <option value="lowPrice">낮은가격순</option>
          <option value="highPrice">높은가격순</option>
        </select>
      </div>
      <div className="productListContainer">
        {itemList.map(info => {
          return (
            <Product
              key={info.id}
              name={info.name}
              img={info.img}
              price={info.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
