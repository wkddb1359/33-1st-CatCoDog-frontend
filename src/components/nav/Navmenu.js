import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Navmenu() {
  const downList = [{ id: 1 }];
  return (
    <div className="menuList">
      <Link to="#" className="menuLink">
        <li className="list">베스트</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">이벤트</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">고양이</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">강아지</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">용품</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">대용량존</li>
      </Link>
      <Link to="#" className="menuLink">
        <li className="list">커뮤니티</li>
      </Link>
    </div>
  );
}

export default Navmenu;
