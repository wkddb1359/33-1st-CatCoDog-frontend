import React from 'react';
import { useState, useEffect } from 'react';
import ListOn from './ListOn';
import EmptyUi from './EmptyUi';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const total = cartList.length;
  const Empty = cartList.length === 0;
  const [checkedList, setCheckedList] = useState([]);
  const [totalBill, settotalBill] = useState(0);

  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');

  useEffect(() => {
    fetch('http://10.58.2.22:8000/orders/cart', {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data.data);
        console.log(data.data);
        settotalBill(data.total_bill);
      });
  }, []);
  return (
    <section className="Cart">
      <div className="inside">
        <div className="basket">
          장바구니 <span className="blue">{total}</span>
        </div>
        <div className="cart">
          <div className="tableWrapper">
            <div>
              {!Empty ? (
                <ListOn
                  cartList={cartList}
                  setCartList={setCartList}
                  total={total}
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                  totalBill={totalBill}
                  settotalBill={settotalBill}
                />
              ) : (
                <EmptyUi Empty={Empty} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
