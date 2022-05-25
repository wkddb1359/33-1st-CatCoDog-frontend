import React, { useEffect, useState } from 'react';
import './RollingBanner.scss';
import slideBanner from '../../slideBanner.json';

const RollingBanner = () => {
  const [bannerData] = useState(slideBanner);
  const [slideIndex, setSlideIndex] = useState(1);

  const moveSlide = index => {
    setSlideIndex(index);
  };

  return (
    <div className="rollingBanner">
      <section className="rollingBannerContainer">
        {bannerData.map((img, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? 'slideImg active' : 'slideImg'
              }
              key={img.id}
            >
              <img src={img.src} alt="피드 이미지" />
            </div>
          );
        })}
        {/*  <li className="banner1">
            <img
              className="bannerImg"
              src="https://velog.velcdn.com/images/cadyky95/post/814f05a3-d3b6-4d67-9b17-147d19f0c5f2/image.png"
              alt="간식1"
            />
            <a href="https://petsoban.com/shop_view/?idx=93" className="link1">
              <img
                className="bannerImgLink"
                src="https://velog.velcdn.com/images/cadyky95/post/0efd6ad7-1f03-4eef-8507-e48e38b63996/image.png"
                alt="링크 이미지"
              />
            </a>
          </li>
          <li className="banner2">
            <img
              className="bannerImg"
              src="https://velog.velcdn.com/images/cadyky95/post/a76c952f-9892-4c31-baf1-18e3852a7fb6/image.png"
              alt="간식2"
            />
            <a href="https://petsoban.com/shop_view/?idx=93" className="link2">
              <img
                className="bannerImgLink"
                src="https://velog.velcdn.com/images/cadyky95/post/d5507725-742d-4157-97c1-bc3395c4de31/image.png"
                alt="링크 이미지2"
              />
            </a>
          </li>
          <li className="banner3">
            <img
              className="bannerImg"
              src="https://velog.velcdn.com/images/cadyky95/post/814f05a3-d3b6-4d67-9b17-147d19f0c5f2/image.png"
              alt="간식3"
            />
            <a href="https://petsoban.com/shop_view/?idx=93" className="link3">
              <img
                className="bannerImgLink"
                src="https://velog.velcdn.com/images/cadyky95/post/0efd6ad7-1f03-4eef-8507-e48e38b63996/image.png"
                alt="링크 이미지3"
              />
            </a>
          </li>
          <li className="banner4">
            <img
              className="bannerImg"
              src="https://velog.velcdn.com/images/cadyky95/post/a76c952f-9892-4c31-baf1-18e3852a7fb6/image.png"
              alt="간식4"
            />
            <a href="https://petsoban.com/shop_view/?idx=93" className="link4">
              <img
                className="bannerImgLink"
                src="https://velog.velcdn.com/images/cadyky95/post/d5507725-742d-4157-97c1-bc3395c4de31/image.png"
                alt="링크 이미지4"
              />
            </a>
          </li>
          <li className="banner5">
            <img
              className="bannerImg"
              src="https://velog.velcdn.com/images/cadyky95/post/814f05a3-d3b6-4d67-9b17-147d19f0c5f2/image.png"
              alt="간식3"
            />
            <a href="https://petsoban.com/shop_view/?idx=93" className="link5">
              <img
                className="bannerImgLink"
                src="https://velog.velcdn.com/images/cadyky95/post/0efd6ad7-1f03-4eef-8507-e48e38b63996/image.png"
                alt="링크 이미지3"
              />
            </a>
          </li> */}
      </section>
      {/* <div className="slideDot">
        <div className="owlDotActive">
          <span />
        </div>
        <div className="owlDot">
          <span />
        </div>
        <div className="owlDot">
          <span />
        </div>
        <div className="owlDot">
          <span />
        </div>
        <div className="owlDot">
          <span />
        </div>
      </div> */}
      <div className="dotContainer">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveSlide(index + 1)}
            className={slideIndex === index + 1 ? 'dots active' : 'dots'}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
