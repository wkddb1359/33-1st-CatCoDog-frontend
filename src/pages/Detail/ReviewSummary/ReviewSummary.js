import React from 'react';
import './ReviewSummary.scss';

function ReviewSummary() {
  return (
    <div className="reviewSummary">
      <div className="ratingPointContainer">
        <div className="ratingStar">⭐⭐⭐⭐⭐</div>
        <p className="ratingNumber">4.7</p>
      </div>
      <div className="ratingBarWrapper">
        <div className="ratingBarContainer">
          {RATE.map(rate => {
            return (
              <div className="ratingBar" key={rate.id}>
                <p className="ratingBarPoint">{rate.rateName}</p>
                <div className="progressBar">
                  <div id={rate.idName} className="progress" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bestComment">
        <div className="bestCommentTitle">Best 구매자</div>
        <div className="bestCommentUserContainer">
          <ol className="bestCommentUserGroup">
            <li className="bestCommetUserId">wkddb1359</li>
            <li className="bestCommetUserId">rlatjdgns123</li>
            <li className="bestCommetUserId">tjdgywh8051</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ReviewSummary;

const RATE = [
  { id: 1, rateName: '5점', idName: 'progressFive' },
  { id: 2, rateName: '4점', idName: 'progressFour' },
  { id: 3, rateName: '3점', idName: 'progressThree' },
  { id: 4, rateName: '2점', idName: 'progressTwo' },
  { id: 5, rateName: '1점', idName: 'progressOne' },
];
