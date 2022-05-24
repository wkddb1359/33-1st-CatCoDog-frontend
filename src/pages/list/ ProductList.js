import React from 'react';
import Product from './Product';
import { useState, useEffect } from 'react';

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
    </>
  );
};

export default ProductList;
