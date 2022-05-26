import React, { useEffect, useState } from 'react';
import './RollingBanner.scss';
import slideBanner from '../../slideBanner.json';

const RollingBanner = () => {
  const [bannerData] = useState(slideBanner);
  const [slideIndex, setSlideIndex] = useState(1);

  const moveSlide = index => {
    setSlideIndex(index);
  };

  const slideTime = () => {
    if (slideIndex !== bannerData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === bannerData.length) {
      setSlideIndex(1);
    }
  };

  useEffect(() => {
    const timer = setInterval(slideTime, 2000);
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
            onClick={() => moveSlide(index + 1)}
            className={slideIndex === index + 1 ? 'dots active' : 'dots'}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
