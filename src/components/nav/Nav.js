import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navWrap">
      <div className="nav">
        <div className="navTop">
          <div className="navTopBox">
            <Link to="/">
              <strong>
                <span className="navText">간식 1팩 100원부터!</span>
              </strong>
            </Link>
          </div>
        </div>
        <div className="navMiddle">
          <div className="middleLeft">
            <Link to="/">
              <i className="fa-solid fa-magnifying-glass" />
            </Link>
            <Link to="/">
              <span className="loginText">로그인</span>
            </Link>
            <Link to="/">
              <span className="signupText">회원가입</span>
            </Link>
          </div>
          <div className="middleCenter">
            <Link to="/">
              <img
                className="logoImage"
                src="/images/logo.jpg"
                alt="맛있다! 캣코독"
              />
            </Link>
          </div>
          <div className="middleRight">
            <Link to="/" className="searchLink">
              <i className="searchIcon" />
            </Link>
            <Link to="/" className="cartLink">
              <i className="cartIcon" />
              <span className="cartText">장바구니</span>
            </Link>
          </div>
        </div>
        <div className="navBottom" />
      </div>
    </div>
  );
};

export default Nav;
