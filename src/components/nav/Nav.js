import React from 'react';
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
          <div className="middleLeft" />
          <div className="middleCenter" />
          <div className="middelRight" />
        </div>
        <div className="navBottom" />
      </div>
    </div>
  );
};

export default Nav;
