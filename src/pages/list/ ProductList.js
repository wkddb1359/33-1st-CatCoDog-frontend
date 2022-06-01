import React from 'react';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({ itemList, morePage }) => {
  return (
    <>
      <div className="listMainName">Dog</div>
      <div className="filterContainer">
        <select className="filterOption" name="filterBox">
          <option value="new">등록순</option>
          <option value="price">낮은가격순</option>
          <option value="-price">높은가격순</option>
        </select>
      </div>
      <div className="productListContainer">
        {itemList.map(
          ({
            product_id,
            name,
            thumbnail_url,
            review_count,
            price,
            discount_rate,
            discounted_price,
            description,
          }) => {
            return (
              <Product
                key={product_id}
                id={product_id}
                name={name}
                description={description}
                thumbnail_url={thumbnail_url}
                review_count={review_count}
                price={price}
                discount_rate={discount_rate}
                discounted_price={discounted_price}
              />
            );
          }
        )}
      </div>
      <div className="btnContainer">
        <button className="morePageBtn" onClick={morePage}>
          <span className="btnText">더보기</span>
        </button>
      </div>
    </>
  );
};

export default ProductList;
