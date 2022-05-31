import React from 'react';
import NavBottom from '../NavBottom/NavBottom';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const moveMyPage = () => {
    navigate(`/mypage`);
  };

  const moveLogin = () => {
    navigate(`/login`);
  };

  const moveSignUp = () => {
    navigate(`/signup`);
  };

  const moveCart = () => {
    navigate(``);
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
            <div className="moveMyPage" onClick={moveMyPage}>
              <i className="fa-solid fa-user" />
            </div>
            <div className="moveLogin" onClick={moveLogin}>
              <span className="loginText">로그인</span>
            </div>
            <div className="moveSignUp" onClick={moveSignUp}>
              <span className="signupText">회원가입</span>
            </div>
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
            <div className="moveCart" onClick={moveCart}>
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

export default Nav;
