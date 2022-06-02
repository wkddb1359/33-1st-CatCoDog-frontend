import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slideBanner from '../../slideBanner.json';
import './RollingBanner.scss';

const RollingBanner = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const navigate = useNavigate();

  const moveProducts = id => {
    navigate(`/detail/${id}`);
  };

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
        {bannerData.map((img, index, arr) => {
          const { id, src } = img;
          return (
            <div
              className={
                slideIndex === index + 1 ? 'slideImg active' : 'slideImg'
              }
              key={id}
            >
              <img
                src={src}
                alt="피드 이미지"
                onClick={() => {
                  moveProducts(id);
                }}
              />
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
