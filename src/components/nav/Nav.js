import React from 'react';
import NavBottom from '../NavBottom/NavBottom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="navWrap">
      <div className="nav">
        <div className="navTop">
          <div className="navTopBox">
            <a>
              <strong>
                <span className="navText">간식 1팩 100원부터!</span>
              </strong>
            </a>
          </div>
        </div>
        <div className="navMiddle">
          <div className="middleLeft"></div>
          <div className="middleCenter"></div>
          <div className="middelRight"></div>
        </div>
        <div className="navBottom">
          <NavBottom />
        </div>
      </div>
    </div>
  );
};

export default Nav;
