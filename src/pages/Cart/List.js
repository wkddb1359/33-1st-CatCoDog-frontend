import React, { useEffect, useState } from 'react';
import './List.scss';

function List({
  item,
  checkedList,
  setCheckedList,
  setdelteItem,
  setCartList,
  cartList,
  totalBill,
  settotalBill,
  id,
}) {
  let [count, setCount] = useState(item.quantity);

  const addCount = () => {
    setCount(count + 1);
    settotalBill(prev => prev + item.price);
  };
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
      settotalBill(prev => prev - item.price);
    } else {
      alert('수량을 더이상 내릴 수 없습니다');
    }
  };

  const deleteItem = () => {
    let copy = [...cartList];
    copy.splice(id, 1);
    setCartList(copy);
    settotalBill(totalBill - item.item_total);
  };

  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    setIsChecked(checkedList && checkedList.includes(item));
  }, [checkedList, item]);
  useEffect(() => {
    setdelteItem(item);
  });

  const onCheck = e => {
    if (e.target.checked) {
      setIsChecked(true);
      setCheckedList([...checkedList, item]);
    } else {
      setIsChecked(false);
      setCheckedList(
        checkedList.filter(listItem => listItem.id !== item.cart_id)
      );
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
              <img
                className="productImage"
                src={item.thumbnail_url}
                alt="개밥사진"
              />
            </div>
            <span className="itemInfo">{item.product_name}</span>
            <button
              onClick={() => {
                deleteItem();
              }}
              className="xButton"
            >
              ✖️
            </button>
          </div>
        </th>
        <th className="listTh">
          <div className="plusMinusBox">
            <button className="miNus" onClick={minusCount}>
              -
            </button>
            {count}
            <button className="pLus" onClick={addCount}>
              +
            </button>
          </div>
        </th>
        <th className="listTh">
          {item.price * count} 원<button className="buyNow">바로구매</button>
        </th>
      </tr>
    </table>
  );
}

export default List;
