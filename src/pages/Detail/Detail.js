import React, { useEffect, useState } from 'react';
import DetailGoods from './DetailGoods/DetailGoods';
import DetailGoodsNav from './DetailGoodsNav/DetailGoodsNav';
import ReviewSummary from './ReviewSummary/ReviewSummary';
import ReviewComment from './ReviewComment/ReviewComment';
import './Detail.scss';

function Detail() {
  const [goodsData, setGoodsData] = useState([]);

  // /data/goodsdata.json
  // http://10.58.0.92:8000/products/1
  // `http://10.58.2.22:8000/products/${params.id}`

  useEffect(() => {
    fetch('/data/goodsdata.json')
      .then(res => res.json())
      .then(data => setGoodsData(data));
  }, []);

  const [mainImgURL, setMainImgURL] = useState('');

  useEffect(() => {
    setMainImgURL(
      Object.keys(goodsData).length !== 0
        ? goodsData.result.product_images[0]
        : ''
    );
  }, [goodsData]);

  return (
    <main className="detail">
      <div className="inside">
        <DetailGoods
          mainImgURL={mainImgURL}
          setMainImgURL={setMainImgURL}
          goodsData={goodsData}
        />
        <DetailGoodsNav />
        <ReviewSummary />
        <ReviewComment />
      </div>
    </main>
  );
}

export default Detail;
