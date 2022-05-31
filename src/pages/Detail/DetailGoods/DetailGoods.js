import React, { useEffect, useState } from 'react';
import './DetailGoods.scss';

function DetailGoods() {
  const [gooodsData, setGoodsData] = useState([]);
  const [heartLike, setHeartLike] = useState(false);

  const toggleLike = () => {
    setHeartLike(!heartLike);
  };

  useEffect(() => {
    fetch('/data/goodsdata.json')
      .then(res => res.json())
      .then(data => setGoodsData(data));
  }, []);

  const [mainImgURL, setMainImgURL] = useState('');

  useEffect(() => {
    setMainImgURL(
      Object.keys(gooodsData).length !== 0 ? gooodsData.result.goodsURL[0] : ''
    );
  }, [gooodsData]);

  return (
    <div className="detailGoods">
      {mainImgURL && (
        <div className="goodsImgWrapper">
          <div className="goodsImgContainer">
            <img
              src={mainImgURL}
              className="goodsImg"
              width={610}
              height={610}
              alt="제품사진"
            />
            <div className="goodsSmallImg">
              {gooodsData.result.goodsURL.map((a, i) => {
                return (
                  <div
                    className="smallImgList"
                    key={i}
                    onClick={() => {
                      setMainImgURL(a);
                    }}
                  >
                    <img src={a} width={60} height={60} alt="제품미니사진" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="goodsFormWrapper">
            <div className="goodsFormContainer">
              <header className="goodsFormHeader">
                <div className="goodsFormHeaderTop">
                  <span className="goodsFormHeaderTitle">
                    {gooodsData.result.name}
                  </span>
                  <span className="goodsFormHeaderSale">SALE</span>
                  <span className="goodsFormHeaderBest">BEST</span>
                </div>
                <div className="goodsFormHeaderPrice">
                  <div className="originalPrice">
                    {gooodsData.result.price}원
                  </div>
                  <span className="saleRate">
                    {gooodsData.result.discountRate}
                  </span>
                  <span className="salePrice">
                    {gooodsData.result.discountPrice}원
                  </span>
                  <i className="fa-solid fa-share-nodes" />
                </div>
              </header>
              <p className="goodsSummaryText">
                {gooodsData.result.description}
              </p>
              <div className="goodsFormItemDetail">
                {PURCHASE_INFO.map((purchase, i) => {
                  return (
                    <p key={i}>
                      <span className="itemDetailInfo">{purchase.title}</span>
                      {purchase.content}
                    </p>
                  );
                })}
              </div>
              <div className="goodsFormItemQuantity">
                <p className="goodsQuantity">수량 *</p>
                <select className="goodsQuantitySelect">
                  <option value={0}>1개</option>
                  <option value={1}>2개</option>
                  <option value={2}>3개</option>
                  <option value={3}>4개</option>
                  <option value={4}>5개</option>
                </select>
              </div>
              <div className="goodsFormButton">
                <button id="buyButton">구매하기</button>
                <button>장바구니</button>
                <button onClick={toggleLike}>
                  <i
                    id={`${heartLike ? 'realHeart' : 'emptyHeart'}`}
                    className="fa-solid fa-heart"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailGoods;

const PURCHASE_INFO = [
  { id: 1, title: '구매 혜택', content: '100 포인트 적립예정' },
  { id: 2, title: '배송 방법', content: '택배' },
  {
    id: 3,
    title: '배송비',
    content: '3,000원 (30,000원 이상 무료 배송) | 도서산 간 배송비 추가',
  },
  {
    id: 4,
    title: '배송 안내',
    content: '오후 1시까지 주문 시 당일 출고 됩니다.',
  },
];
