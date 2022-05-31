import React, { useState, useEffect } from 'react';
import List from './List';
import './ListOn.scss';

function ListOn({ cartList, setCartList, total, checkedList, setCheckedList }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const shipping = 3000;
  const shippingPlusItem = totalPrice + shipping;

  const [isAllChecked, setIsAllChecked] = useState(false);
  //전체 선택 여부
  useEffect(() => {
    setIsAllChecked(cartList.every(cartItem => checkedList.includes(cartItem)));
  }, [cartList, checkedList]);
  ///.every 배열안의 모든 요소가 주어진 함수를통과하는지 테스트

  const onClicked = e => {
    console.log('결과', e.target.checked);
    if (e.target.checked) {
      setCheckedList(cartList);
      setIsAllChecked(true);
    } else {
      setCheckedList([]);
      setIsAllChecked(false);
    }
  };

  const onbtnClick = e => {};

  return (
    <>
      <table>
        <thead>
          <th className="checkBox1">
            <input
              type="checkbox"
              onChange={onClicked}
              checked={isAllChecked}
            />
          </th>
          <th className="InfoTh">상품정보</th>
          <th className="thcartinfo">수량</th>
          <th className="thcartinfo">주문금액</th>
        </thead>
      </table>
      {cartList.map(item => {
        return (
          <List
            key={item.id}
            item={item}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
            cartList={cartList}
            setCartList={setCartList}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
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
