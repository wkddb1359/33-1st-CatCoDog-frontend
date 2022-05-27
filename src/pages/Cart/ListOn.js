import React, { useState } from 'react';
import './ListOn.scss';
import List from './List';

function ListOn({ cartList, total }) {
  const [totalPrice, setTotalPrice] = useState(0);
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
              <span className="pr">3000</span>원 =
              <span className="pr"> {`${totalPrice + 3000}`}</span>원
            </div>
            <div className="priceInfo">
              <span className="text">주문금액</span>
              <span className="text">배송비</span>
              <span className="text">총 주문고객</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOn;
