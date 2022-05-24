import React from 'react';
import './Product.scss';

const Product = ({ name, img, price }) => {
  return (
    <div className="productContainer">
      <img className="productImg" src={img} alt="" />
      <div className="productDetail">
        <h2 className="productInfo name">{name}</h2>
        <div className="productInfo price">
          <p className="productPrice">{price}</p>
          <span className="productDiscount">13%</span>
          <span className="productDiscountPrice">{price}</span>
        </div>
        <span className="saleBar">SALE</span>
        <span className="bestBar">BEST</span>
        <p className="productInfo desc">갈지 않은 원물 100%</p>
        <div className="productInfo icons">
          <span className="comment">
            <i className="fa-solid fa-comment" />
            1734
          </span>
          <span className="cart">
            <i className="fa-solid fa-cart-arrow-down" />
            담기
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
