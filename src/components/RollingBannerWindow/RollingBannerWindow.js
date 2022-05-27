import React, { useEffect, useRef, useState } from 'react';
import './RollingBannerWindow.scss';
import windowBanner from '../../windowBanner.json';

const RollingBannerWindow = () => {
  const [refSlide, setRefSlide] = useState(0);
  const [windowData] = useState(windowBanner);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${refSlide}00%)`;
  }, [refSlide]);

  const moveDotSlide = index => {
    setRefSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRefSlide(prev => prev + 1);
      if (refSlide === 1) {
        setRefSlide(0);
      }
    }, 4000);
    return () => clearInterval(timer);
  });

  return (
    <div className="rollingBannerWindow">
      <section className="rollingWindowContainer" ref={slideRef}>
        {windowData.map(img => {
          return (
            <div id="windowCard" key={img.id}>
              <img src={img.src} alt="피드 이미지" className="imgScss" />
              <ul className="textSet">
                <li className="content">{img.content}</li>
                <li className="sub">{img.sub}</li>
              </ul>
            </div>
          );
        })}
      </section>
      <div className="refDotContainer">
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDotSlide(index)}
            className={refSlide === index ? 'dots active' : 'dots'}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBannerWindow;
