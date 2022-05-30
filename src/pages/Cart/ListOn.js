import React, { useState } from 'react';
import List from './List';
import './ListOn.scss';

function ListOn({ cartList, total }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const shipping = 3000;
  const shippingPlusItem = totalPrice + shipping;

  return (
    <>
      {cartList.map(item => {
        return (
          <List
            key={item.id}
            item={item}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
        );
      })}
      <div className="cartFooter">
        <div className="buttonBox">
          <button className="selectBtn">
            <span className="deleteBtn">선택상품삭제</span>
          </button>
        </div>

        <div className="totalOrder">
          <p>
            <span className="totalItem">총 주문 상품 {total}개</span>
          </p>
          <div className="priceBox">
            <div className="priceprops">
              <span className="pr">{totalPrice}</span>원 +
              <span className="pr">{totalPrice <= 30000 ? 3000 : 0}</span>원 =
              <span className="pr">
                {totalPrice <= 30000 ? shippingPlusItem : totalPrice}
              </span>
              원
            </div>
            <div className="priceInfo">
              <span className="text">주문금액</span>
              <span className="text">배송비</span>
              <span className="text">총 주문고객</span>
              <p className="five">30,000원 이상 구매시 배송비 무료</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOn;
