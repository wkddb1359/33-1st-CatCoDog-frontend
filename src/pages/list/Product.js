import React from 'react';
import './Product.scss';

const Product = ({ name, img, price, discount, saletag, besttag, desc }) => {
  return (
    <div className="product">
      <div className="productImgContainer">
        <img className="productImg" src={img} alt="" />
        <div className="productImgOverlay" />
      </div>
      <div className="productDetail">
        <h2 className="productInfo name">{name}</h2>
        <div className="productInfo price">
          <p className={`${discount !== '' ? 'productPrice' : 'invisible'}`}>
            {price}
          </p>
          <span
            className={`${discount !== '' ? 'productDiscount' : 'invisible'}`}
          >
            {discount}
          </span>
          <span className="productDiscountPrice">{price}</span>
        </div>
        <span className={`${saletag !== '' ? 'saleBar' : 'invisible'}`}>
          {saletag}
        </span>
        <span className={`${besttag !== '' ? 'bestBar' : 'invisible'}`}>
          {besttag}
        </span>
        <p className="productInfo desc">{desc}</p>
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
