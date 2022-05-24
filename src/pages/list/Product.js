import React from 'react';

const Product = ({ name, img, price }) => {
  return (
    <>
      <img className="productImg" src={img} alt="" />
      <div className="productDetail">
        <h2 className="productInfo name">{name}</h2>
        <div className="productInfo price">
          <p className="productPrice">{price}</p>
          <span className="productDiscount">13%</span>
          <p className="productDiscountPrice">{price}</p>
        </div>
        <span className="saleBar">SALE</span>
        <span className="bestBar">BEST</span>
        <p className="productInfo desc">갈지 않은 원물 100%</p>
        <div className="productInfo icons">
          <div className="comment">1734</div>
          <div className="cart">담기</div>
        </div>
      </div>
    </>
  );
};

export default Product;
