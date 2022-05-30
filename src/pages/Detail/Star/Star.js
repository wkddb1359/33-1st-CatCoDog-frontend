import React from 'react';
import './Star.scss';

function Star({ starCount }) {
  console.log('스타수', starCount);
  console.log(typeof starCount);

  return (
    <>
      {new Array(starCount).fill().map((_, i) => {
        return <i className="fa-solid fa-star" key={i} />;
      })}
    </>
  );
}

export default Star;
