import React from 'react';
import ProductList from './ ProductList';
import '../../styles/common.scss';
import './CatProductMain.scss';

const CatProductMain = () => {
  return (
    <div className="listContainer">
      <div className="listNavContainer">
        <nav className="navBar">
          <ul className="navList">
            <li className="navList list1">
              <a className="listName" href="">
                고양이 전체상품
              </a>
            </li>
            <li className="navList list2">
              <a className="listName" href="">
                통살
              </a>
            </li>
            <li className="navList list3">
              <a className="listName" href="">
                동결건조
              </a>
            </li>
            <li className="navList list4">
              <a className="listName" href="">
                유산균/영양제
              </a>
            </li>
            <li className="navList list5">
              <a className="listName" href="">
                습식/파우치
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="listMainName">고양이 전체상품</div>
      <ProductList />
    </div>
  );
};

export default CatProductMain;
