import React from 'react';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({
  itemList,
  morePage,
  sortHandler,
  FILTER_DATA,
  listMainName,
}) => {
  console.log(listMainName);
  return (
    <>
      <div className="listMainName">{listMainName}</div>
      <div className="filterContainer">
        <select
          className="filterOption"
          name="filterBox"
          onChange={sortHandler}
        >
          {FILTER_DATA.map(({ id, filterId, name }) => {
            return (
              <option value={filterId} key={id}>
                {name}
              </option>
            );
          })}
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
