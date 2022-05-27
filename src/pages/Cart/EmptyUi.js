import React from 'react';
import './ListOn.scss';
import { Link } from 'react-router-dom';
import './EmptyUi.scss';
function EmptyUi() {
  return (
    <div className="noItem">
      <div className="noItemBox">
        <div className="cartImageBox">
          <i className="fa-solid fa-cart-shopping" id="cartImage" />
          <div className="cartText">
            <span className="emptyText">장바구니가 비었습니다.</span>
          </div>
        </div>
        <Link to="/main">
          <button>계속 쇼핑하기</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyUi;
