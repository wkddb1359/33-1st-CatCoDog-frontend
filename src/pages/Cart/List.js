import React, { useEffect, useState } from 'react';
import './List.scss';

function List({
  item,
  setTotalPrice,
  cartList,
  setCartList,
  checkedList,
  setCheckedList,
}) {
  let [count, setCount] = useState(item.qty);

  useEffect(() => {
    setTotalPrice(prev => prev + item.price);
  }, []);

  const addCount = () => {
    setCount(count + 1);
    setTotalPrice(prev => prev + item.price);
  };
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setTotalPrice(prev => prev - item.price);
    } else {
      alert('수량을 더이상 내일수 없습니다');
    }
  };

  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    setIsChecked(checkedList && checkedList.includes(item));
  }, [checkedList, item]);

  const onCheck = e => {
    if (e.target.checked) {
      setIsChecked(true);
      setCheckedList([...checkedList, item]);
    } else {
      setIsChecked(false);
      setCheckedList(checkedList.filter(listItem => listItem.id !== item.id));
    }
  };
  return (
    <table>
      <tr className="listTr">
        <th className="checkBox">
          <input type="checkbox" onChange={onCheck} checked={isChecked} />
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
          {item.price * count} 원<button className="buyNow">바로구매</button>
        </th>
      </tr>
    </table>
  );
}

export default List;
