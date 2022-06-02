import React from 'react';
import NavBottom from '../NavBottom/NavBottom';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const movePage = e => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className="navWrap">
      <div className="nav">
        <div className="navTop">
          <div className="navTopBox">
            <strong>
              <span className="navText">간식 1팩 100원부터!</span>
            </strong>
          </div>
        </div>
        <div className="navMiddle">
          <div className="navMiddleLeft">
            {NAV_LIST.map(list => {
              return (
                <div
                  key={list.id}
                  id={list.path}
                  className={list.name}
                  onClick={movePage}
                >
                  {list.html}
                </div>
              );
            })}
          </div>
          <div className="navMiddleCenter">
            <img
              className="logoImage"
              src="/images/logo.png"
              alt="맛있다! 캣코독"
            />
          </div>
          <div className="navMiddleRight">
            <div className="moveSearch">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div id="cart" className="moveCart" onClick={movePage}>
              <i className="fa-solid fa-cart-shopping" />
              <span className="cartText">장바구니</span>
            </div>
          </div>
        </div>
        <div className="navBottom">
          <NavBottom />
        </div>
      </div>
    </div>
  );
};

const NAV_LIST = [
  {
    id: 1,
    path: 'mypage',
    name: 'moveMyPage',
    html: <i className="fa-solid fa-user" />,
  },
  {
    id: 2,
    path: 'login',
    name: 'moveLogin',
    html: <span className="loginText">로그인</span>,
  },
  {
    id: 3,
    path: 'signup',
    name: 'moveSignUp',
    html: <span className="signupText">회원가입</span>,
  },
];

export default Nav;
