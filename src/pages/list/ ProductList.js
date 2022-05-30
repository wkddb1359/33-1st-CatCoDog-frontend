import React from 'react';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({ itemList }) => {
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
        {itemList.map(
          ({ id, name, img, price, discount, saletag, besttag, desc }) => {
            return (
              <Product
                key={id}
                name={name}
                img={img}
                price={price}
                discount={discount}
                saletag={saletag}
                besttag={besttag}
                desc={desc}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default ProductList;
