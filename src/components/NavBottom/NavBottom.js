import React from 'react';
import './NavBottom.scss';

const NavBottom = () => {
  return (
    <div className="navBottom">
      <ul className="navContainer">
        <button className="best">베스트</button>
        <button className="event">이벤트</button>
        <button className="cat">고양이</button>
        <button className="dog">강아지</button>
        <button className="product">용품</button>
        <button className="burk">대용량존</button>
      </ul>
    </div>
  );
};

export default NavBottom;
