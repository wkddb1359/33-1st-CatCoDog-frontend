import React from 'react';
import './DetailGoods.scss';

function DetailGoods() {
  return (
    <div className="goodsWrapper">
      <div className="goodsImgContainer">
        {/* map돌리기 (mock data 사용예정)*/}
        <img
          src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
          className="goodsImg"
          width={610}
          height={610}
          alt="제품사진"
        />
        <div className="goodsSmallImg">
          <ul>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
            <li className="smallImgList">
              <img
                src="https://velog.velcdn.com/images/cadyky95/post/26f6e5de-884d-456c-8320-17308c161728/image.png"
                width={60}
                height={60}
                alt="제품미니사진"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="goodsFormWrapper">
        <div className="goodsFormContainer">
          <header className="goodsFormHeader">
            <div className="goodsFormHeaderTop">
              <span className="goodsFormHeaderTitle">
                바른트릿 9종 골라담기
              </span>
              <span className="goodsFormHeaderSale">SALE</span>
              <span className="goodsFormHeaderBest">BEST</span>
            </div>
            <div className="goodsFormHeaderPrice">
              <div className="originalPrice">7,900원</div>
              <span className="saleRate">13%</span>
              <span className="salePrice">6,900원</span>
              <i className="fa-solid fa-share-nodes" />
            </div>
          </header>
          <p className="goodsSummaryText">갈지 않은 원물 100%</p>
          <div className="goodsFormItemDetail">
            <p>
              <span className="itemDetailInfo">구매혜택</span> 69 포인트
              적립예정
            </p>
            <p>
              <span className="itemDetailInfo">배송 방법</span> 택배
            </p>
            <p>
              <span className="itemDetailInfo">배송비</span> 3,000원 (30,000원
              이상 무료 배송) | 도서산간 배송비 추가
            </p>
            <p>
              <span className="itemDetailInfo">배송 안내</span> 오후 1시까지
              주문 시 당일 출고 됩니다.
            </p>
          </div>
          <div className="goodsFormItemQuantity">
            <p className="goodsQuantity">수량 *</p>
            <select className="goodsQuantitySelect">
              <option value={0}>0개</option>
              <option value={1}>1개</option>
              <option value={2}>2개</option>
              <option value={3}>3개</option>
              <option value={4}>4개</option>
              <option>직접입력</option>
            </select>
          </div>
          <div className="goodsFormButton">
            <button id="buyButton">구매하기</button>
            <button>장바구니</button>
            <button>
              <i className="fa-regular fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGoods;
