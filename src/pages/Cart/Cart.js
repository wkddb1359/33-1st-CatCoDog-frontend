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
  console.log(checkedList);

  useEffect(() => {
    fetch('/data/cartList.JSON')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <section className="thisisCart">
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
