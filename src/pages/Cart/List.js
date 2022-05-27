import React, { useEffect } from 'react';
import './List.scss';

function List({ item, setTotalPrice, totalPrice }) {
  useEffect(() => {
    setTotalPrice(prev => prev + item.price);
  }, []);

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
          <button className="Minus"> -</button>
          {item.qty}
          <button className="Plus">+</button>
        </th>
        <th className="listTh">
          {item.price} 원<button className="buyNow">바로구매</button>
        </th>
      </tr>
    </table>
  );
}

export default List;
