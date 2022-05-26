import React from 'react';
import './Detail.scss';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import DetailGoods from './DetailGoods/DetailGoods';
import DetailGoodsNav from './DetailGoodsNav/DetailGoodsNav';
import ReviewSummary from './ReviewSummary/ReviewSummary';
import ReviewComment from './ReviewComment/ReviewComment';

function Detail() {
  return (
    <>
      <Nav />
      <main className="seongjuMain">
        <div className="inside">
          <DetailGoods />
          <DetailGoodsNav />
          <ReviewSummary />

          <div className="goodsReviewTitle">
            구매평<span className="goodsReviewCount">1018</span>
          </div>
          <ReviewComment />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Detail;
