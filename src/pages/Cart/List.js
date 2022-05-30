import React, { useEffect, useState } from 'react';
import './List.scss';

function List({ item, setTotalPrice, totalPrice }) {
  let [count, setCount] = useState(item.qty);
  let [EachTotalPrice, setEachTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(prev => prev + item.price);
    setEachTotalPrice(item.price * count);
  }, [count]);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <table>
      <tr className="listTr">
        <th className="checkBox">
          <input type="checkbox" />
        </th>
        <th className="listInfo">
          <div className="infoImage">
            <div className="admitDiv">
              <img className="productImage" src={item.img} alt="개밥사진" />
            </div>
            <span className="itemInfo">{item.info}</span>
          </div>
        </th>
        <th id="admitCss" className="listTh">
          <button className="Minus" onClick={minusCount}>
            -
          </button>
          {count}
          <button className="Plus" onClick={addCount}>
            +
          </button>
        </th>
        <th className="listTh">
          {EachTotalPrice} 원<button className="buyNow">바로구매</button>
        </th>
      </tr>
    </table>
  );
}

export default List;
