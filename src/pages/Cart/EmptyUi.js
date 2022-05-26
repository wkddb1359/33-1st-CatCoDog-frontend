import React from 'react';
import './ListOn.scss';

function EmptyUi({ Empty }) {
  return (
    <>
      {Empty ? (
        <div>수량이 없습니다</div>
      ) : (
        <div className="cartFooter">
          <div className="buttonBox">
            <button className="selectBtn">
              <span className="deleteBtn">선택상품삭제</span>
            </button>
          </div>

          <div className="totalOrder">
            <p>
              <span className="">총 주문 상품몇개</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default EmptyUi;
