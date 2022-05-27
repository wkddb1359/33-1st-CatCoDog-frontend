import React from 'react';
import NavBottom from '../NavBottom/NavBottom';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="navWrap">
      <div className="nav">
        <div className="navTop">
          <div className="navTopBox">
            <Link to="/" className="navtopLink">
              <strong>
                <span className="navText">간식 1팩 100원부터!</span>
              </strong>
            </Link>
          </div>
        </div>
        <div className="navMiddle">
          <div className="middleLeft">
            <Link to="/" className="userIcon">
              <i className="fa-solid fa-user" />
            </Link>
            <Link to="/" className="loginLink">
              <span className="loginText">로그인</span>
            </Link>
            <Link to="/" className="signupLink">
              <span className="signupText">회원가입</span>
            </Link>
          </div>
          <div className="middleCenter">
            <Link to="/">
              <img
                className="logoImage"
                src="/images/logo.png"
                alt="맛있다! 캣코독"
              />
            </Link>
          </div>
          <div className="middleRight">
            <Link to="/" className="searchLink">
              <i className="fa-solid fa-magnifying-glass" />
            </Link>
            <Link to="/" className="cartLink">
              <i className="fa-solid fa-cart-shopping" />
              <span className="cartText">장바구니</span>
            </Link>
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
