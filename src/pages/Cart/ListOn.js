import React from 'react';
import './ListOn.scss';
import List from './List';

function ListOn({ cartList, total }) {
  return (
    <>
      {cartList.map((item, idx) => {
        return <List key={cartList.id} item={item} />;
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
            <div className="priceprops" />
            <div className="priceInfo">
              <span className="text">상품금액</span>
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
