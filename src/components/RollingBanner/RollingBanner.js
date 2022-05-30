import React, { useEffect, useState } from 'react';
import slideBanner from '../../slideBanner.json';
import './RollingBanner.scss';

const RollingBanner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const bannerData = slideBanner;

  const moveSlide = index => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideIndex !== bannerData.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === bannerData.length) {
        setSlideIndex(1);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [slideIndex]);

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
      </section>
      <div className="dotContainer">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveSlide(index + 1)}
            className={slideIndex === index + 1 ? 'dots active' : 'dots'}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
