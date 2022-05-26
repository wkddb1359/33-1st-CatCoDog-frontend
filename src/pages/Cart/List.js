import React from 'react';
import './List.scss';

function List({ item }) {
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
          {item.qty}
        </th>
        <th className="listTh">
          {item.price}
          <button className="buyNow">바로구매</button>
        </th>
      </tr>
    </table>
  );
}

export default List;
