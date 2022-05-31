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
      <main className="detail">
        <div className="inside">
          <DetailGoods />
          <DetailGoodsNav />
          <ReviewSummary />
          <ReviewComment />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Detail;
