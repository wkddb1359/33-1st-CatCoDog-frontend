import React from 'react';
import './Detail.scss';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

function Detail() {
  return (
    <>
      <Nav />
      <main className="seongjuMain">
        <div className="inside">
          <div className="goodsWrapper">
            <div className="goodsImgContainer">
              <img
                src="./images/logo.jpg"
                className="goodsImg"
                width={610}
                height={610}
                alt="제품사진"
              />
              <div className="goodsSmallImg">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
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
                  </div>
                </header>
                <div className="goodsFormItemSummary"></div>
                <div className="goodsFormItemDetail"></div>
                <div className="goodsFormItemFlavor"></div>
                <div className="goodsFormButton"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Detail;
