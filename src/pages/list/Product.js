import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({
  id,
  name,
  thumbnail_url,
  review_count,
  price,
  discount_rate,
  discounted_price,
  description,
}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="product">
      <div className="productImgContainer">
        <img className="productImg" src={thumbnail_url} alt="" />
        <div className="productImgOverlay" onClick={goToDetail} />
      </div>
      <div className="productDetail">
        <h2 className="productInfo name">{name}</h2>
        <div className="productInfo price">
          <p
            className={`${discount_rate === 0 ? 'invisible' : 'productPrice'}`}
          >
            {price}원
          </p>
          <span
            className={`${
              discount_rate === 0 ? 'invisible' : 'productDiscount'
            }`}
          >
            {discount_rate}%
          </span>
          <span className="productDiscountPrice">{discounted_price}원</span>
        </div>
        <span className={`${discount_rate === 0 ? 'invisible' : 'saleBar'}`}>
          SALE
        </span>
        <span className={`${discount_rate === 0 ? 'invisible' : 'bestBar'}`}>
          BEST
        </span>
        <p className="productInfo desc">{description}</p>
        <div className="productInfo icons">
          <span className="listComment">
            <i className="fa-solid fa-comment" />
            {review_count}
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
