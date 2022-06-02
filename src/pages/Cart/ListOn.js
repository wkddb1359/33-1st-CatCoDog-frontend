import React, { useState, useEffect } from 'react';
import List from './List';
import './ListOn.scss';

function ListOn({
  cartList,
  setCartList,
  total,
  checkedList,
  totalBill,
  setCheckedList,
  settotalBill,
}) {
  const shipping = 3000;
  const shippingPlusItem = totalBill + shipping;
  //전체 선택 여부
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [deleteItem, setdelteItem] = useState();

  useEffect(() => {
    setIsAllChecked(cartList.every(cartItem => checkedList.includes(cartItem)));
  }, [cartList, checkedList]);

  ///.every 배열안의 모든 요소가 주어진 함수를통과하는지 테스트

  const onClicked = e => {
    if (e.target.checked) {
      setCheckedList(cartList);
      setIsAllChecked(true);
    } else {
      setCheckedList([]);
      setIsAllChecked(false);
    }
  };

  const onbtnClick = checkedList => {
    setCheckedList(deleteItem.id);
    setCartList(cartList.filter(checkedList => checkedList == cartList));
  };

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
      {cartList.map((item, i) => {
        return (
          <List
            key={item.cart_id}
            item={item}
            cartList={cartList}
            setCartList={setCartList}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            setdelteItem={setdelteItem}
            id={i}
            totalBill={totalBill}
            settotalBill={settotalBill}
          />
        );
      })}
      <div className="cartFooter">
        <div className="buttonBox">
          <button className="selectBtn" onClick={() => onbtnClick(checkedList)}>
            <span className="deleteBtn">카트비우기</span>
          </button>
        </div>

        <div className="totalOrder">
          <p>
            <span className="totalItem">총 주문 상품 {total}개</span>
          </p>
          <div className="priceBox">
            <div className="priceprops">
              <span className="priceAll">{totalBill}</span>원 +
              <span className="priceAll">{totalBill <= 30000 ? 3000 : 0}</span>
              원 =
              <span className="priceAll">
                {totalBill <= 30000 ? shippingPlusItem : totalBill}
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
          <div className="orderBtnbox">
            <button className="orderBtn">구매하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOn;
